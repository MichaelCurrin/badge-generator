/*
 * Checkbox component
 *
 * Bind to given variable in parent's v-model. Set default state using
 * :checked="foo", in addition to v-model="foo".
 */
<template>
  <div>
    <span>{{ label }}: </span>
    <input
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
