vi.mock("../src/b.js");
import { expect, test, vi } from "vitest";
import b from "../src/b.js";
import x from "../src/index.js";

test("default import", async () => {
  const result = x();
  expect(b).toHaveBeenCalled();
  expect(result).toBe("b");
});
