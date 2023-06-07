import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
{
    path: "/AppContent",
    name: "AppContent",
    component: () => import("@/views/content/AppContent"),
  },
 {
    path: "/AppHeader",
    name: "AppHeader",
    component: () => import("@/components/AppHeader"),
  }, 
{
    path: "/AppFooter",
    name: "AppFooter",
    component: () => import("@/components/AppFooter"),
  },
{
    path: "/m_AppContent",
    name: "m_AppContent",
    component: () => import("@/views/content/m_AppContent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;