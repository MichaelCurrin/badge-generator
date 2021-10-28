/**
 * Shields.io API module.
 */
import { COLOR_PRESETS, STYLES } from "@/constants/appearance";
import { BADGE_DEFAULTS } from "@/constants/catalogue";
import { SHIELDS_API } from "@/constants/urls";
import { buildUrl } from "./badges";
import { TLogoAppearance } from "./shieldsApi.d";
import {
  GenericBadge,
  DynamicBadge,
  GHRepo,
  RepoMetric,
  StrMap,
} from "./types.d";

// Enums don't seem to work in `.d` files, so here is best now.
export enum ENVIRONMENT {
  Prod,
  Dev,
}
export type EnvironmentKeys = keyof typeof ENVIRONMENT;

/**
 * Encode separators for use on shields.io API.
 *
 * Covers dashes, underscores and spaces.
 */
export function _encodeSeparators(value: string, spaceToUnderscore: boolean) {
  value = value.replace(/-/g, "--").replace(/_/g, "__");

  if (spaceToUnderscore) {
    value = value.replace(/ /g, "_");
  }

  return value;
}

/**
 * Turn URL-encoded '<', '>' and '=' symbols back into readable characters.
 *
 * These are allowed in shields.io URLs so should not be encoded.
 */
export function _decodeAngleBrackets(value: string) {
  return value.replace(/%3E/g, ">").replace(/%3C/g, "<").replace(/%3D/g, "=");
}

/**
 * Encode a value to be safe as a param in a URL.
 *
 * Prepare a value for dash-based shields.io API URL, based on notes on the site.
 */
export function _encodeParam(value: string, spaceToUnderscore = true) {
  value = _encodeSeparators(value, spaceToUnderscore);

  const encoded = encodeURIComponent(value);

  return _decodeAngleBrackets(encoded);
}

/**
 * Create a URL path for the shields.io dash-based API.
 *
 * The API requires MESSAGE-COLOR at the least and also accepts LABEL-MESSAGE-COLOR.
 *
 * This conveniently escapes label and message for you, based on rules on the shields.io website.
 *
 * See more info in `shields-io.md` in the docs.
 */
export function dashShieldPath(badge: GenericBadge) {
  const message = _encodeParam(badge.message);
  let label = badge.label;

  const color = badge.color || COLOR_PRESETS.Default;

  const pieces = [message, color];
  if (label) {
    label = _encodeParam(label);
    pieces.unshift(label);
  }

  return pieces.join("-");
}

/**
 * Prepare logo query params for a URL.
 *
 * Return URL query parameters for styling just about any badge made with the
 * shields.io API.
 */
export function logoQueryParams(logoAppearance: TLogoAppearance) {
  const params: StrMap = {};

  if (logoAppearance.isLarge) {
    params.style = STYLES.FOR_THE_BADGE;
  }

  if (logoAppearance.logo) {
    params.logo = logoAppearance.logo;

    if (logoAppearance.logoColor) {
      params.logoColor = logoAppearance.logoColor;
    }
  }

  return params;
}

/**
 * Image URL for param-based static badge.
 */
export function staticParamsUrl(badge: GenericBadge, styleParams: StrMap) {
  const color = badge.color || COLOR_PRESETS.Default;

  const params = {
    label: badge.label!,
    message: badge.message,
    color,
    ...styleParams,
  };

  return buildUrl(SHIELDS_API.PARAM, params);
}

/**
 * Image URL for param-based dynamic badge using json as source.
 */
export function dynamicParamsUrl(badge: DynamicBadge) {
  const params = {
    label: badge.label,
    query: badge.query,
    url: badge.url,
  };

  return buildUrl(SHIELDS_API.DYNAMIC_JSON, params);
}

/**
 * Image URL for a positional dash-based static badge.
 */
export function staticDashUrl(badgeFields: GenericBadge, styleParams: StrMap) {
  const imgPath = dashShieldPath(badgeFields),
    imageTarget = `${SHIELDS_API.DASH}/${imgPath}`;

  return buildUrl(imageTarget, styleParams);
}

/**
 * Image URL for a GitHub counter badge.
 */
export function ghCounterShieldUrl(type: RepoMetric, repo: GHRepo) {
  const path = `${type}/${repo.username}/${repo.repoName}`;
  const url = `${SHIELDS_API.GH}/${path}`;

  if (type === "issues") {
    return url;
  }

  return buildUrl(url, { style: STYLES.SOCIAL });
}

/**
 * Image URL for a dynamic Node package.json dependency badge.
 */
export function nodePkgJsonShieldUrl(
  repo: GHRepo,
  pkgName: string,
  environment: ENVIRONMENT
) {
  const path =
    environment === ENVIRONMENT.Prod
      ? `${repo.username}/${repo.repoName}/${pkgName}`
      : `${repo.username}/${repo.repoName}/dev/${pkgName}`;

  return `${SHIELDS_API.PKG_JSON_DEPENDENCY}/${path}`;
}
