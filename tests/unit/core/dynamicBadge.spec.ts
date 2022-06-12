import { dynamicDataBadge } from "@/core/dynamicData";

describe("Dynamic data badge", () => {
  describe("#dynamicDataBadge", () => {
    describe("required input handling", () => {
      const label = "version";
      const url =
        "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json";
      const query = "$.version";

      it("displays a badge correctly when label, URL, query are set", () => {
        const expected =
          "![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)";

        expect(dynamicDataBadge(label, url, query)).toBe(expected);
      });

      describe("validate missing inputs", () => {
        it("throws an error when `label` is not set", () => {
          expect(() => dynamicDataBadge("", url, query)).toThrow();
        });

        it("throws an error when `url` is not set", () => {
          expect(() => dynamicDataBadge(label, "", query)).toThrow();
        });

        it("throws an error when `query` is not set", () => {
          expect(() => dynamicDataBadge(label, url, "")).toThrow();
        });
      });
    });

    describe("optional input handling", () => {
      const label = "version";
      const url =
        "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json";
      const query = "$.version";

      const linkTarget = "https://example.com";
      const altText = "My alt text";

      it("returns a that uses an external link when one is given", () => {
        const expected =
          "[![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://example.com)";

        expect(dynamicDataBadge(label, url, query, linkTarget)).toBe(expected);
      });

      it("returns a badge with image alt text when alt text is given", () => {
        const expected =
          "![My alt text](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)";

        expect(dynamicDataBadge(label, url, query, "", altText)).toBe(expected);
      });

      it("returns a badge with alt text and external link when both are given", () => {
        const expected =
          "[![My alt text](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://example.com)";

        expect(dynamicDataBadge(label, url, query, linkTarget, altText)).toBe(
          expected
        );
      });
    });

    describe("required and optional input handling", () => {
      const altText = "VS Code";
      const label = "vscode";
      const url =
        "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json";
      
      it("displays a badge correctly when accessing a property from a nested object", () => {
        const query = '$.engines.vscode';
    
        const expected =
          "![VS Code](https://img.shields.io/badge/dynamic/json?label=vscode&query=%24.engines.vscode&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)";

        expect(dynamicDataBadge(label, url, query, "", altText)).toBe(expected);
      });
      
      it("displays a badge correctly when accessing a property from a quoted nested object", () => {
        const query = '$.engines["vscode"]';
    
        const expected =
          "![VS Code](https://img.shields.io/badge/dynamic/json?label=vscode&query=%24.engines%5B%22vscode%22%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)";

        expect(dynamicDataBadge(label, url, query, "", altText)).toBe(expected);
      });      
    });
  });
});
