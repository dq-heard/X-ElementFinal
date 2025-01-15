<template>
  <section class="section culture" aria-label="our culture">
    <div class="container">
      <p class="section-subtitle">Upholding Our Code</p>

      <h2 class="h2 section-title">
        <span class="span">Integrity</span> and Respect
      </h2>

      <div class="container">
        <div class="text-wrapper">
          <div class="culture-desc">
            <div class="image-wrapper">
              <img
                class="shield-logo"
                :src="Shield"
                alt="X Element shield logo"
              />
              <p>
                X-Element fosters a vibrant community founded with a desire to
                embrace unity and camaraderie, providing a hospitable
                environment to connect while we all celebrate our shared passion
                for gaming. We organize tournaments and events that create
                friendships & unforgettable moments.
              </p>
              <br />
            </div>
            <p class="p1">
              Furthermore, we're proud to have members excelling in their
              collegiate endeavors. They represent our organization with
              dedication and skill, showcasing the incredible talent that
              emerges from our ranks. We support and congratulate their academic
              achievements, combining the pursuit of education with chasing
              e-Sports greatness.
              <br />
            </p>
            <p class="p2">
              We invite you to connect with us and eagerly await interactions
              with fellow gamers, sponsors, and industry professionals as we
              forge our path within this space and inspire a new generation to
              discover their X-Element.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Shield } from "@/assets";

export default {
  name: "Culture",
  data() {
    return {
      Shield,
    };
  },
};
</script>

<style scoped>
.culture .p1,
.culture .p2,
.culture img {
  display: none;
}

.culture .image-wrapper {
  margin-bottom: -4rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 575px) {
  .culture-desc .p2 {
    display: block;
    padding-top: 1.5rem;
  }

  .culture .image-wrapper {
    margin-bottom: -2rem;
  }
}

@media screen and (min-width: 768px) {
  .culture .image-wrapper {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0;
  }

  .culture .shield-logo {
    display: block;
    width: 220px;
  }

  .culture-desc .p1 {
    display: block;
    padding-top: 1.5rem;
  }
}

@media screen and (min-width: 992px) {
  .culture .container {
    max-width: 960px;
  }

  .culture .shield-logo {
    width: 200px;
  }

  .culture .image-wrapper p {
    padding-top: 1.5rem;
  }
}
</style>
