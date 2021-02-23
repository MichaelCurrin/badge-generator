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
  LABEL: "dependency",
  COLOR: COLOR.Default,
  IS_LARGE: false,
};

export const LICENSE_BADGE: genericBadgeBase = {
  LABEL: "License",
  COLOR: COLOR.Default,
  IS_LARGE: false,
  ALT_TEXT: "License",
};

export const GH_BADGE: genericBadgeBase = {
  COLOR: COLOR.Default,
  IS_LARGE: false,
  LOGO: "github",
  LOGO_COLOR: "",
};

export const GH_PAGES_BADGE: genericBadgeBase = {
  LABEL: "View site",
  MESSAGE: "GH Pages",
  COLOR: COLOR.Green,
  IS_LARGE: true,
};

// Keep the message to match what GitHub's own template badge says, so it makes it easier for
// someone to predict what the button will do. Logo was GitHub before, but it took up too much space
// and was distracting.
export const TEMPLATE_BADGE: genericBadgeBase = {
  LABEL: "Generate",
  MESSAGE: "Use this template",
  COLOR: COLOR.Green,
  IS_LARGE: true,
  ALT_TEXT: "Use this template",
};


// TODO Add to frontend. With toggle.
// TODO Is this a repo badge or package badge - which page and modules?
// TODO Move.
// TODO Add type
// TODO Pass as object that can be used in logoParams without position args.
// TODO URL from somewhere else.
export const GO_MODULE_SHIELD: genericBadgeBase = {
  IS_LARGE: false,
  LOGO: "go",
  LOGO_COLOR: "white",
  TARGET: "https://golang.org",
  ALT_TEXT: "Made with Go",
};
