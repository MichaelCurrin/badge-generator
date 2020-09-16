import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repo-badges",
    name: "Repo Badges",
    component: () => import("../views/RepoBadges.vue"),
  },
  {
    path: "/images",
    name: "Images",
    component: () => import("../views/Images.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
