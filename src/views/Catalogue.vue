<template>
  <div class="images container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Catalogue</h1>

        <p>
          Choose from pre-built badges that can be copied to your docs and
          mostly used as they are. You can tweak the version numbers as needed.
        </p>
        <p>
          The badges are all static so they will always look the same. They not
          rely on anything in your project to load. External links are included
          with a homepage of the tool.
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

<script lang="ts">
import Vue from "vue";
import VueMarkdown from "vue-markdown";

import { genericBadge } from "@/core/badges";

const tools = [
  // Not a tool, but useful here anyway.
  {
    label: "view",
    message: "Documentation",
    target: "/docs/",
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
const renderedTools = tools.map((tool) =>
  // So far they all look best as white or default to white.
  genericBadge(
    tool.label,
    tool.message,
    "",
    false,
    tool.target,
    tool.logo || "",
    tool.logo ? "white" : ""
  )
);

export default Vue.extend({
  name: "Catalogue",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      badges: renderedTools,
    };
  },
});
</script>
