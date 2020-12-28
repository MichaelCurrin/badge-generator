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
import Vue from "vue";

import { slugify } from "@/lib";
import Markdown from "@/components/Markdown.vue";

export default Vue.extend({
  name: "TextInput",
  components: {
    Markdown,
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
});
</script>
