/**
 * Badge values constants module.
 *
 * All the values set here are fixed, though there is no minimum of fields to set here. Any values
 * not fixed here will be set by the user.
 */
import { COLOR } from "./appearance";

export const STATIC_DEPENDENCY = {
  LABEL: "Dependency",
  COLOR: COLOR.Default,
  IS_LARGE: false,
};

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
