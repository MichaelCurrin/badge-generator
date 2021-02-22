import {
  _statusBadgeUrl,
  _statusData,
  _statusTargetUrl,
} from "@/core/ghActions";

describe("#_statusBadgeUrl", () => {
  describe("a valid GH CI badge image URL", () => {
    it("handles a foo bar CI project", () => {
      expect(_statusBadgeUrl("https://github.com/foo/bar", "Bazz CI")).toBe(
        "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg"
      );
    });

    it("handles a Deno CI project", () => {
      expect(
        _statusBadgeUrl(
          "https://github.com/MichaelCurrin/deno-project-template",
          "Deno CI"
        )
      ).toBe(
        "https://github.com/MichaelCurrin/deno-project-template/workflows/Deno%20CI/badge.svg"
      );
    });

    it("handles a Deno CI project", () => {
      expect(
        _statusBadgeUrl(
          "https://github.com/MichaelCurrin/badge-generator",
          "GH Pages Deploy"
        )
      ).toBe(
        "https://github.com/MichaelCurrin/badge-generator/workflows/GH%20Pages%20Deploy/badge.svg"
      );
    });
  });
});

describe("#_statusTargetUrl", () => {
  describe("a valid GH CI workflow target URL", () => {
    it("handles a foo bar CI project", () => {
      expect(_statusTargetUrl("https://github.com/foo/bar", "Bazz CI")).toBe(
        'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"'
      );
    });

    it("handles a Deno CI project", () => {
      expect(
        _statusTargetUrl(
          "https://github.com/MichaelCurrin/deno-project-template",
          "Deno CI"
        )
      ).toBe(
        'https://github.com/MichaelCurrin/deno-project-template/actions?query=workflow:"Deno+CI"'
      );
    });

    it("handles a Deno CI project", () => {
      expect(
        _statusTargetUrl(
          "https://github.com/MichaelCurrin/badge-generator",
          "GH Pages Deploy"
        )
      ).toBe(
        'https://github.com/MichaelCurrin/badge-generator/actions?query=workflow:"GH+Pages+Deploy"'
      );
    });
  });
});

describe("#_statusData", () => {
  describe("valid CI badge with a link", () => {
    it("handles a foo bar CI project", () => {
      const ghUrl = "https://github.com/foo/bar";
      const workflowName = "Bazz CI";

      const expected = {
        altText: "Bazz CI",
        imgUrl: "https://github.com/foo/bar/workflows/Bazz%20CI/badge.svg",
        target: 'https://github.com/foo/bar/actions?query=workflow:"Bazz+CI"',
      };

      expect(_statusData(ghUrl, workflowName)).toStrictEqual(expected);
    });

    it("handles Deno CI for deno-project-template", () => {
      const ghUrl = "https://github.com/MichaelCurrin/deno-project-template";
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
      const ghUrl = "https://github.com/MichaelCurrin/badge-generator";
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
