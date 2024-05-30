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
          The badges here are all <b>static</b> and do not depend on anything.
          Tip: for NPM packages, rather use the "Package" tab to make a dynamic
          badge that will load a version number based on your
          <code>package.json</code> file. The badges are included with clickable
          external clicks which take you to the homepage of that tool.
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

          <CodeItem :code="item" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CodeItem from "@/components/Code.vue";
import Markdown from "@/components/Markdown.vue";
import { renderBadges } from "@/core/catalogue";

export default defineComponent({
  name: "CatalogueItem",
  components: {
    Markdown,
    CodeItem,
  },
  computed: {
    renderedBadges() {
      return renderBadges();
    },
  },
});
</script>
