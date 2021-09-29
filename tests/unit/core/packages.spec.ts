import { REGISTRY } from "@/constants/urls";
import { dependency, goVersionBadge, nodeVersionBadge } from "@/core/packages";
import { Repo } from "@/core/Repo";
import { ENVIRONMENT } from "@/core/shieldsApi";

describe("#dependency", () => {
  it("returns a standard size static badge for a Node package", () => {
    const imageTarget = "https://img.shields.io/badge/dependency-react-blue";
    const linkTarget = "https://www.npmjs.com/package/react";
    const expectedBadge = `[![dependency - react](${imageTarget})](${linkTarget})`;

    expect(dependency("react", REGISTRY.Node, {})).toBe(expectedBadge);
  });

  it("returns a static badge for a Node package, including a logo and logo color", () => {
    const imageTarget =
      "https://img.shields.io/badge/dependency-react-blue?logo=react&logoColor=white";
    const linkTarget = "https://www.npmjs.com/package/react";
    const expectedBadge = `[![dependency - react](${imageTarget})](${linkTarget})`;

    expect(
      dependency("react", REGISTRY.Node, { logo: "react", logoColor: "white" })
    ).toBe(expectedBadge);
  });

  it("returns a static badge for a Python package", () => {
    const imageTarget = "https://img.shields.io/badge/dependency-requests-blue";
    const linkTarget = "https://pypi.org/project/requests";
    const expectedBadge = `[![dependency - requests](${imageTarget})](${linkTarget})`;

    expect(dependency("requests", REGISTRY.Python, {})).toBe(expectedBadge);
  });

  it("returns a static badge for a Ruby package, including a logo and logo color", () => {
    const imageTarget =
      "https://img.shields.io/badge/dependency-jekyll-blue?logo=jekyll&logoColor=white";
    const linkTarget = "https://rubygems.org/gems/jekyll";
    const expectedBadge = `[![dependency - jekyll](${imageTarget})](${linkTarget})`;

    expect(
      dependency("jekyll", REGISTRY.Ruby, {
        logo: "jekyll",
        logoColor: "white",
      })
    ).toBe(expectedBadge);
  });
});

describe("#nodeVersionBadge", () => {
  const repo = new Repo("MichaelCurrin", "badge-generator");

  describe("prod dependency", () => {
    const linkTarget = "https://www.npmjs.com/package/vue";

    it("returns a dynamic Node package badge with no logo", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue";
      const expectedBadge = `[![Package - vue](${imageTarget})](${linkTarget})`;

      expect(nodeVersionBadge(repo, "vue", {}, ENVIRONMENT.Prod)).toBe(
        expectedBadge
      );
    });

    it("returns a dynamic Node package badge with a logo but no logo color", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js";
      const expectedBadge = `[![Package - vue](${imageTarget})](${linkTarget})`;

      expect(
        nodeVersionBadge(repo, "vue", { logo: "vue.js" }, ENVIRONMENT.Prod)
      ).toBe(expectedBadge);
    });

    it("returns a dynamic Node package badge with a logo and a logo color", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white";
      const expectedBadge = `[![Package - vue](${imageTarget})](${linkTarget})`;

      const logoAppearance = {
        logo: "vue.js",
        logoColor: "white",
      };

      expect(
        nodeVersionBadge(repo, "vue", logoAppearance, ENVIRONMENT.Prod)
      ).toBe(expectedBadge);
    });
  });

  describe("dev dependency", () => {
    const linkTarget = "https://www.npmjs.com/package/typescript";

    it("returns a dynamic Node package badge", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript";
      const expectedBadge = `[![Package - typescript](${imageTarget})](${linkTarget})`;

      expect(nodeVersionBadge(repo, "typescript", {}, ENVIRONMENT.Dev)).toBe(
        expectedBadge
      );
    });
  });
});

describe("#goVersionBadge", () => {
  it("returns a dynamic Go version badge with the Go logo", () => {
    const imageTarget =
      "https://img.shields.io/github/go-mod/go-version/MichaelCurrin/go-project-template?logo=go&logoColor=white";
    const linkTarget = "https://golang.org";
    const expectedBadge = `[![Made with Go](${imageTarget})](${linkTarget})`;

    expect(goVersionBadge("MichaelCurrin", "go-project-template")).toBe(
      expectedBadge
    );
  });
});
