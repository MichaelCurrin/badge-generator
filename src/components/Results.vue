<template>
  <!-- Badge generator ouput pane -->
  <div class="app-results">
    <h2>Output values</h2>

    <div>
      <h3>Preview</h3>
      <!-- Make sure to not add result on a new line otherwise it will indent and format. -->
      <!-- Make sure to use :source since {{ result }} as inner text will fail to update on UI changes. -->
      <Markdown :content="result"></Markdown>
    </div>

    <div>
      <h3>Code</h3>
      <Pre>{{ result }}</Pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Pre from "@/components/Pre.vue";
import Markdown from "@/components/Markdown.vue";

export default Vue.extend({
  name: "Results",
  components: {
    Markdown,
    Pre,
  },
  props: {
    result: String,
  },
});
</script>
