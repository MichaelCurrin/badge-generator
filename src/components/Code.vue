// Render Markdown as a codeblock. Apply highlighting on content changes.
<template>
  <div>
    <Checkbox label="Show HTML" v-model="asHtml" />
    <br />

    <pre><code ref="codeBlock" class="markdown">{{ outputCode }}</code></pre>
  </div>
</template>

<script lang="ts">
import hljs from "highlight.js";
import markdownIt from "markdown-it";
import { defineComponent } from "vue";

import Checkbox from "./Checkbox.vue";

const md = new markdownIt({ html: true });

/**
 * Turn HTML generated from Markdown into more typical HTML.
 */
function cleanHtml(htmlCode: String) {
  return htmlCode
    .replaceAll("<p>", "")
    .replaceAll("</p>", "\n")
    .replaceAll("<em>", "<i>")
    .replaceAll("</em>", "</i>")
    .replaceAll("<strong>", "<b>")
    .replaceAll("</strong>", "</bold>")
    .replaceAll("&amp;", "&");
}

export default defineComponent({
  name: "Code",
  components: {
    Checkbox,
  },
  props: {
    code: { type: String, required: true },
  },
  data() {
    return {
      asHtml: false,
    };
  },
  computed: {
    outputCode(): String {
      return this.asHtml ? cleanHtml(this.toHTML(this.code)) : this.code;
    },
  },
  methods: {
    highlight() {
      const block = this.$refs.codeBlock as HTMLElement;
      hljs.highlightBlock(block);
    },
    toHTML(value: string) {
      return md.render(value);
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
