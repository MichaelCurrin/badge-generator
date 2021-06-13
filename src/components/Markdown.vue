// Render Markdown (or HTML) as HTML.
<template>
  <div v-html="mdToHTML(content)"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mdToHTML } from "@/core/markdown";

export default defineComponent({
  name: "Markdown",
  props: {
    content: { type: String, required: true },
  },
  methods: {
    mdToHTML,
  },
});
</script>
