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
import { DEFAULT_COLOR, REGISTRY, SHIELDS_PACKAGE } from "./constants";

export function dependency(name: string, registry: REGISTRY) {
  const isLarge = false;
  const url = `${registry}/${name}`;

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
    target = `${REGISTRY.NPM}/${pkgName}`;

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
