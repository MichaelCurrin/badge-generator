import { COLOR } from "./appearance";

export const BADGE_DEFAULTS = {
  IS_LARGE: false,
  COLOR: COLOR.Default,
  LOGO_COLOR: COLOR.LogoDefault,
};

type TBadgeDetails = {
  label: string;
  message: string;
  target: string;
  logo: string;
  isLarge?: boolean;
  altText?: string;
};

export const BADGE_DETAILS: TBadgeDetails[] = [
  // Or message: "Project Docs".
  {
    label: "View",
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

  // Netlify CI badge is best created on Netlify itself and not here. But a plain Made with Netlify might be nice.
  {
    label: "Hosted with",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
    altText: "Hosted with GH Pages",
  },
  // Use an actual GitHub Actions workflow badge if you prefer. But this could be useful it is Made for GitHub Actions.
  {
    label: "CI",
    message: "GitHub Actions",
    target: "https://github.com/features/actions",
    logo: "github-actions",
    altText: "Made with GH Actions",
  },

  {
    label: "Made with",
    message: "Docker",
    target: "https://www.docker.com/",
    logo: "docker",
    altText: "Made with Docker",
  },

  {
    label: "Bash",
    message: ">=3",
    target: "https://www.gnu.org/software/bash/",
    logo: "gnu-bash",
    altText: "Made with Bash",
  },

  {
    label: "Python",
    message: ">=3.6",
    target: "https://python.org",
    logo: "python",
    altText: "Made with Python",
  },

  {
    label: "Node.js",
    message: ">=12",
    target: "https://nodejs.org",
    logo: "node.js",
    altText: "Made with Node.js",
  },
  {
    label: "Yarn",
    message: "1",
    target: "https://classic.yarnpkg.com",
    logo: "yarn",
    altText: "Made with Yarn",
  },
  {
    label: "Deno",
    message: "1",
    target: "https://deno.land",
    logo: "deno",
    altText: "Made with Deno",
  },
  {
    label: "TypeScript",
    message: "4",
    target: "https://typescriptlang.org",
    logo: "typescript",
    altText: "Made with TypeScript",
  },
  {
    label: "React",
    message: "17",
    target: "https://www.npmjs.com/package/react",
    logo: "react",
    altText: "Made with React",
  },
  {
    label: "Vue",
    message: "3",
    target: "https://www.npmjs.com/package/vue",
    logo: "vue.js",
    altText: "Made with Vue",
  },

  {
    label: "Go",
    message: "1",
    target: "https://golang.org",
    logo: "go",
    altText: "Made with Go",
  },

  {
    label: "Ruby",
    message: ">=2.6",
    target: "https://ruby-lang.org",
    logo: "ruby",
    altText: "Made with Ruby",
  },
  {
    label: "Jekyll",
    message: "3.9",
    target: "https://jekyllrb.com",
    logo: "jekyll",
    altText: "Made with Jekyll",
  },

  {
    label: "SQLite",
    message: "3",
    target: "https://www.sqlite.org/index.html",
    logo: "sqlite",
    altText: "Made with SQLite",
  },
  {
    label: "PostgreSQL",
    message: "13",
    target: "https://www.postgresql.org/",
    logo: "postgresql",
    altText: "Made with PostgreSQL",
  },
];
