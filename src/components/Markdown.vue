// Based on VueMarkdown but much lighter - fewer features and dependencies.
<template>
  <div v-html="toHTML(content)"></div>
</template>

<script lang="ts">
import Vue from "vue";

import markdownIt from "markdown-it";

// TODO The docstring says rendering from HTML is unsafe and recommends sanitizing, or using a plugin.
const md = new markdownIt({ html: true });

export default Vue.extend({
  name: "Markdown",
  props: {
    content: String,
  },
  methods: {
    // Warning: render is a reserved method so toHTML is safe.
    toHTML: (value: string) => md.render(value),
  },
});
</script>
