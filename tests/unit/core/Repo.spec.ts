import { Repo } from "@/core/Repo";

describe("#Repo", () => {
  describe("#licenseBadge", () => {
    const repo = new Repo("MichaelCurrin", "badge-generator");

    it("return a badge for a local license", () => {
      expect(repo.licenseBadge("MIT", true)).toBe(
        "[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license)"
      );
    });

    it("return a badge for a remote license", () => {
      const target =
          "https://github.com/MichaelCurrin/badge-generator/blob/master/LICENSE",
        expectedBadge = `[![License - MIT](https://img.shields.io/badge/License-MIT-blue)](${target})`;

      expect(repo.licenseBadge("MIT", false)).toBe(expectedBadge);
    });
  });

  describe("#licenseMessage", () => {
    const repo = new Repo("MichaelCurrin", "foo");

    const message = `\
## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
`;

    it("return a message for license", () => {
      expect(repo.licenseMessage("MIT")).toBe(message);
    });
  });
});
