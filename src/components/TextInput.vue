// TODO: Fix this so it can pass a value back to the parent. See also label and name and for other fields on W3 schools. And type="text" but that seems left off. See also docs. https://vuejs.org/v2/guide/forms.html
// https://dev.to/jakzaizzat/avoid-mutating-a-prop-directly-ab9
<template>
  <div>
    <span>{{ label }}: {{ bindVar }} {{ bindVarComponent }}</span>
    <input v-bind:bindVar="bindVar" />
    <small v-if="note">{{ note }}</small>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: { type: String, required: true },
    bindVar: { type: String, required: true },
    note: { type: String, required: false },
  },
  computed: {
    // Avoid error on mutating property of parent by using the flow.
    bindVarComponent() {
      return this.bindVar;
    },
  },
};
</script>
