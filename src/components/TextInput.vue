// Allow a given variable from the parent to be used here and push changes back up using events.
<template>
  <div>
    <span>{{ label }}: </span>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <small v-if="note">
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
    note: { type: String, required: false },
  },
};
</script>
