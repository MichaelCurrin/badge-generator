export const DESCRIPTION =
  "Magically generate custom badges that you can paste in your docs";

const SHIELDS_API_BASE = "https://img.shields.io";

export const SHIELDS_API = {
  DASH: `${SHIELDS_API_BASE}/badge`,
  PARAM: `${SHIELDS_API_BASE}/static/v1`,
  GH: `${SHIELDS_API_BASE}/github`,
  PACKAGE: `${SHIELDS_API_BASE}/github/package-json/dependency-version`,
};

export enum REGISTRY {
  Python = "https://pypi.org/project",
  Node = "https://www.npmjs.com/package",
  Ruby = "https://rubygems.org/gems",
}

export const GITHUB_DOMAIN = "https://github.com",
  GITHUB_IO = "github.io";

export const DEFAULT_BRANCH = "master";

export enum COLOR {
  Default = "blue",
  Green = "green",
  GitHubGreen = "2ea44f",
  LogoDefault = "white",
}

export const LICENSE = {
  LABEL: "License",
  COLOR: COLOR.Default,
  IS_LARGE: false,
};

// TODO handle as map to make it easy to add multiple params.
export const STYLES = {
  FOR_THE_BADGE: "for-the-badge",
  SOCIAL: "social",
};
