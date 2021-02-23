/**
 * Badge values constants module.
 *
 * The aim is to move fixed values out of scripts where they are used and rather move them to a
 * central script here which is like a config.
 *
 * All the values set here are fixed or are defaults. Any values not fixed here will be set by the
 * user.
 */
import { COLOR } from "./appearance";
import { genericBadgeBase } from "./badgeValues.d";

export const STATIC_DEPENDENCY: genericBadgeBase = {
  label: "dependency",
  color: COLOR.Default,
  isLarge: false,
};

export const LICENSE_BADGE: genericBadgeBase = {
  label: "License",
  color: COLOR.Default,
  isLarge: false,
  altText: "License",
};

export const GH_BADGE: genericBadgeBase = {
  color: COLOR.Default,
  isLarge: false,
  logo: "github",
  logoColor: "",
};

export const GH_PAGES_BADGE: genericBadgeBase = {
  label: "View site",
  message: "GH Pages",
  color: COLOR.Green,
  isLarge: true,
};

// Keep the message to match what GitHub's own template badge says, so it makes it easier for
// someone to predict what the button will do. Logo was GitHub before, but it took up too much space
// and was distracting.
export const TEMPLATE_BADGE: genericBadgeBase = {
  label: "Generate",
  message: "Use this template",
  color: COLOR.Green,
  isLarge: true,
  altText: "Use this template",
};

export const NODE_VERSION_BADGE = {
  IS_LARGE: false,
};

export const GO_MODULE_SHIELD = {
  isLarge: false,
  logo: "go",
  logoColor: "white",
  linkTarget: "https://golang.org",
  altText: "Made with Go",
};
