import { dynamicBadge } from "@/core/dynamicData";

describe("Dynamic data badges", () => {
  describe("#dynamicBadge", () => {
    describe("required inputs set", () => {
      it("displays a badge correctly when label, URL, query are set", () => {
        expect(
          dynamicBadge(
            "version",
            "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
            "$.version"
          )
        ).toBe(
          "![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)"
        );
      });

      describe("optional inputs are set", () => {
        it("displays a badge pointing to an external link", () => {
          const linkTarget = "https://example.com";

          expect(
            dynamicBadge(
              "version",
              "https://raw.githubusercontent.com/MichaelCurrin/auto-commit-msg/master/package.json",
              "$.version",
              linkTarget
            )
          ).toBe(
            "[![version](https://img.shields.io/badge/dynamic/json?label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FMichaelCurrin%2Fauto-commit-msg%2Fmaster%2Fpackage.json)](https://example.com)"
          );
        })
      })
    })

    describe("validate when required inputs are not set", () => {
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
    })
  })
})
