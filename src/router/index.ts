import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "@/pages/index/app.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: App,
    meta: {
      requiresAuth: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
