<template>
  <div class="images container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Catalogue</h1>

        <p>
          Choose from pre-built badges that can be copied to your docs without
          any updates needed. These badges are all static, as they used fixed
          choices of text, logos, colors and external links.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div v-for="item in badges" v-bind:key="item">
          <vue-markdown>{{ item }}</vue-markdown>
          <pre><code>{{ item }}</code></pre>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

import { genericBadge } from "@/core/badges";

const tools = [
  {
    label: "OS",
    message: "Linux",
    target: "https://www.linux.org/",
    logo: "apple",
  },
  {
    label: "OS",
    message: "macOS",
    target: "https://www.apple.com/macos/",
    logo: "apple",
  },
  // Netlify is best as its own badge.
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
    logo: "githubactions",
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
    message: "2",
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
const renderedTools = tools.map((tool) =>
  // So far they all look best as white or default to white.
  genericBadge(
    tool.label,
    tool.message,
    undefined,
    null,
    tool.target,
    tool.logo,
    "white"
  )
);

export default {
  name: "Catalogue",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      badges: renderedTools,
    };
  },
};
</script>
