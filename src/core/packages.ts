/**
 * Package badges module.
 */
import {
  GO_MODULE_SHIELD,
  NODE_VERSION_BADGE,
  STATIC_DEPENDENCY,
} from "@/constants/badgeValues";
import { REGISTRY, SHIELDS_API } from "../constants/urls";
import { buildUrl } from "./badges";
import { genericBadge } from "./genericBadge";
import { mdImageWithLink } from "./markdown";
import { Repo } from "./Repo";
import { logoParams, nodePkgJsonShieldUrl } from "./shieldsApi";

/**
 * Static dependency badge.
 *
 * TODO: Make a variation that accepts a version number for `foo >= 1` instead of `dependency: foo`.
 * That is already supported by Generic Page but it can be easier here.
 */
export function dependency(name: string, registry: REGISTRY) {
  const url = `${registry}/${name}`;

  return genericBadge(
    STATIC_DEPENDENCY.label!,
    name,
    STATIC_DEPENDENCY.color!,
    STATIC_DEPENDENCY.isLarge,
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
  repo: Repo,
  pkgName: string,
  logo?: string,
  logoColor?: string
) {
  if (!pkgName) {
    pkgName = repo.repoName;
  }
  const altText = `Package - ${pkgName}`;

  const baseImageUrl = nodePkgJsonShieldUrl(repo, pkgName),
    params = logoParams({
      isLarge: NODE_VERSION_BADGE.IS_LARGE,
      logo,
      logoColor,
    }),
    imageTarget = buildUrl(baseImageUrl, params);

  const linkTarget = `${REGISTRY.Node}/${pkgName}`;

  return mdImageWithLink({
    altText,
    imageTarget,
    linkTarget,
  });
}

// TODO: Add to Packages view.
/**
 * Return a Go badge that reflects the Go version in a repo's go.mod file.
 */
export function goVersionBadge(username: string, repoName: string) {
  const baseImageUrl = `${SHIELDS_API.GO_MODULE}/${username}/${repoName}`;
  const params = logoParams(GO_MODULE_SHIELD);
  const imageTarget = buildUrl(baseImageUrl, params);

  const { altText, linkTarget } = GO_MODULE_SHIELD;

  return mdImageWithLink({
    altText,
    imageTarget,
    linkTarget,
  });
}
