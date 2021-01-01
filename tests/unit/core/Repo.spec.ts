import { Repo } from "@/core/Repo";

describe("#Repo", () => {
  describe("#ghURL", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    it("returns a valid GitHub repo URL", () => {
      expect(repo.ghURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator"
      );
    });
  });

  describe("#ghPagesURL", () => {
    it("returns a valid GitHub Pages project URL", () => {
      const repo = new Repo("MichaelCurrin", "badge-generator");

      expect(repo.ghPagesURL()).toBe(
        "https://michaelcurrin.github.io/badge-generator/"
      );
    });

    it("returns a valid GitHub Pages user URL", () => {
      const repo = new Repo("MichaelCurrin", "MichaelCurrin.github.io");

      expect(repo.ghPagesURL()).toBe("https://michaelcurrin.github.io");
    });
  });

  describe("#ghPagesBadge", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    it("returns a valid GitHub Pages badge", () => {
      expect(repo.ghPagesBadge()).toBe(
        "[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/badge-generator/)"
      );
    });
  });

  describe("#_templateURL", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    it("returns a valid generate template URL", () => {
      expect(repo._templateURL()).toBe(
        "https://github.com/MichaelCurrin/badge-generator/generate"
      );
    });
  });

  describe("#useThisTemplateBadge", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    it("returns a valid generate template badge", () => {
      expect(repo.useThisTemplateBadge()).toBe(
        "[![Use this template](https://img.shields.io/badge/Use_this_template-2ea44f?style=for-the-badge&logo=github)](https://github.com/MichaelCurrin/badge-generator/generate)"
      );
    });
  });

  describe("#licenseBadge", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator", "MIT");

    it("returns a badge for a local license", () => {
      expect(repo.licenseBadge(true)).toBe(
        "[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license)"
      );
    });

    it("return a badge for a remote license", () => {
      const target =
          "https://github.com/MichaelCurrin/badge-generator/blob/master/LICENSE",
        expectedBadge = `[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](${target})`;

      expect(repo.licenseBadge(false)).toBe(expectedBadge);
    });
  });

  describe("#licenseMessage", () => {
    const repo = new Repo("MichaelCurrin", "foo", "MIT");

    const message = `\
## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
`;

    it("return a message for license", () => {
      expect(repo.licenseMessage()).toBe(message);
    });
  });
});
