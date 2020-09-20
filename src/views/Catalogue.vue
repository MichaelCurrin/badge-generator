<template>
  <div class="images container-lg row">
    <div class="col-12">
      <h1>Catalogue</h1>

      <p>
        Choose from pre-built badges that can be copied to your docs without any
        updates needed. These badges are all static, as they used fixed choices
        of text, logos, colors and external links.
      </p>
    </div>

    <div class="col-6">
      <vue-markdown v-for="item in tools" v-bind:key="item">
        {{ item }}
      </vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

import { genericBadge } from "@/core/badges";

// [![Hosted with GH Pages](https://img.shields.io/badge/Made_with-GH_Pages-blue.svg)](https://pages.github.com/)
// [![Made with Bash](https://img.shields.io/badge/Made_with-Bash-blue.svg)](https://www.gnu.org/software/bash/)
// [![Made for Bash](https://img.shields.io/badge/Made_for-Bash-blue.svg)](https://www.gnu.org/software/bash/)
// [![Made with Python](https://img.shields.io/badge/Made_with-Python-blue.svg)](https://python.org)
// [![Made with Node.js](https://img.shields.io/badge/Made_with-Node.js-blue.svg)](https://nodejs.org)
// [![Made with TypeScript](https://img.shields.io/badge/Made_with-TypeScript-blue.svg)](https://typescriptlang.org)
// [![Made with Jekyll](https://img.shields.io/badge/Made_with-Jekyll-blue.svg)](https://jekyllrb.com)
// [![Made with Ruby](https://img.shields.io/badge/Made_with-Ruby-blue.svg)](https://ruby-lang.org)

const TOOLS = [
  {
    label: "Made with",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
  },
];

export default {
  name: "Catalogue",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      tools: TOOLS.map((tool) =>
        genericBadge(
          tool.label,
          tool.message,
          undefined,
          null,
          tool.target,
          tool.logo
        )
      ),
    };
  },
};
</script>
