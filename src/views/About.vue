<template>
  <div class="about container-lg row">
    <div class="col-12">
      <h1>About</h1>
    </div>

    <div class="col-6">
      <vue-markdown>_Content_</vue-markdown>
    </div>
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
