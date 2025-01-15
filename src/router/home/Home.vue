<template>
  <main>
    <Hero />
    <Sponsor />
    <CTA />
    <Roles />
  </main>
</template>

<script>
import { body_0 } from "@/assets";
import Hero from "./sections/Hero.vue";
import Sponsor from "./sections/Sponsor.vue";
import CTA from "./sections/CTA.vue";
import Roles from "./sections/Roles.vue";

export default {
  name: "Home",
  components: { Hero, Sponsor, CTA, Roles },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${body_0})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
