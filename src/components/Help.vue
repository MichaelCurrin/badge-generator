<template>
  <div class="app-notes">
    <h2>Help</h2>
    <details>
      <summary>Click to show/hide notes</summary>
      <p>
        <vue-markdown>
          {{ message }}
        </vue-markdown>
      </p>
    </details>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Checkbox",
  components: {
    VueMarkdown,
  },
  props: {
    message: { type: String, required: true },
  },
};
</script>
