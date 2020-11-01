<template>
  <div>
    <label :for="slug">
      {{ label }}<span v-if="isRequired" class="required">*</span>
    </label>

    <input
      :id="slug"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :required="isRequired"
      v-on:input="$emit('input', $event.target.value)"
    />

    <small class="note" v-if="note">
      <vue-markdown>{{ note }}</vue-markdown>
    </small>
  </div>
</template>

<style scoped>
label {
  padding-right: 0.5em;
}
</style>

<script>
import VueMarkdown from "vue-markdown";

import { slugify } from "@/lib";

export default {
  name: "TextInput",
  components: {
    VueMarkdown,
  },
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    placeholder: { type: String, required: false },
    note: { type: String, required: false },
    isRequired: { type: Boolean, required: false },
  },
  computed: {
    slug() {
      return slugify("text", this.label, this.value);
    },
  },
};
</script>
