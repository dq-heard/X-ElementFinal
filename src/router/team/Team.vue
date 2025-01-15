<template>
  <main>
    <Staff />
    <Roster />
  </main>
</template>

<script>
import { body_4 } from "@/assets";
import Staff from "./sections/Staff.vue";
import Roster from "./sections/Roster.vue";
//   import Support from "./sections/Support.vue";

export default {
  name: "Team",
  components: { Staff, Roster },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${body_4})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
