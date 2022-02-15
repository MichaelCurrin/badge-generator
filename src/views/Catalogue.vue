<template>
  <div class="images container-lg">
    <div class="row">
      <div class="col-12">
        <h1>Catalogue</h1>

        <p>
          Choose from pre-built badges that can be copied to your docs and
          mostly used as they are. You can tweak the version numbers as needed.
        </p>
        <p>
          The badges are all static so they will always look the same. They not
          rely on anything in your project to load. External links are included
          using the homepage of the tool.
        </p>
        <p>
          Related -
          <a href="https://ileriayo.github.io/markdown-badges/"
            >Markdown Badges</a
          >
          site with a large catalogue of products using logos and colors, or
          <a href="https://simpleicons.org/">Simple Icons</a> if you want to use
          their search feature then use the icon and color that comes up for
          your own shields.io badge.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div v-for="item in renderedBadges" :key="item">
          <Markdown :content="item"></Markdown>

          <Code :code="item" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Code from "@/components/Code.vue";
import Markdown from "@/components/Markdown.vue";
import { renderBadges } from "@/core/catalogue";

export default defineComponent({
  name: "Catalogue",
  components: {
    Markdown,
    Code,
  },
  computed: {
    renderedBadges() {
      return renderBadges();
    },
  },
});
</script>
