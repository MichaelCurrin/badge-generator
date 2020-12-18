export const DESCRIPTION =
  "Magically generate custom badges that you can paste in your docs";

export const SHIELDS_API = "https://img.shields.io",
  SHIELDS_BADGE = `${SHIELDS_API}/badge`, // Dash-based URL.
  SHIELDS_STATIC = `${SHIELDS_API}/static/v1`, // Param-based URL.
  SHIELDS_GH = `${SHIELDS_API}/github`,
  SHIELDS_PACKAGE = `${SHIELDS_API}/github/package-json/dependency-version`;

export const GITHUB_DOMAIN = "https://github.com",
  GITHUB_IO = "github.io",
  DEFAULT_COLOR = "blue",
  GREEN = "green",
  // From 'Use this template' or 'Merge' button on GitHub.
  GITHUB_GREEN = "2ea44f",
  DEFAULT_BRANCH = "master";

export const LICENSE_LABEL = "License";

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
