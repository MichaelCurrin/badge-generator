/* To reduce whitespace, make sure to keep everything on one line here. */
<template>
  <pre><code><slot></slot></code></pre>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pre",
});
</script>
