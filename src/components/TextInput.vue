// Allow a given variable from the parent to be used here and push changes back up using events.
<template>
  <div>
    <span>{{ label }}: </span>
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <small v-if="note">{{ note }}</small>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    note: { type: String, required: false },
  },
};
</script>
