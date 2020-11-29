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

/**
 * Supports NPM packages.
 *
 * Shields.io supports Pipenv lock files but not requirements.txt file, it seems. And not Gemfile either.
 */
export function nodeVersionBadge(
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
    fullImgUrl = buildUrl(imgUrl, params);

  const target = `${REGISTRY.Node}/${pkgName}`;

  return markdownImageWithLink(title, fullImgUrl, target);
}
