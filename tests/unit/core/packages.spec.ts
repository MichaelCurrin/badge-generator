import { REGISTRY } from "@/constants/urls";
import { dependency, goVersionBadge, nodeVersionBadge } from "@/core/packages";
import { Repo } from "@/core/Repo";

describe("#dependency", () => {
  it("returns a standard size static badge for a Node package", () => {
    expect(dependency("react", REGISTRY.Node)).toBe(
      "[![dependency - react](https://img.shields.io/badge/dependency-react-blue)](https://www.npmjs.com/package/react)"
    );
  });
});

describe("#nodeVersionBadge", () => {
  const target = "https://www.npmjs.com/package/vue";
  const repo = new Repo("MichaelCurrin", "badge-generator");

  it("returns a dynamic Node badge", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue";

    expect(nodeVersionBadge(repo, "vue")).toBe(
      `[![Package - vue](${imgUrl})](${target})`
    );
  });

  it("returns a dynamic Node badge with a logo and no logo color", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js";

    expect(nodeVersionBadge(repo, "vue", "vue.js")).toBe(
      `[![Package - vue](${imgUrl})](${target})`
    );
  });

  it("returns a dynamic Node badge with a logo and logo color", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white";

    expect(nodeVersionBadge(repo, "vue", "vue.js", "white")).toBe(
      `[![Package - vue](${imgUrl})](${target})`
    );
  });
});

describe("#goVersionBadge", () => {
  it("returns a dynamic Go version badge with Go logo", () => {
    const imgUrl =
      "https://img.shields.io/github/go-mod/go-version/MichaelCurrin/go-project-template?logo=go&logoColor=white";
    const target = "https://golang.org";

    expect(goVersionBadge("MichaelCurrin", "go-project-template")).toBe(
      `[![Made with Go](${imgUrl})](${target})`
    );
  });
});
