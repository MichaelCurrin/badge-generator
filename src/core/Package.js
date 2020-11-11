/**
 * Package badges module.
 */
import {
  buildUrl,
  genericBadge,
  logoParams,
  // eslint-disable-next-line prettier/prettier
  markdownImageWithLink
} from "./badges";
import { PACKAGE_INFO } from "./constants";

// TODO all functions or all classes? and one or two classes?

// TODO: A badge like 'react : 1'
// as generic badge page but with package type to infer the package URL.
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
    const url = `${this.metadata.url}/${this.name}`;

    return genericBadge("dependency", this.name, this.color, this.isLarge, url);
  }
}

function nodeVersionBadge(
  username,
  repoName,
  pkgName = "",
  logo = "",
  logoColor = ""
) {
  if (!pkgName) {
    pkgName = repoName;
  }

  const title = `Package - ${pkgName}`;

  const imgUrl = `https://img.shields.io/github/package-json/dependency-version/${username}/${repoName}/${pkgName}`,
    params = logoParams(false, logo, logoColor),
    fullImgUrl = buildUrl(imgUrl, params),
    target = `${PACKAGE_INFO.node.url}/${pkgName}`;

  return markdownImageWithLink(title, fullImgUrl, target);
}

export function versionBadge(
  username,
  repoName,
  pkgName,
  pkgType,
  logo = "",
  logoColor = ""
) {
  if (!username || !repoName || !pkgName || !pkgType) {
    return "";
  }

  const badgeMakers = {
    node: nodeVersionBadge,
  };
  const badgeMaker = badgeMakers[pkgType];
  if (badgeMaker) {
    return badgeMaker(username, repoName, pkgName, logo, logoColor);
  }

  return "";
}
