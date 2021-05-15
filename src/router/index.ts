import Home from "@/views/Home.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// Use named chunks for code splitting for smaller files.
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repo",
    name: "Repo",
    component: () =>
      import(/* webpackChunkName: "repo" */ "@/views/RepoBadges.vue"),
  },
  {
    path: "/generic",
    name: "Generic",
    component: () =>
      import(/* webpackChunkName: "generic" */ "@/views/GenericBadges.vue"),
  },
  {
    path: "/package",
    name: "Package",
    component: () =>
      import(/* webpackChunkName: "package" */ "@/views/PackageBadges.vue"),
  },
  {
    path: "/image",
    name: "Image",
    component: () =>
      import(/* webpackChunkName: "image" */ "@/views/Image.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: () =>
      import(/* webpackChunkName: "catalogue" */ "@/views/Catalogue.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
