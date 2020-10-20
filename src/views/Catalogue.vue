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
    label: "Hosted on",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
  },
  {
    label: "Made for",
    message: "Bash",
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
    message: ">=10.X",
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
