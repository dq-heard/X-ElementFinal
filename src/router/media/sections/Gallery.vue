<template>
  <section class="section gallery" aria-hidden="true">
    <div class="container">
      <p class="section-subtitle">Discover New Heights</p>

      <h2 class="h2 section-title">
        <span class="span">Elevate</span> Your Game
      </h2>

      <p class="section-text">
        Are you ready to rise to the top and carve your path to eternal glory?
        X-Element is your ticket to greatness. Join our ranks and unlock your
        true potential. The time is now!
        <Button
          href="https://discord.com/invite/WuNtgnB6Hp"
          text="Join Our Team"
        />
      </p>
    </div>
    <div class="scroll-container">
      <img :src="img" alt="Cinque Terre" />
      <img :src="img2" alt="Forest" />
      <img :src="img3" alt="Northern Lights" />
      <img :src="img4" alt="Mountains" />
      <img :src="img5" alt="Cinque Terre" />
      <img :src="img6" alt="Forest" />
      <img :src="img7" alt="Northern Lights" />
      <img :src="img8" alt="Mountains" />
      <img :src="img9" alt="Cinque Terre" />
      <img :src="img10" alt="Forest" />
      <img :src="img11" alt="Northern Lights" />
      <img :src="img12" alt="Mountains" />
      <img :src="img13" alt="Cinque Terre" />
      <img :src="img14" alt="Forest" />
      <img :src="img15" alt="Northern Lights" />
      <img :src="img16" alt="Mountains" />
    </div>
  </section>
</template>

<script>
import {
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
} from "@/assets";
import Button from "@/components/Button.vue";

export default {
  name: "Gallery",
  components: {
    Button,
  },
  data() {
    return {
      img,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    };
  },
};
</script>

<style scoped>
.gallery .section-text {
  margin-block-end: 0;
}
.gallery .btn {
  margin: 3rem auto;
}

.scroll-container {
  background-color: var(--bg-purple-alpha-30);
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 10px;
}

.scroll-container img {
  padding: 10px;
  display: inline;
  max-height: 420px;
}
</style>
