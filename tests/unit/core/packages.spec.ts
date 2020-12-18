import { REGISTRY } from "@/core/constants";
import { dependency } from "@/core/packages";

describe("#dependency", () => {
  it("returns a standard size static badge for a Node package", () => {
    expect(dependency("react", REGISTRY.Node)).toBe(
      "[![dependency - react](https://img.shields.io/badge/dependency-react-blue)](https://www.npmjs.com/package/react)"
    );
  });
});
