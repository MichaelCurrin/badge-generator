import { COLOR_PRESETS } from "./appearance";

export const BADGE_DEFAULTS = {
  IS_LARGE: false,
  COLOR: COLOR_PRESETS.Default,
  LOGO_COLOR: COLOR_PRESETS.LogoDefault,
};

type TBadgeDetails = {
  label: string;
  message: string;
  target: string;
  logo?: string;
  isLarge?: boolean;
  altText?: string;
  hoverTitle?: string;
};

export const BADGE_DETAILS: TBadgeDetails[] = [
  {
    label: "view",
    message: "Documentation",
    target: "/docs/",
    isLarge: true,
    hoverTitle: "Go to project documentation",
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
    hoverTitle: "Go to contributions doc",
  },

  {
    label: "OS",
    message: "Linux",
    target: "https://www.linux.org/",
    logo: "linux",
    hoverTitle: "Go to Linux homepage",
  },
  {
    label: "OS",
    message: "macOS",
    target: "https://www.apple.com/macos/",
    logo: "apple",
    hoverTitle: "Go to Apple homepage",
  },
  {
    label: "OS",
    message: "Windows",
    target: "https://www.microsoft.com/",
    logo: "windows",
    hoverTitle: "Go to Microsoft homepage",
  },

  // Netlify CI badge is best created on Netlify itself and not here. But a
  // plain Made with Netlify might be nice.
  {
    label: "Hosted with",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
    altText: "Hosted with GH Pages",
    hoverTitle: "Go to GitHub Pages homepage",
  },
  // Use an actual GitHub Actions workflow badge if you prefer. But this could be useful it is Made for GitHub Actions.
  {
    label: "CI",
    message: "GitHub Actions",
    target: "https://github.com/features/actions",
    logo: "github-actions",
    altText: "Made with GH Actions",
    hoverTitle: "Go to GitHub Actions homepage",
  },

  {
    label: "Made with",
    message: "Docker",
    target: "https://www.docker.com/",
    logo: "docker",
    altText: "Made with Docker",
    hoverTitle: "Go to Docker homepage",
  },

  {
    label: "Bash",
    message: ">=3",
    target: "https://www.gnu.org/software/bash/",
    logo: "gnu-bash",
    altText: "Made with Bash",
    hoverTitle: "Go to Bash homepage",
  },

  {
    label: "Python",
    message: ">=3.6",
    target: "https://python.org",
    logo: "python",
    altText: "Made with Python",
    hoverTitle: "Go to Python homepage",
  },
  {
    label: "code style",
    message: "black",
    target: "https://black.readthedocs.io/",
    hoverTitle: "Go to Black homepage",
  },

  {
    label: "Made with",
    message: "JavaScript",
    target: "https://www.javascript.com/",
    logo: "javascript",
    altText: "Made with JavaScript",
    hoverTitle: "Go to JavaScript homepage",
  },
  {
    label: "Node.js",
    message: ">=12",
    target: "https://nodejs.org",
    logo: "node.js",
    altText: "Made with Node.js",
    hoverTitle: "Go to Node.js homepage",
  },
  {
    label: "Yarn",
    message: "1",
    target: "https://classic.yarnpkg.com",
    logo: "yarn",
    altText: "Made with Yarn",
    hoverTitle: "Go to Yarn classic homepage",
  },
  // Support 1 and 2 but link to 2.
  {
    label: "Yarn",
    message: ">=1",
    target: "https://yarnpkg.com/",
    logo: "yarn",
    altText: "Made with Yarn",
    hoverTitle: "Go to Yarn homepage",
  },

  // Rather use NPM badges based on `package.json` but you can use these if
  // needed. Especially for frontend-only projects.
  {
    label: "TypeScript",
    message: "4",
    target: "https://typescriptlang.org",
    logo: "typescript",
    altText: "Made with TypeScript",
    hoverTitle: "Go to TypeScript homepage",
  },
  {
    label: "React",
    message: "17",
    target: "https://reactjs.org",
    logo: "react",
    altText: "Made with React",
    hoverTitle: "Go to React homepage",
  },
  {
    label: "Vue",
    message: "3",
    target: "https://v3.vuejs.org",
    logo: "vue.js",
    altText: "Made with Vue",
    hoverTitle: "Go to Vue homepage",
  },

  {
    label: "Deno",
    message: "1",
    target: "https://deno.land",
    logo: "deno",
    altText: "Made with Deno",
    hoverTitle: "Go to Deno homepage",
  },

  {
    label: "Go",
    message: "1",
    target: "https://golang.org",
    logo: "go",
    altText: "Made with Go",
    hoverTitle: "Go to Go homepage",
  },
  {
    label: "Hugo",
    message: "0.X",
    target: "https://gohugo.io/",
    logo: "hugo",
    altText: "Made with Hugo",
    hoverTitle: "Go to Hugo homepage",
  },

  {
    label: "Rust",
    message: "1",
    target: "https://www.rust-lang.org/",
    logo: "rust",
    altText: "Made with Rust",
    hoverTitle: "Go to Rust homepage",
  },

  {
    label: "Ruby",
    message: ">=2.6",
    target: "https://ruby-lang.org",
    logo: "ruby",
    altText: "Made with Ruby",
    hoverTitle: "Go to Ruby homepage",
  },
  {
    label: "Jekyll",
    message: "3.9",
    target: "https://jekyllrb.com",
    logo: "jekyll",
    altText: "Made with Jekyll",
    hoverTitle: "Go to Jekyll homepage",
  },

  {
    label: "SQLite",
    message: "3",
    target: "https://www.sqlite.org/index.html",
    logo: "sqlite",
    altText: "Made with SQLite",
    hoverTitle: "Go to SQLite homepage",
  },
  {
    label: "PostgreSQL",
    message: "13",
    target: "https://www.postgresql.org/",
    logo: "postgresql",
    altText: "Made with PostgreSQL",
    hoverTitle: "Go to PostgresSQL homepage",
  },

  {
    label: "MySQL",
    message: ">=5.7",
    target: "https://www.mysql.com/",
    logo: "mysql",
    altText: "Made with MySQL",
    hoverTitle: "Go to MySQL homepage",
  },

  {
    label: "MongoDB",
    message: "3",
    target: "https://www.mongodb.com/",
    logo: "mongodb",
    altText: "Made with MongoDB",
    hoverTitle: "Go to MongoDB homepage",
  },

  {
    label: "",
    message: "GraphQL",
    target: "https://graphql.org/",
    logo: "graphql",
    altText: "Made with GraphQL",
    hoverTitle: "Go to GraphQL homepage",
  },
];
