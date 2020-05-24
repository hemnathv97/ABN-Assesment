import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/show",
    name: "Show",
    component: () =>
      import("../views/ShowDetails.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import("../views/Search.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
