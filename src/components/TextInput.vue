<template>
  <div>
    <span>{{ label }}: </span>
    <input
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      v-bind:placeholder="placeholder"
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
  },
};
</script>
