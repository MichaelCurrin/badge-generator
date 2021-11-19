import { dynamicBadge } from "@/core/dynamicData";

describe("Dynamic data badges", () => {
  describe("#dynamicBadge", () => {
    describe("required input handling", () => {
      const label = "version";
      const url =
        "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json";
      const query = "$.version";

      it("displays a badge correctly when label, URL, query are set", () => {
        const expected =
          "![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)";

        expect(dynamicBadge(label, url, query)).toBe(expected);
      });

      describe("validate missing inputs", () => {
        it("throws an error when `label` is not set", () => {
          expect(() => dynamicBadge("", url, query)).toThrow();
        });

        it("throws an error when `url` is not set", () => {
          expect(() => dynamicBadge(label, "", query)).toThrow();
        });

        it("throws an error when `query` is not set", () => {
          expect(() => dynamicBadge(label, url, "")).toThrow();
        });
      });
    });

    describe("optional input handling", () => {
      const label = "version";
      const url =
        "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json";
      const query = "$.version";

      it("displays a badge pointing to an external link when a link is given", () => {
        const linkTarget = "https://example.com";
        const expected =
          "[![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://example.com)";

        expect(dynamicBadge(label, url, query, linkTarget)).toBe(expected);
      });
    });
  });
});
