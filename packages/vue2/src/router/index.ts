import Vue from "vue";
import VueRouter from "vue-router";
import Energy from "../views/energy/index.vue";
Vue.use(VueRouter);

const baseUrl = "/vue2";

const routes = [
  {
    // 新能源
    path: "/energy",
    name: "Energy",
    component: Energy,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: baseUrl,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Route to:", to);
  console.log("Route from:", from);
  next();
});

export default router;
