import { expect, test } from "vitest";
import { dirname } from "path";
import { fileURLToPath } from "url";

import x from "../src/index.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

test("default import", async () => {
  expect(x()).toBe(2);
});
