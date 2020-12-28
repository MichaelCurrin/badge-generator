<template>
  <div>
    <label :for="slug">
      {{ label }}
    </label>

    <input
      :id="slug"
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('input', $event.target.checked)"
    />

    <small class="note" v-if="note">
      <vue-markdown>{{ note }}</vue-markdown>
    </small>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueMarkdown from "@adapttive/vue-markdown";

import { slugify } from "@/lib";

export default Vue.extend({
  name: "Checkbox",
  components: {
    VueMarkdown,
  },
  props: {
    label: { type: String, required: true },
    checked: { type: Boolean, required: false, default: false },
    note: { type: String, required: false },
  },
  computed: {
    slug() {
      return slugify("box", this.label);
    },
  },
});
</script>
