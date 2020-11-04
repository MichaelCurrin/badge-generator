/**
 * Package badge module.
 */
import { buildUrl, genericBadge, logoParams } from "./badges";
import { PACKAGE_INFO } from "./constants";

// TODO refactor into Package or split Package into functions or split this file in two.
export function packageVersion(
  username,
  repoName,
  pkgName,
  pkgType,
  logo = "",
  logoColor = ""
) {
  // TODO empty returns

  if (pkgType === "node") {
    const url = `https://img.shields.io/github/package-json/dependency-version/${username}/${repoName}/${pkgName}`,
      params = logoParams(false, logo, logoColor),
      imgUrl = buildUrl(url, params);

    return `![](${imgUrl})`;
  }
}

// TODO: alt styles:
//      - 'react : 1.2.3'
//      - Get dynamically from package.json
//      - 'dependency: react'
// TODO add logo for Python etc.
export class Package {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.color = "blue";
    this.isLarge = false;

    this.metadata = PACKAGE_INFO[type];
    if (!this.metadata) {
      throw new Error("Unable to find matching provider");
    }
  }

  badge() {
    return genericBadge(
      this.metadata.label,
      this.name,
      this.color,
      this.isLarge,
      this.metadata.url
    );
  }
}
