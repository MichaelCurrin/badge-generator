export const DESCRIPTION =
  "Magically generate custom badges that you can paste in your docs";

const SHIELDS_API = "https://img.shields.io";

export const SHIELDS = {
  badge: `${SHIELDS_API}/badge`, // Dash-based URL.
  static: `${SHIELDS_API}/static/v1`, // Param-based URL.
  gh: `${SHIELDS_API}/github`,
  package: `${SHIELDS_API}/github/package-json/dependency-version`,
};

export const GITHUB_DOMAIN = "https://github.com",
  GITHUB_IO = "github.io";

export enum COLORS {
  Default = "blue",
  Green = "green",
  GitHubGreen = "2ea44f",
  LogoDefault = "white",
}

export const DEFAULT_BRANCH = "master";

export const LICENSE = {
  LABEL: "License",
  COLOR: COLORS.Default,
  IS_LARGE: false,
};

// TODO handle as map to make it easy to add multiple params.
export const STYLES = {
  FOR_THE_BADGE: "for-the-badge",
  SOCIAL: "social",
};

export enum REGISTRY {
  Python = "https://pypi.org/project",
  Node = "https://www.npmjs.com/package",
  Ruby = "https://rubygems.org/gems",
}
