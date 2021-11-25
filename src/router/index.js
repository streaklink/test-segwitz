import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
// import store from "./../store";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    // meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const loginKey = sessionStorage.getItem("token");
    if (!loginKey) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    const loginKey = sessionStorage.getItem("token");
    if (loginKey) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  }
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next({ name: "Dashboard" });
//   } else {
//     next();
//   }
// });

export default router;
