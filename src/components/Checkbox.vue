// Bind to given variable in parent's v-model.
// Optionally supply `:check=true` to override default of `false`.
<template>
  <div>
    <span>{{ label }}: </span>
    <input
      type="checkbox"
      checked="checked"
      v-bind:value="value"
      v-on:change="$emit('input', $event.target.checked)"
    />
    <small v-if="note">
      <vue-markdown>{{ note }}</vue-markdown>
    </small>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

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
};
</script>
