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
import { defineComponent } from "vue";

import { cleanHtml, mdToHTML } from "@/core/markdown";
import Checkbox from "./Checkbox.vue";
import store from "@/store";

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
      asHtml: store.state.asHtml,
    };
  },
  computed: {
    outputCode(): String {
      store.setAsHTML(this.asHtml);

      if (this.asHtml) {
        const htmlCode = mdToHTML(this.code);

        return cleanHtml(htmlCode);
      }

      return this.code;
    },
  },
  methods: {
    highlight() {
      const block = this.$refs.codeBlock as HTMLElement;
      hljs.highlightElement(block);
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
