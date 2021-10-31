/**
 * Badge values constants module.
 *
 * The aim is to move fixed values out of scripts where they are used and rather
 * move them to a central script here which is like a config.
 *
 * All the values set here are fixed or are defaults. Any values not fixed here
 * will be set by the user.
 */
import { COLOR_PRESETS } from "./appearance";
import { IGenericBadge } from "./badgeValues.d";

// This is the same as the project itself but they don't always have to be.
export const DEFAULT_REPO_INPUTS = {
  username: "MichaelCurrin",
  repoName: "badge-generator",
};

export const BADGE_GENERATOR_REPO = {
  username: "MichaelCurrin",
  repoName: "badge-generator",
};

export const STATIC_DEPENDENCY: IGenericBadge = {
  label: "dependency",
  color: COLOR_PRESETS.Default,
  isLarge: false,
};

export const LICENSE_BADGE: IGenericBadge = {
  label: "License",
  color: COLOR_PRESETS.Default,
  isLarge: false,
  altText: "License",
};

export const GH_BADGE: IGenericBadge = {
  color: COLOR_PRESETS.Default,
  isLarge: false,
  logo: "github",
  logoColor: "",
  hoverTitle: "Go to GitHub repo",
};

export const GH_PAGES_BADGE: IGenericBadge = {
  label: "View site",
  message: "GH Pages",
  color: COLOR_PRESETS.Green,
  isLarge: true,
};

// Keep the message to match what GitHub's own template badge says, so it makes
// it easier for someone to predict what the button will do. Logo was GitHub
// before, but it took up too much space and was distracting.
export const TEMPLATE_BADGE: IGenericBadge = {
  label: "Generate",
  message: "Use this template",
  color: COLOR_PRESETS.Green,
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
