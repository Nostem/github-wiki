import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import yaml from "js-yaml"

const workflow = (name) =>
  yaml.load(readFileSync(new URL(`../.github/workflows/${name}`, import.meta.url), "utf8"))
const ci = workflow("ci.yaml")
const deploy = workflow("deploy.yml")
const mainOnly = "${{ github.ref == 'refs/heads/main' }}"
const steps = ci.jobs["build-and-test"].steps
const commands = ["npm ci", "npx tsc --noEmit", "npm test", "npx quartz build"]

function commandStep(command) {
  const matches = steps.filter((step) => step.run?.trim() === command)
  assert.equal(matches.length, 1, `require exactly one unmodified ${command} step`)
  return matches[0]
}

test("CI runs for main PRs and is reusable and manually runnable", () => {
  assert.deepEqual(ci.on.pull_request, { branches: ["main"] })
  assert.ok(Object.hasOwn(ci.on, "workflow_call"))
  assert.ok(Object.hasOwn(ci.on, "workflow_dispatch"))
  assert.deepEqual(Object.keys(ci.on).sort(), [
    "pull_request",
    "workflow_call",
    "workflow_dispatch",
  ])
})

test("CI has one unconditional Ubuntu verification job, without upstream gating", () => {
  assert.deepEqual(Object.keys(ci.jobs), ["build-and-test"])
  const job = ci.jobs["build-and-test"]
  assert.equal(job["runs-on"], "ubuntu-latest")
  assert.equal(job.if, undefined)
  assert.equal(job.needs, undefined)
  assert.equal(job.strategy, undefined)
  assert.ok(!JSON.stringify(ci).includes("jackyzha0/quartz"))
})

test("install, typecheck and real tests must precede the actual site build", () => {
  const positions = commands.map((command) => steps.indexOf(commandStep(command)))
  assert.deepEqual(
    positions,
    [...positions].sort((a, b) => a - b),
  )
  assert.deepEqual(
    steps.filter((step) => step.run).map((step) => step.run.trim()),
    commands,
  )
})

test("Pages artifact is uploaded only on main and only after verification and build", () => {
  const uploads = steps.filter((step) => step.uses?.startsWith("actions/upload-pages-artifact@"))
  assert.equal(uploads.length, 1)
  assert.equal(uploads[0].if, mainOnly)
  assert.equal(uploads[0].with.path, "public")
  for (const command of commands) {
    assert.ok(steps.indexOf(commandStep(command)) < steps.indexOf(uploads[0]))
  }
})

test("verification and deployment cannot ignore failures or conditionally bypass gates", () => {
  for (const definition of [ci, deploy]) {
    assert.equal(definition.defaults, undefined)
    for (const [id, job] of Object.entries(definition.jobs)) {
      assert.equal(job["continue-on-error"], undefined, id)
      assert.equal(job.defaults, undefined, id)
      assert.equal(job.if, definition === deploy && id === "deploy" ? mainOnly : undefined)
      for (const step of job.steps ?? []) {
        assert.equal(step["continue-on-error"], undefined, step.name)
        assert.equal(step.shell, undefined, step.name)
        const upload = step.uses?.startsWith("actions/upload-pages-artifact@")
        assert.equal(step.if, upload ? mainOnly : undefined, step.name)
      }
    }
  }
})

test("main deployments depend on the verified reusable workflow, never a separate build", () => {
  assert.deepEqual(deploy.on, { push: { branches: ["main"] }, workflow_dispatch: null })
  assert.deepEqual(Object.keys(deploy.jobs).sort(), ["build", "deploy"])
  assert.equal(deploy.jobs.build.uses, "./.github/workflows/ci.yaml")
  assert.equal(deploy.jobs.build.steps, undefined)
  assert.equal(deploy.jobs.build.needs, undefined)
  assert.equal(deploy.jobs.deploy.needs, "build")
})

test("deployment is main-only and keeps the GitHub Pages environment and action", () => {
  const job = deploy.jobs.deploy
  assert.equal(job.if, mainOnly)
  assert.equal(job.environment.name, "github-pages")
  assert.equal(job.environment.url, "${{ steps.deployment.outputs.page_url }}")
  assert.equal(job.steps.length, 1)
  assert.equal(job.steps[0].id, "deployment")
  assert.match(job.steps[0].uses, /^actions\/deploy-pages@/)
})

test("CI cannot publish upstream tags or obtain contents write permissions", () => {
  assert.equal(ci.permissions?.contents, "read")
  for (const definition of [ci, deploy]) {
    assert.notEqual(definition.permissions, "write-all")
    assert.notEqual(definition.permissions?.contents, "write")
    for (const job of Object.values(definition.jobs)) {
      assert.notEqual(job.permissions, "write-all")
      assert.notEqual(job.permissions?.contents, "write")
      for (const step of job.steps ?? []) {
        assert.ok(!step.uses?.includes("git-tag-action"))
      }
    }
    assert.equal(definition.jobs["publish-tag"], undefined)
  }
})
