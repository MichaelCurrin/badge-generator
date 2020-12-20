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
          with a homepage of the tool.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div v-for="item in renderedBadges" v-bind:key="item">
          <vue-markdown>{{ item }}</vue-markdown>
          <pre><code>{{ item }}</code></pre>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueMarkdown from "vue-markdown";

import { genericBadge } from "@/core/badges";
import { CATALOGUE_BADGES, DEFAULT_COLOR } from "@/core/constants";

export default Vue.extend({
  name: "Catalogue",
  components: {
    VueMarkdown,
  },
  computed: {
    renderedBadges() {
      return CATALOGUE_BADGES.map((badge) =>
        genericBadge(
          badge.label,
          badge.message,
          DEFAULT_COLOR,
          false,
          badge.target,
          badge.logo || "",
          badge.logo ? "white" : ""
        )
      );
    },
  },
});
</script>
