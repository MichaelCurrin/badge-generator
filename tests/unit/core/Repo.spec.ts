import { Repo } from "@/core/Repo";

describe("#Repo", () => {
  const repoNoLicense = new Repo("MichaelCurrin", "badge-generator");
  const repoWithLicense = new Repo("MichaelCurrin", "badge-generator", "MIT");

  describe("#ghURL", () => {
    it("returns a valid GitHub repo URL", () => {
      expect(repoNoLicense.ghURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator"
      );
    });
  });

  describe("#ghPagesURL", () => {
    it("returns a valid GitHub Pages project URL", () => {
      const repoNoLicense = new Repo("MichaelCurrin", "badge-generator");

      expect(repoNoLicense.ghPagesURL()).toBe(
        "https://michaelcurrin.github.io/badge-generator/"
      );
    });

    it("returns a valid GitHub Pages user URL", () => {
      const repoNoLicense = new Repo(
        "MichaelCurrin",
        "MichaelCurrin.github.io"
      );

      expect(repoNoLicense.ghPagesURL()).toBe(
        "https://michaelcurrin.github.io"
      );
    });
  });

  describe("#ghPagesBadge", () => {
    it("returns a valid GitHub Pages badge", () => {
      const badgeUrl =
        "https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge";
      const linkTarget = "https://michaelcurrin.github.io/badge-generator/";
      const expectedBadge = `[![View site - GH Pages](${badgeUrl})](${linkTarget})`;

      expect(repoNoLicense.ghPagesBadge()).toBe(expectedBadge);
    });
  });

  describe("#_templateURL", () => {
    it("returns a valid generate template URL", () => {
      expect(repoNoLicense._templateURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator/generate"
      );
    });
  });

  describe("#useThisTemplateBadge", () => {
    it("returns a valid generate template badge", () => {
      const badgeUrl =
        "https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/generate";
      const expectedBadge = `[![Use this template](${badgeUrl})](${target})`;

      expect(repoNoLicense.useThisTemplateBadge()).toBe(expectedBadge);
    });
  });

  describe("#_tagBadgeUrl", () => {
    it("returns a correct tag badge URL", () => {
      expect(repoNoLicense._tagBadgeUrl("tag")).toBe(
        "https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver"
      );
    });

    it("returns a correct release badge URL", () => {
      expect(repoNoLicense._tagBadgeUrl("release")).toBe(
        "https://img.shields.io/github/release/MichaelCurrin/badge-generator?include_prereleases=&sort=semver"
      );
    });
  });

  describe("#tagBadge", () => {
    it("returns a correct tag badge", () => {
      const badgeUrl =
        "https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/releases/";
      const expectedBadge = `[![GitHub tag](${badgeUrl})](${target})`;

      expect(repoNoLicense.tagBadge("tag")).toBe(expectedBadge);
    });

    it("returns a correct release badge", () => {
      const badgeUrl =
        "https://img.shields.io/github/release/MichaelCurrin/badge-generator?include_prereleases=&sort=semver";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/releases/";
      const expectedBadge = `[![GitHub release](${badgeUrl})](${target})`;

      expect(repoNoLicense.tagBadge("release")).toBe(expectedBadge);
    });
  });

  describe("#licenseBadge", () => {
    it("returns a null string when there is no license set", () => {
      expect(repoNoLicense.licenseBadge(true)).toBe("");
    });

    it("returns a badge for a local license", () => {
      expect(repoWithLicense.licenseBadge(true)).toBe(
        "[![License](https://img.shields.io/badge/License-MIT-blue)](#license)"
      );
    });

    it("return a badge for a remote license", () => {
      const badgeUrl = "https://img.shields.io/badge/License-MIT-blue";
      const target =
        "https://github.com/MichaelCurrin/badge-generator/blob/master/LICENSE";
      const expectedBadge = `[![License](${badgeUrl})](${target})`;

      expect(repoWithLicense.licenseBadge(false)).toBe(expectedBadge);
    });
  });

  describe("#licenseMessage", () => {
    const message = `\
## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
`;

    it("return a message for license", () => {
      expect(repoWithLicense.licenseMessage()).toBe(message);
    });
  });

  describe("#gh", () => {
    it("return a valid GH repo badge", () => {
      const badgeUrl =
        "https://img.shields.io/static/v1?label=MichaelCurrin&message=badge-generator&color=blue&logo=github";
      const linkTarget = "https://github.com/MichaelCurrin/badge-generator";
      const expectedBadge = `[![MichaelCurrin - badge-generator](${badgeUrl})](${linkTarget})`;

      expect(repoNoLicense.gh()).toBe(expectedBadge);
    });
  });

  describe("#ghSocial", () => {
    const linkTarget = "https://github.com/MichaelCurrin/badge-generator";

    it("return a valid forks shield", () => {
      const badgeUrl =
        "https://img.shields.io/github/forks/MichaelCurrin/badge-generator?style=social";
      const expectedBadge = `[![forks - badge-generator](${badgeUrl})](${linkTarget})`;

      expect(repoNoLicense.ghSocial("forks", false)).toBe(expectedBadge);
    });

    it("return a valid stars shield", () => {
      const badgeUrl =
        "https://img.shields.io/github/stars/MichaelCurrin/badge-generator?style=social";
      const expectedBadge = `[![stars - badge-generator](${badgeUrl})](${linkTarget})`;

      expect(repoNoLicense.ghSocial("stars", false)).toBe(expectedBadge);
    });
  });
});
