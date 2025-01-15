<template>
  <main>
    <Merch />
    <Apparel />
    <Support />
  </main>
</template>

<script>
import { body_3 } from "@/assets";
import Merch from "./sections/Merch.vue";
import Apparel from "./sections/Apparel.vue";
import Support from "./sections/Support.vue";

export default {
  name: "Gear",
  components: { Merch, Apparel, Support },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${body_3})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
