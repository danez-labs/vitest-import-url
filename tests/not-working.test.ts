import { expect, test, vi } from "vitest";

async function importFixture() {
  await import("./fixtures/fixture.mjs");
}

test("import problem", async () => {
  await expect(importFixture()).rejects.toThrowError();
});
