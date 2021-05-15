// import hljs from "highlight.js";
// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";

// const app = createApp(App);
// app.use(router);
// app.use(hljs.vuePlugin);
// app.mount("#app");

import hljs from "highlight.js/lib/common";
import vuePlugin from "@highlightjs/vue-plugin";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(vuePlugin);
app.mount("#app");
