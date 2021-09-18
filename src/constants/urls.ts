const SHIELDS_API_BASE = "https://img.shields.io";

export const SHIELDS_API = {
  DASH: `${SHIELDS_API_BASE}/badge`,
  PARAM: `${SHIELDS_API_BASE}/static/v1`,
  GH: `${SHIELDS_API_BASE}/github`,
  PKG_JSON_DEPENDENCY: `${SHIELDS_API_BASE}/github/package-json/dependency-version`,
  GO_MODULE: `${SHIELDS_API_BASE}/github/go-mod/go-version`,
};

export enum REGISTRY {
  Python = "https://pypi.org/project",
  Node = "https://www.npmjs.com/package",
  Ruby = "https://rubygems.org/gems",
  Go = "https://pkg.go.dev",
}
export type RegistryKeys = keyof typeof REGISTRY;

export const GITHUB_DOMAIN = "https://github.com",
  GITHUB_IO = "github.io";

export const DEFAULT_BRANCH = "main";

export const LICENSE_PATH = "/LICENSE";

// See Tag badges section of the `/docs/badge-notes.md` doc.
export const VERSION_PARAMS = { include_prereleases: "", sort: "semver" };
