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
import { DEFAULT_COLOR, PACKAGE_INFO } from "./constants";

export function dependency(name, type) {
  const metadata = PACKAGE_INFO[type];
  if (!metadata) {
    throw new Error("Unable to find matching provider");
  }
  const isLarge = false;
  const url = `${metadata.url}/${name}`;

  return genericBadge("dependency", name, DEFAULT_COLOR, isLarge, url);
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
