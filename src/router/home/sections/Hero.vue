<template>
  <section class="section hero" aria-label="welcome to x element">
    <div class="container">
      <h2 class="h2 section-title">
        Welcome to <span class="span">X-Element</span>
      </h2>

      <p class="section-text">
        We are a Lifestyle, Sports, and Media company that's growing daily. What
        are you waiting for? Embrace your element with us.
      </p>

      <div class="banner">
        <div class="neon-border-top"></div>
        <img :src="Welcome" alt="X Element Banner" />
        <div class="neon-border-bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Welcome } from "@/assets";

export default {
  name: "Hero",
  data() {
    return {
      Welcome,
    };
  },
};
</script>

<style>
.hero {
  padding-top: 14rem;
}

.banner {
  width: 99%;
  margin: 0 auto;
}

.banner img,
.banner .neon-border-top,
.banner .neon-border-bottom {
  width: 99%;
  max-width: 1040px;
}
</style>
