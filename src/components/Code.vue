// Render Markdown code as a codeblock. Syntax highlighting is applied
whenever the content changes.
<template>
  <pre><code ref="codeBlock" class="markdown">{{ code }}</code></pre>
</template>

<script lang="ts">
import hljs from "highlight.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Code",
  props: {
    code: { type: String, required: true },
  },
  methods: {
    highlight() {
      const block = this.$refs.codeBlock as HTMLElement;
      hljs.highlightBlock(block);
    },
  },
  mounted() {
    this.highlight();
  },
  updated() {
    this.highlight();
  },
});
</script>
