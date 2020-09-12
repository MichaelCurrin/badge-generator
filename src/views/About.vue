<template>
  <div class="about">
    <h2>About</h2>
    <vue-markdown>_Content_</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "About",
  components: {
    VueMarkdown,
  },
};
</script>
