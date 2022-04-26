<template>
  <div class="app-notes">
    <h2>Notes</h2>
    <p>
      <Markdown :content="message"></Markdown>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Markdown from "@/components/Markdown.vue";

export default defineComponent({
  name: "HelpItem",
  components: {
    Markdown,
  },
  props: {
    message: { type: String, required: true },
  },
});
</script>
