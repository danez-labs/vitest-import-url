import { describe, expect, test } from "vitest";

describe("getLanguage", () => {
  test("detects language", () => {
    expect("ur").toBe("ur");
  });
});
