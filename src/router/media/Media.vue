<template>
  <main>
    <Music />
    <Newsletter />
    <Gallery />
    <Wallpaper />
  </main>
</template>

<script>
import { body_2 } from "@/assets";
import Music from "./sections/Music.vue";
import Gallery from "./sections/Gallery.vue";
import Wallpaper from "./sections/Wallpaper.vue";
import Newsletter from "./sections/Newsletter.vue";

export default {
  name: "Media",
  components: { Music, Newsletter, Gallery, Wallpaper },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${body_2})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
