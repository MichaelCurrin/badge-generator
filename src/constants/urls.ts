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

export const LICENSE_PATH = "/LICENSE";
