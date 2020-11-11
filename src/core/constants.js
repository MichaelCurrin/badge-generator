import * as pkg from "../../package.json";

export const DESCRIPTION = pkg.description;

export const SHIELDS_API = "https://img.shields.io",
  SHIELDS_BADGE = `${SHIELDS_API}/badge`, // Dash-based
  SHIELDS_STATIC = `${SHIELDS_API}/static/v1`, // Param-based
  SHIELDS_GH = `${SHIELDS_API}/github`,
  GITHUB = "https://github.com",
  DEFAULT_COLOR = "blue",
  GITHUB_GREEN = "2ea44f", // Such as Use this template or Merge button
  DEFAULT_BRANCH = "master";

// TODO handle as map to make it easy to add multiple params.
export const STYLES = {
  FOR_THE_BADGE: "?style=for-the-badge",
  SOCIAL: "?style=social",
};

// TODO add function to handle nodePackageUrl etc.
export const PACKAGE_INFO = {
  python: {
    label: "PyPI",
    url: "https://pypi.org/project/",
  },
  node: {
    label: "npm",
    url: "https://www.npmjs.com/package/",
  },
  ruby: {
    label: "rubygems",
    url: "https://rubygems.org/gems/",
  },
};
