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
