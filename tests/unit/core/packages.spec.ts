import { REGISTRY } from "@/constants/urls";
import { dependency, goVersionBadge, nodeVersionBadge } from "@/core/packages";
import { Repo } from "@/core/Repo";
import { ENVIRONMENT } from "@/core/shieldsApi";

describe("#dependency", () => {
  it("returns a standard size static badge for a Node package", () => {
    const imageTarget = "https://img.shields.io/badge/dependency-react-blue";
    const linkTarget = "https://www.npmjs.com/package/react";

    expect(dependency("react", REGISTRY.Node, {})).toBe(
      `[![dependency - react](${imageTarget})](${linkTarget})`
    );
  });

  it("returns a static badge for a Node package, including a logo and logo color", () => {
    const imageTarget =
      "https://img.shields.io/badge/dependency-react-blue?logo=react&logoColor=white";
    const linkTarget = "https://www.npmjs.com/package/react";

    expect(
      dependency("react", REGISTRY.Node, { logo: "react", logoColor: "white" })
    ).toBe(`[![dependency - react](${imageTarget})](${linkTarget})`);
  });

  it("returns a standard size static badge for a Python package", () => {
    const imageTarget = "https://img.shields.io/badge/dependency-requests-blue";
    const linkTarget = "https://pypi.org/project/requests";

    expect(dependency("requests", REGISTRY.Python, {})).toBe(
      `[![dependency - requests](${imageTarget})](${linkTarget})`
    );
  });
});

describe("#nodeVersionBadge", () => {
  const repo = new Repo("MichaelCurrin", "badge-generator");

  describe("prod dependency", () => {
    const linkTarget = "https://www.npmjs.com/package/vue";

    it("returns a dynamic Node package badge with no logo", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue";

      expect(nodeVersionBadge(repo, "vue", {}, ENVIRONMENT.Prod)).toBe(
        `[![Package - vue](${imageTarget})](${linkTarget})`
      );
    });

    it("returns a dynamic Node package badge with a logo but no logo color", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js";

      expect(
        nodeVersionBadge(repo, "vue", { logo: "vue.js" }, ENVIRONMENT.Prod)
      ).toBe(`[![Package - vue](${imageTarget})](${linkTarget})`);
    });

    it("returns a dynamic Node package badge with a logo and a logo color", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white";

      const logoAppearance = {
        logo: "vue.js",
        logoColor: "white",
      };
      expect(
        nodeVersionBadge(repo, "vue", logoAppearance, ENVIRONMENT.Prod)
      ).toBe(`[![Package - vue](${imageTarget})](${linkTarget})`);
    });
  });

  describe("dev dependency", () => {
    const linkTarget = "https://www.npmjs.com/package/typescript";

    it("returns a dynamic Node package badge", () => {
      const imageTarget =
        "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/dev/typescript";

      expect(nodeVersionBadge(repo, "typescript", {}, ENVIRONMENT.Dev)).toBe(
        `[![Package - typescript](${imageTarget})](${linkTarget})`
      );
    });
  });
});

describe("#goVersionBadge", () => {
  it("returns a dynamic Go version badge with the Go logo", () => {
    const imageTarget =
      "https://img.shields.io/github/go-mod/go-version/MichaelCurrin/go-project-template?logo=go&logoColor=white";
    const linkTarget = "https://golang.org";

    expect(goVersionBadge("MichaelCurrin", "go-project-template")).toBe(
      `[![Made with Go](${imageTarget})](${linkTarget})`
    );
  });
});
