<template>
  <div class="badges container-lg row">
    <div class="col-12">
      <h1>Badges</h1>
    </div>

    <div class="col-6">
      <vue-markdown>_Content_</vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Badges",
  components: {
    VueMarkdown,
  },
};
</script>
