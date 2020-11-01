<template>
  <div>
    <span>{{ labelText }}</span>
    <input
      type="text"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :required="isRequired"
    />
    <small class="note" v-if="note">
      <vue-markdown>{{ note }}</vue-markdown>
    </small>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

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
    labelText() {
      return `${this.label}: `;
    },
  },
};
</script>
