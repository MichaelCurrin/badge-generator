// Convert markdown or HTML text input to rendered HTML.
<template>
  <div v-html="toHTML(content)"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import markdownIt from "markdown-it";

const md = new markdownIt({ html: true });

export default defineComponent({
  name: "Markdown",
  props: {
    content: String,
  },
  methods: {
    toHTML: (value: string) => md.render(value),
  },
});
</script>
