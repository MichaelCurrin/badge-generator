import hljs from "highlight.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(hljs.vuePlugin);
app.mount("#app");
