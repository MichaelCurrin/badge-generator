<template>
  <div class="images">
    <h2>Images</h2>
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
