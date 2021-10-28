import { dynamicBadge } from "@/core/dynamicData";

describe("#dynamicBadge", () => {
  describe("Url, label, and query", () => {
    it("displays a badge with a given label, URL and query", () => {
      expect(
        dynamicBadge(
          "version",
          "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
          "version"
        )
      ).toBe(
        "![](https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)"
      );
    });

    it("throws an error if `label` is empty", () => {
      expect(() =>
        dynamicBadge(
          "",
          "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
          "version"
        )
      ).toThrow();
    });

    it("throws an error if `url` is empty", () => {
      expect(() => dynamicBadge("version", "", "version")).toThrow();
    });

    it("throws an error if `query` is empty", () => {
      expect(() =>
        dynamicBadge(
          "version",
          "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
          ""
        )
      ).toThrow();
    });

    it("displays a badge pointing to an external link", () => {
      const linkTarget = "https://example.com";

      expect(
        dynamicBadge(
          "version",
          "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
          "version",
          linkTarget
        )
      ).toBe(
        "[![](https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://example.com)"
      );
    });
  });
});
