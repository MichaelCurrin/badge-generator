/**
 * Badge values constants module.
 *
 * Fixed values used for generating certain generic values. For consistency, these should only cover
 * keys that genericBadges function accepts, but there is no minimum requirement here for keys.
 */
import { COLOR } from "./appearance";

export const LICENSE_BADGE = {
  LABEL: "License",
  COLOR: COLOR.Default,
  IS_LARGE: false,
};

export const GH_BADGE = {
  COLOR: COLOR.Default,
  IS_LARGE: false,
  LOGO: "github",
  LOGO_COLOR: "",
};

export const GH_PAGES_BADGE = {
  LABEL: "View site",
  MESSAGE: "GH Pages",
  COLOR: COLOR.Green,
  IS_LARGE: true,
};

export const TEMPLATE_BADGE = {
  LABEL: "",
  MESSAGE: "Use this template",
  COLOR: COLOR.Green,
  IS_LARGE: true,
  LOGO: "github",
};
