// Code block with syntax highlighting.
<template>
  <highlightjs :language="language" :code="code" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

const defaultLanguage = "markdown";

export default defineComponent({
  name: "Code",
  props: {
    code: { type: String, required: true },
    language: { type: String, required: false, default: defaultLanguage },
  },
});
</script>
