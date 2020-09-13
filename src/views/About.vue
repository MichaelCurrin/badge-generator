<template>
  <div class="about container-lg">
    <h1>About</h1>
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
