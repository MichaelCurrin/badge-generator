<template>
  <div v-html="toHTML(content)"></div>
</template>

<script lang="ts">
import Vue from "vue";
import markdownIt from "markdown-it";

// TODO: The docstring says rendering from HTML is unsafe and recommends sanitizing, or using a
// plugin. No so important for this app as it has no persistence layer, but maybe research one day.
const md = new markdownIt({ html: true });

export default Vue.extend({
  name: "Markdown",
  props: {
    content: String,
  },
  methods: {
    toHTML: (value: string) => md.render(value),
  },
});
</script>
