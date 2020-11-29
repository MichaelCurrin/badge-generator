import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/image",
    name: "Image",
    component: () => import("../views/Image.vue"),
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: () => import("../views/Catalogue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
