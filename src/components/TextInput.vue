// TODO: Fix this so it can pass a value back to the parent. See also label and name and for other fields on W3 schools. And type="text" but that seems left off. See also docs. https://vuejs.org/v2/guide/forms.html
<template>
  <div>
    <span>{{ label }}: {{ bindVar }}</span>
    <input v-model="bindVar" />
    <small v-if="note">{{ note }}</small>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    note: String,
  },
  data() {
    return {
      bindVar: "",
    };
  },
};
</script>
