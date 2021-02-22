import {
  _statusBadgeUrl,
  _statusData,
  _statusTargetUrl,
} from "@/core/ghActions";

describe("#_statusBadgeUrl", () => {
  describe("a valid GH CI badge image URL", () => {
    it("handles a foo bar CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/foo/bar",
        workflowName: "Bazz CI",
      };

      expect(_statusBadgeUrl(ghWorkflow)).toBe(
        "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg"
      );
    });

    it("handles a Deno CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/deno-project-template",
        workflowName: "Deno CI",
      };

      expect(_statusBadgeUrl(ghWorkflow)).toBe(
        "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg"
      );
    });

    it("handles a Deno CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/badge-generator",
        workflowName: "GH Pages Deploy",
      };

      expect(_statusBadgeUrl(ghWorkflow)).toBe(
        "https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg"
      );
    });
  });
});

describe("#_statusTargetUrl", () => {
  describe("a valid GH CI workflow target URL", () => {
    it("handles a foo bar CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/foo/bar",
        workflowName: "Bazz CI",
      };

      expect(_statusTargetUrl(ghWorkflow)).toBe(
        'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"'
      );
    });

    it("handles a Deno CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/deno-project-template",
        workflowName: "Deno CI",
      };

      expect(_statusTargetUrl(ghWorkflow)).toBe(
        'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow:"Deno+CI"'
      );
    });

    it("handles a Deno CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/badge-generator",
        workflowName: "GH Pages Deploy",
      };

      expect(_statusTargetUrl(ghWorkflow)).toBe(
        'https://github.com/MichaelCurrin/badge-generator/actions?query=workflow:"GH+Pages+Deploy"'
      );
    });
  });
});

describe("#_statusData", () => {
  describe("valid CI badge with a link", () => {
    it("handles a foo bar CI project", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/foo/bar",
        workflowName: "Bazz CI",
      };

      const expected = {
        altText: "Bazz CI",
        imgUrl: "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg",
        target: 'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"',
      };

      expect(_statusData(ghWorkflow)).toStrictEqual(expected);
    });

    it("handles Deno CI for deno-project-template", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/deno-project-template",
        workflowName: "Deno CI",
      };

      const expected = {
        altText: "Deno CI",
        imgUrl:
          "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg",
        target:
          'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow:"Deno+CI"',
      };

      expect(_statusData(ghWorkflow)).toStrictEqual(expected);
    });

    it("handles GH Pages Deploy for badge-generator", () => {
      const ghWorkflow = {
        ghURL: "https://github.com/MichaelCurrin/badge-generator",
        workflowName: "GH Pages Deploy",
      };

      const expected = {
        altText: "GH Pages Deploy",
        imgUrl:
          "https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg",
        target:
          'https://github.com/MichaelCurrin/badge-generator/actions?query=workflow:"GH+Pages+Deploy"',
      };

      expect(_statusData(ghWorkflow)).toStrictEqual(expected);
    });
  });
});