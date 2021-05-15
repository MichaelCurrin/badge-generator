<template>
  <div>
    <label :for="slug">
      {{ label }}<span v-if="isRequired" class="required">*</span>
    </label>

    <input
      :id="slug"
      type="text"
      :modelValue="modelValue"
      :placeholder="placeholder"
      :required="isRequired"
      :disabled="disabled"
      v-on:input="$emit('update:modelValue', $event.target.value)"
    />

    <small class="note" v-if="note">
      <Markdown :content="note"></Markdown>
    </small>
  </div>
</template>

<style scoped>
label {
  padding-right: 0.5em;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import { slugify } from "@/lib";
import Markdown from "@/components/Markdown.vue";

export default defineComponent({
  name: "TextInput",
  components: {
    Markdown,
  },
  props: {
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
    placeholder: { type: String, required: false },
    isRequired: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    note: { type: String, required: false },
  },
  computed: {
    slug(): string {
      return slugify("text", this.label, this.modelValue);
    },
  },
});
</script>
