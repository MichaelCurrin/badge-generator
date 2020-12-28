<template>
  <div class="app-notes">
    <h2>Notes</h2>
    <p>
      <Markdown :content="message"></Markdown>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Markdown from "@/components/Markdown.vue";

export default Vue.extend({
  name: "Help",
  components: {
    Markdown,
  },
  props: {
    message: String,
  },
});
</script>
