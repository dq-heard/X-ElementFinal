<template>
  <main>
    <Identity />
    <Elements />
    <Culture />
    <Connect />
  </main>
</template>

<script>
import { body_1 } from "@/assets";
import Identity from "./sections/Identity.vue";
import Elements from "./sections/Elements.vue";
import Culture from "./sections/Culture.vue";
import Connect from "./sections/Connect.vue";

export default {
  name: "About",
  components: { Identity, Elements, Culture, Connect },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${body_1})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
