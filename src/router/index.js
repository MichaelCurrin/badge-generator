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
    path: "/repo",
    name: "Repo",
    component: () => import("../views/RepoBadges.vue"),
  },
  {
    path: "/generic",
    name: "Generic",
    component: () => import("../views/GenericBadges.vue"),
  },
  {
    path: "/package",
    name: "Package",
    component: () => import("../views/PackageBadges.vue"),
  },
  {
    path: "/images",
    name: "Images",
    component: () => import("../views/Images.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: () => import("../views/Catalogue.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
