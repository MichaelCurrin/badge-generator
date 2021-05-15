<template>
  <div>
    <label :for="slug">
      {{ label }}
    </label>

    <input
      :id="slug"
      type="checkbox"
      :checked="checked"
      v-on:change="$emit('input', $event.target.checked)"
    />

    <small class="note" v-if="note">
      <Markdown :content="note"></Markdown>
    </small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Markdown from "@/components/Markdown.vue";
import { slugify } from "@/lib";

export default defineComponent({
  name: "Checkbox",
  components: {
    Markdown,
  },
  props: {
    label: { type: String, required: true },
    checked: { type: Boolean, required: false, default: false },
    note: { type: String, required: false },
  },
  computed: {
    slug(): string {
      return slugify("box", this.label);
    },
  },
});
</script>
