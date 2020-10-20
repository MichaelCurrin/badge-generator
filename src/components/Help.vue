<template>
  <div class="app-notes">
    <h2>Notes</h2>
    <p>
      <vue-markdown>
        {{ message }}
      </vue-markdown>
    </p>
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
