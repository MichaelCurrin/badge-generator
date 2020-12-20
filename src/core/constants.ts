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
  DEFAULT_LOGO_COLOR = "white",
  DEFAULT_BRANCH = "master";

export const LICENSE = {
  LABEL: "License",
  COLOR: DEFAULT_COLOR,
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

export const CATALOGUE_BADGES = [
  {
    label: "view",
    message: "Documentation",
    target: "/docs/",
    logo: "",
    isLarge: true,
  },
  {
    label: "OS",
    message: "Linux",
    target: "https://www.linux.org/",
    logo: "linux",
  },
  {
    label: "OS",
    message: "macOS",
    target: "https://www.apple.com/macos/",
    logo: "apple",
  },
  {
    label: "OS",
    message: "Windows",
    target: "https://www.microsoft.com/",
    logo: "windows",
  },
  // Netlify badge is best created on Netlify itself and not here.
  {
    label: "Hosted with",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
  },
  // Use an actual GitHub Actions workflow badge if you prefer. But this could be useful it is Made for GitHub Actions.
  {
    label: "CI",
    message: "GitHub Actions",
    target: "https://github.com/features/actions",
    logo: "github-actions",
  },
  {
    label: "Made with",
    message: "Docker",
    target: "https://www.docker.com/",
    logo: "docker",
  },
  {
    label: "Bash",
    message: ">=3",
    target: "https://www.gnu.org/software/bash/",
    logo: "gnu-bash",
  },
  {
    label: "Python",
    message: ">=3.6",
    target: "https://python.org",
    logo: "python",
  },
  {
    label: "Node.js",
    message: ">=12",
    target: "https://nodejs.org",
    logo: "node.js",
  },
  {
    label: "Yarn",
    message: "1",
    target: "https://classic.yarnpkg.com",
    logo: "yarn",
  },
  {
    label: "TypeScript",
    message: "4",
    target: "https://typescriptlang.org",
    logo: "typescript",
  },
  {
    label: "React",
    message: "17",
    target: "https://www.npmjs.com/package/react",
    logo: "react",
  },
  {
    label: "Vue",
    message: "3",
    target: "https://www.npmjs.com/package/vue",
    logo: "vue.js",
  },
  {
    label: "Jekyll",
    message: "3.9",
    target: "https://jekyllrb.com",
    logo: "jekyll",
  },
  {
    label: "Ruby",
    message: ">=2.6",
    target: "https://ruby-lang.org",
    logo: "ruby",
  },
];
