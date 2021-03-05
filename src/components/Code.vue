<template>
  <highlightjs :language="language" :code="code" />
</template>

<script lang="ts">
import Vue from "vue";
import hljs from "highlight.js";

Vue.use(hljs.vuePlugin);

const defaultLanguage = "markdown";

export default Vue.extend({
  name: "Code",
  props: {
    code: { type: String, required: true },
    language: { type: String, required: false, default: defaultLanguage },
  },
});
</script>
