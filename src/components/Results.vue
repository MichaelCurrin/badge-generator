<template>
  <!-- Badge Generator output pane -->
  <div class="app-results">
    <h2>Output values</h2>

    <div>
      <h3>Preview</h3>

      <Markdown class="markdown-preview" :content="result"></Markdown>
    </div>

    <br />

    <div>
      <h3>Code</h3>

      <CodeItem :code="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CodeItem from "@/components/Code.vue";
import Markdown from "@/components/Markdown.vue";

export default defineComponent({
  name: "ResultsItem",
  components: {
    Markdown,
    CodeItem,
  },
  props: {
    result: { type: String, required: true },
  },
});
</script>

<style scoped>
.markdown-preview {
  padding-left: 12px;
}
</style>
