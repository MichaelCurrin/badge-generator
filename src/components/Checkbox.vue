<template>
  <div>
    <label :for="slug">
      {{ label }}
    </label>

    <input
      :id="slug"
      type="checkbox"
      :checked="modelValue"
      v-on:change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
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
  name: "CheckboxItem",
  components: {
    Markdown,
  },
  props: {
    label: { type: String, required: true },
    modelValue: { type: Boolean, required: false },
    note: { type: String, required: false },
  },
  computed: {
    slug(): string {
      return slugify("box", this.label);
    },
  },
});
</script>
