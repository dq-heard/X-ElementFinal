import { createRouter, createWebHistory } from "vue-router";
import Index from "./Index.vue";
import Home from "./home/Home.vue";
import About from "./about/About.vue";
import Media from "./media/Media.vue";
import Gear from "./gear/Gear.vue";
import Team from "./team/Team.vue";
import Privacy from "./legal/Privacy.vue";
import Terms from "./legal/Terms.vue";
import Error from "./error/Error.vue";
import Prefooter from "@/components/Prefooter.vue";
import Footer from "@/components/Footer.vue";

// Fallback value for BASE_URL if process is not defined
const BASE_URL =
  typeof process !== "undefined" && process.env.BASE_URL
    ? process.env.BASE_URL
    : "/";

const routes = [
  {
    path: "/",
    name: "Index",
    components: { default: Index },
  },
  {
    path: "/home",
    name: "Home",
    components: { default: Home, footer: Footer },
    props: { footer: { hideFooterTop: false } },
  },
  {
    path: "/about",
    name: "About",
    components: { default: About, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
  {
    path: "/media",
    name: "Media",
    components: { default: Media, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
  {
    path: "/gear",
    name: "Gear",
    components: { default: Gear, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
  {
    path: "/team",
    name: "Team",
    components: { default: Team, prefooter: Prefooter, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },

  {
    path: "/legal/privacy",
    name: "Privacy",
    components: { default: Privacy, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
  {
    path: "/legal/terms",
    name: "Terms",
    components: { default: Terms, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    components: { default: Error, footer: Footer },
    props: { footer: { hideFooterTop: true } },
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
