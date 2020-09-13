<template>
  <div class="app-results">
    <h2>Output values</h2>

    <div>
      <h3>Preview</h3>
      <!-- Make sure to not add result on a new line otherwise it will indent and format. -->
      <!-- Make sure to use :source since {{ result }} as inner text will fail to update on UI changes. -->
      <vue-markdown :source="result"></vue-markdown>
    </div>

    <hr />

    <div>
      <h3>Code</h3>
      <!-- To reduce whitespace, make sure to keep everything on one line here. -->
      <pre><code>{{ result }}</code></pre>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Results",
  components: {
    VueMarkdown,
  },
  props: {
    result: String,
  },
};
</script>
