import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SteamView from "../views/SteamView.vue";
import steamImage from "@/assets/steam-background.jpeg";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/feliz-navidad-nacho",
    name: "feliz-navidad-nacho",
    component: SteamView,
    meta: {
      title: "Feliz Navidad Nacho!!!",
      bgImage: steamImage,
    },
    props: { msg: "STEAM te desea FELIZ NAVIDAD!!!" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  if (to.meta?.bgImage) {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundImage = `url(${to.meta.bgImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "#464646";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.backgroundRepeat = "";
    document.body.style.backgroundPosition = "";
    document.body.style.backgroundImage = "";
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
});

export default router;
