<template>
  <!-- Badge Generator output pane -->
  <div class="app-results">
    <h2>Output values</h2>

    <div>
      <h3>Preview</h3>
      <Markdown :content="result"></Markdown>
    </div>

    <div>
      <h3>Code</h3>

      <Code :code="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Code from "@/components/Code.vue";
import Markdown from "@/components/Markdown.vue";

export default defineComponent({
  name: "Results",
  components: {
    Markdown,
    Code,
  },
  props: {
    result: { type: String, required: true },
  },
});
</script>
