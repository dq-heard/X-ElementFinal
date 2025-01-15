<template>
  <section class="section identity" aria-label="mission and identity">
    <div class="container">
      <p class="section-subtitle">What Is X-Element?</p>

      <h2 class="h2 section-title">
        Mission and <span class="span">Identity</span>
      </h2>

      <div class="mission">
        <article>
          <div class="image-wrapper">
            <img class="logo" :src="logo" alt="X Element logo" />

            <p class="logo-text">
              The X-Element logo symbolizes the universal challenge that every
              one of us faces in our lives. The 'X' serves as a metaphor for the
              core issue that each of us must confront: "How do I carve my niche
              in this landscape?" The 'E' represents us as individuals and the
              power we possess as a group by tying our love for gaming into our
              professional aspirations, likening those skills to distinct
              elements. When they unite, they collectively decode this riddle,
              paving the way to a respected and renowned presence in e-Sports.
            </p>
          </div>

          <p class="p1">
            Believing in our dreams is the cornerstone of how we live, and at
            X-Element, we embody this belief by coaching talented athletes to
            become champions. We broadcast our Elements to the world,
            encouraging everyone to believe in themselves, because we do.
            X-Element is not just about creating winners, but about fostering a
            culture of success and self-belief.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { logo } from "@/assets";

export default {
  name: "Identity",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.identity {
  padding-top: 16rem;
  text-align: center;
}

.mission .logo,
.mission .p1 {
  display: none;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 768px) {
  .mission .image-wrapper {
    display: flex;
    gap: 1.5rem;
  }

  .mission .logo {
    display: block;
    width: 270px;
  }

  .mission .p1 {
    display: block;
    padding-top: 1.5rem;
  }
}

@media screen and (min-width: 992px) {
  .identity .container {
    max-width: 940px;
  }

  .mission .logo-text {
    margin-top: 5rem;
  }

  .mission .logo {
    width: 240px;
  }

  .mission .p1 {
    padding: 0;
    margin-top: -0.5rem;
  }
}
</style>
