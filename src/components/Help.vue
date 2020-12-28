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

<script lang="ts">
import Vue from "vue";
import VueMarkdown from "@adapttive/vue-markdown";

export default Vue.extend({
  name: "Checkbox",
  components: {
    VueMarkdown,
  },
  props: {
    message: { type: String, required: true },
  },
});
</script>
