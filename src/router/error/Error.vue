<template>
  <section class="error" aria-label="page not found">
    <div class="container">
      <p class="section-subtitle">Page Not Found</p>

      <h1 class="h1 title cta-title">404</h1>

      <div class="flex-container teams">
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="loop"
            alt="Multiple saluting astronauts in front of X Element logo"
          />
        </div>

        <p class="section-text">
          Sorry, the page you are looking for could not be found.
          <Button href="/home" text="Head Back Home" />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { error, loop } from "@/assets";
import Button from "@/components/Button.vue";

export default {
  name: "Error",
  components: {
    Button,
  },
  data() {
    return {
      loop,
    };
  },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${error})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>

<style>
.error {
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 91vh;
}

.error .btn {
  margin: 3rem auto;
}

.error .image-wrapper .card-image {
  width: 90%;
  margin: 0 auto;
}

@media screen and (max-width: 767.98px) {
  .error .flex-container {
    max-width: 385px;
  }

  .error .teams {
    margin: 0 auto;
  }
}

@media screen and (min-width: 768px) {
  .error .flex-container {
    display: flex;
    gap: 0;
    padding: 0 5rem;
    max-width: 700px;
  }

  .error .section-text {
    padding-top: 4rem;
  }
}
</style>
