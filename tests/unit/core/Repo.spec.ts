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
      expect(repoNoLicense.ghPagesBadge()).toBe(
        "[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)"
      );
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
      expect(repoNoLicense.useThisTemplateBadge()).toBe(
        "[![Use this template](https://img.shields.io/badge/Use_this_template-2ea44f?style=for-the-badge&logo=github)](https://github.com/MichaelCurrin/badge-generator/generate)"
      );
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
      expect(repoNoLicense.tagBadge("tag")).toBe(
        "[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/badge-generator?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/badge-generator/releases/)"
      );
    });

    it("returns a correct release badge", () => {
      expect(repoNoLicense.tagBadge("release")).toBe(
        "[![GitHub release](https://img.shields.io/github/release/MichaelCurrin/badge-generator?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/badge-generator/releases/)"
      );
    });
  });

  describe("#licenseBadge", () => {
    it("returns a null string for no license set", () => {
      expect(repoNoLicense.licenseBadge(true)).toBe("");
    });

    it("returns a badge for a local license", () => {
      expect(repoWithLicense.licenseBadge(true)).toBe(
        "[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license)"
      );
    });

    it("return a badge for a remote license", () => {
      const target =
        "https://github.com/MichaelCurrin/badge-generator/blob/master/LICENSE",
        expectedBadge = `[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](${target})`;

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
});
