import { _statusData } from "@/core/ghActions";

describe("#_statusData", () => {
  describe("returns a valid CI badge with a link", () => {
    it("handles a foo bar CI project", () => {
      const ghUrl = "https://github.com/foo/bar"
      const workflowName = "Bazz CI";

      const expected = {
        altText: "Bazz CI",
        imgUrl: "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg",
        target: 'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"',
      };

      expect(_statusData(ghUrl, workflowName)).toStrictEqual(expected);
    });

    it("handles Deno CI for deno-project-template", () => {
      const ghUrl = "https://github.com/MichaelCurrin/deno-project-template"
      const workflowName = "Deno CI";

      const expected = {
        altText: "Deno CI",
        imgUrl:
          "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg",
        target:
          'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow:"Deno+CI"',
      };

      expect(_statusData(ghUrl, workflowName)).toStrictEqual(expected);
    });

    it("handles GH Pages Deploy for badge-generator", () => {
      const ghUrl = "https://github.com/MichaelCurrin/badge-generator"
      const workflowName = "GH Pages Deploy";

      const expected = {
        altText: "GH Pages Deploy",
        imgUrl:
          "https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg",
        target:
          'https://github.com/MichaelCurrin/badge-generator/actions?query=workflow:"GH+Pages+Deploy"',
      };

      expect(_statusData(ghUrl, workflowName)).toStrictEqual(expected);
    });
  });
});
