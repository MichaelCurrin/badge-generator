// Code block with syntax highlighting.
<template>
  <pre><code>{{ code }}</code></pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Code",
  props: {
    code: { type: String, required: true },
  },
});
</script>
