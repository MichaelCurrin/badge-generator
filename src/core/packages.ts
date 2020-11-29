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
import { DEFAULT_COLOR, PACKAGE_INFO, SHIELDS_PACKAGE } from "./constants";

export function dependency(name: string, depType: string) {
  const metadata = PACKAGE_INFO[depType];
  if (!metadata) {
    throw new Error("Unable to find matching provider");
  }
  const isLarge = false;
  const url = `${metadata.url}/${name}`;

  return genericBadge("dependency", name, DEFAULT_COLOR, isLarge, url);
}

function nodeVersionBadge(
  username: string,
  repoName: string,
  pkgName?: string,
  logo?: string,
  logoColor?: string
) {
  if (!pkgName) {
    pkgName = repoName;
  }

  const title = `Package - ${pkgName}`;

  const imgUrl = `${SHIELDS_PACKAGE}/${username}/${repoName}/${pkgName}`,
    params = logoParams(false, logo, logoColor),
    fullImgUrl = buildUrl(imgUrl, params),
    target = `${PACKAGE_INFO.node.url}/${pkgName}`;

  return markdownImageWithLink(title, fullImgUrl, target);
}

export function versionBadge(
  username: string,
  repoName: string,
  pkgName: string,
  pkgType: string,
  logo?: string,
  logoColor?: string
) {
  const badgeMakers = {
    node: nodeVersionBadge,
  };
  const badgeMaker = badgeMakers[pkgType];
  if (badgeMaker) {
    return badgeMaker(username, repoName, pkgName, logo, logoColor);
  }

  return "";
}
