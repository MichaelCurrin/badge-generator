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

<script>
import VueMarkdown from "vue-markdown";
import { slugify } from "@/lib";

export default {
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
      return `checkbox-${slugify(this.label)}`;
    },
  },
};
</script>
