/**
 * Package badges module.
 */
import { STATIC_DEPENDENCY } from "@/constants/badgeValues";
import { REGISTRY, SHIELDS_API } from "../constants/urls";
import { buildUrl } from "./badges";
import { genericBadge } from "./genericBadge";
import { mdImageWithLink } from "./markdown";
import { logoParams } from "./shieldsApi";

/**
 * Static dependency badge.
 *
 * TODO: Make a variation that accepts a version number for `foo >= 1` instead of `dependency: foo`.
 * That is already supported by Generic Page but it can be easier here.
 */
export function dependency(name: string, registry: REGISTRY) {
  const url = `${registry}/${name}`;

  return genericBadge(
    STATIC_DEPENDENCY.LABEL,
    name,
    STATIC_DEPENDENCY.COLOR!,
    STATIC_DEPENDENCY.IS_LARGE,
    url
  );
}

/**
 * Dynamic Node package badge.
 *
 * The badge will dynamically display given package's locked version number, using your repo's
 * package.json file.
 *
 * Note - the badge URL needs something added to work for dev dependencies. I'm happy to not support
 * that now.
 *
 * Shields.io does Pipenv lock files, but not requirements.txt file, it seems. And not Gemfile
 * either.
 */
export function nodeVersionBadge(
  username: string,
  repoName: string,
  pkgName: string,
  logo?: string,
  logoColor?: string
) {
  if (!pkgName) {
    pkgName = repoName;
  }
  const title = `Package - ${pkgName}`;

  const imgUrl = `${SHIELDS_API.PACKAGE}/${username}/${repoName}/${pkgName}`,
    params = logoParams(false, logo, logoColor),
    fullImgUrl = buildUrl(imgUrl, params);

  const target = `${REGISTRY.Node}/${pkgName}`;

  return mdImageWithLink(title, fullImgUrl, target);
}
