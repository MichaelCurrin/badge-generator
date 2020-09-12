<template>
  <div class="images">
    <h1>Images</h1>
    <vue-markdown>_Content_</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Images",
  components: {
    VueMarkdown,
  },
};
</script>
