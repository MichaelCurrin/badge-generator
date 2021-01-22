/**
 * Package badges module.
 */
import { STATIC_DEPENDENCY } from "@/constants/badgeValues";
import { REGISTRY, SHIELDS_API } from "../constants/urls";
import { buildUrl } from "./badges";
import { genericBadge } from "./genericBadge";
import { mdImageWithLink } from "./markdown";
import { logoParams } from "./shieldsApi";

// TODO Add to frontend. With toggle.
// TODO Is this a repo badge or package badge - which page and modules?
// TODO Move.
// TODO Add type
// TODO Pass as object that can be used in logoParams without position args.
// TODO URL from somewhere else.
const GO_MODULE_SHIELD = {
  IS_LARGE: false,
  LOGO: "go",
  LOGO_COLOR: "white",
  TARGET: "https://golang.org",
  ALT_TEXT: "Made with Go",
};

/**
 * Static dependency badge.
 *
 * TODO: Make a variation that accepts a version number for `foo >= 1` instead of `dependency: foo`.
 * That is already supported by Generic Page but it can be easier here.
 */
export function dependency(name: string, registry: REGISTRY) {
  const url = `${registry}/${name}`;

  return genericBadge(
    STATIC_DEPENDENCY.LABEL!,
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
  // TODO Rename var to alt text.
  const title = `Package - ${pkgName}`;

  // TODO Rename PACKAGE and break out to function.
  const imgUrl = `${SHIELDS_API.PACKAGE}/${username}/${repoName}/${pkgName}`,
    params = logoParams(false, logo, logoColor),
    fullImgUrl = buildUrl(imgUrl, params);

  const target = `${REGISTRY.Node}/${pkgName}`;

  return mdImageWithLink(title, fullImgUrl, target);
}

/**
 * Return a Go badge that reflects the Go version in a repo's go.mod file.
 */
export function goVersionBadge(username: string, repoName: string) {
  const imgUrl = `${SHIELDS_API.GO_MODULE}/${username}/${repoName}`,
    params = logoParams(
      GO_MODULE_SHIELD.IS_LARGE,
      GO_MODULE_SHIELD.LOGO,
      GO_MODULE_SHIELD.LOGO_COLOR
    ),
    fullImgUrl = buildUrl(imgUrl, params);

  return mdImageWithLink(
    GO_MODULE_SHIELD.ALT_TEXT,
    fullImgUrl,
    GO_MODULE_SHIELD.TARGET
  );
}
