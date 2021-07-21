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
  logo?: string;
  isLarge?: boolean;
  altText?: string;
};

export const BADGE_DETAILS: TBadgeDetails[] = [
  // Or message: "Project Docs".
  {
    label: "view",
    message: "Documentation",
    target: "/docs/",
    isLarge: true,
  },

  // These would be useful on the Repo package, maybe with link to issues or PRs.
  {
    label: "maintained",
    message: "yes",
    target: "",
  },
  {
    label: "contributions",
    message: "welcome",
    target: "/CONTRIBUTING.md",
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
    label: "code style",
    message: "black",
    target: "https://black.readthedocs.io/",
  },

  {
    label: "Made with",
    message: "JavaScript",
    target: "https://www.javascript.com/",
    logo: "javascript",
    altText: "Made with JavaScript",
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
  // Support 1 and 2 but link to 2.
  {
    label: "Yarn",
    message: ">=1",
    target: "https://yarnpkg.com/",
    logo: "yarn",
    altText: "Made with Yarn",
  },

  // Rather use NPM badges based on package.json but you can use these if needed.
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
    label: "Deno",
    message: "1",
    target: "https://deno.land",
    logo: "deno",
    altText: "Made with Deno",
  },

  {
    label: "Go",
    message: "1",
    target: "https://golang.org",
    logo: "go",
    altText: "Made with Go",
  },
  {
    label: "Hugo",
    message: "0.X",
    target: "https://gohugo.io/",
    logo: "hugo",
    altText: "Made with Hugo",
  },

  {
    label: "Rust",
    message: "1",
    target: "https://www.rust-lang.org/",
    logo: "rust",
    altText: "Made with Rust",
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

  {
    label: "MySQL",
    message: ">=5.7",
    target: "https://www.mysql.com/",
    logo: "mysql",
    altText: "Made with MySQL",
  },

  {
    label: "MongoDB",
    message: "3",
    target: "https://www.mongodb.com/",
    logo: "mongodb",
    altText: "Made with MongoDB",
  },

  {
    label: "",
    message: "GraphQL",
    target: "https://graphql.org/",
    logo: "graphql",
    altText: "Made with GraphQL",
  },
];
