import { REGISTRY } from "@/core/constants";
import { dependency, nodeVersionBadge } from "@/core/packages";

describe("#dependency", () => {
  it("returns a standard size static badge for a Node package", () => {
    expect(dependency("react", REGISTRY.Node)).toBe(
      "[![dependency - react](https://img.shields.io/badge/dependency-react-blue)](https://www.npmjs.com/package/react)"
    );
  });
});

describe("#nodeVersionBadge", () => {
  const target = "https://www.npmjs.com/package/vue";

  it("returns a dynamic Node badge", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue";

    expect(nodeVersionBadge("MichaelCurrin", "badge-generator", "vue")).toBe(
      `[![Package - vue](${imgUrl})](${target})`
    );
  });

  it("returns a dynamic Node badge with a logo and no logo color", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js";

    expect(
      nodeVersionBadge("MichaelCurrin", "badge-generator", "vue", "vue.js")
    ).toBe(`[![Package - vue](${imgUrl})](${target})`);
  });

  it("returns a dynamic Node badge with a logo and logo color", () => {
    const imgUrl =
      "https://img.shields.io/github/package-json/dependency-version/MichaelCurrin/badge-generator/vue?logo=vue.js&logoColor=white";

    expect(
      nodeVersionBadge(
        "MichaelCurrin",
        "badge-generator",
        "vue",
        "vue.js",
        "white"
      )
    ).toBe(`[![Package - vue](${imgUrl})](${target})`);
  });
});
