<template>
  <div v-if="linkTarget">
    <a :href="linkTarget">
      <img :src="imgSrc" :alt="altText" />
    </a>
  </div>
  <div v-else>
    <img :src="imgSrc" :alt="altText" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImageComponent",
  props: {
    imgSrc: { type: String, required: true },
    altText: { type: String, required: true },
    linkTarget: { type: String, required: false },
  },
});
</script>
