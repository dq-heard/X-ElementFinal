<template>
  <section class="section elements" aria-label="choose your element">
    <div class="container">
      <p class="section-subtitle">Choose Your Element</p>

      <h2 class="h2 section-title">
        Embrace Your <span class="span">Nature</span>
      </h2>

      <div class="natures">
        <div class="top-half">
          <div class="text-wrapper">
            <p class="section-subtitle" data-aos="fade-right">Our Squads:</p>

            <p class="team-nature fire" data-aos="fade-right">
              Our competitive players are represented by the element of
              <span> Fire. </span>
              These are the members who have earned the right to be on our team
              by forging their talents in the heat of online play.
            </p>

            <p class="team-nature wind" data-aos="fade-right">
              Content creators and our other non-competitive streamers are
              represented by the element of <span>Wind.</span> They announce our
              team's presence to the world and spread word of our achievements
              within the e-Sports landscape.
            </p>

            <p class="team-nature earth" data-aos="fade-right">
              <span>Earth</span> as an element represents our moderators, both
              on Discord and elsewhere. They help solidify our culture and
              ensure everyone has a positive experience while interacting with
              our channels.
            </p>
          </div>

          <div class="image-wrapper">
            <img
              class="card-image"
              :src="Astronauts"
              alt="X Element astronauts gathered around logo"
            />
          </div>
        </div>

        <div class="bottom-half">
          <p class="team-nature water" data-aos="fade-right">
            The element of <span>Water</span> represents our friends and allies
            who see the vision and want to be a part of the community. Life
            can’t be sustained without it and we make sure to appreciate our
            supporters that keep the community growing with their enthusiasm and
            commitment.
          </p>

          <p class="team-nature spirit" data-aos="fade-right">
            At the core of our team is the <span>Spirit</span>, which represents
            our leadership and support staff. This includes our CEO, co-CEO, and
            other background members who help our players succeed or work behind
            the scenes for the brand.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Astronauts } from "@/assets";

export default {
  name: "Elements",
  data() {
    return {
      Astronauts,
    };
  },
};
</script>

<style scoped>
.natures .section-subtitle {
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  text-align: left;
}

.team-nature {
  margin-bottom: 2rem;
}

.team-nature.spirit {
  margin-bottom: 0;
}

.team-nature span {
  display: inline;
  color: var(--text-champagne-pink);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
}

.natures .image-wrapper {
  display: none;
}

@media screen and (min-width: 768px) {
  .natures {
    max-width: 700px;
    margin: 0 auto;
  }

  .natures .top-half {
    display: flex;
    gap: 1.5rem;
  }

  .natures .text-wrapper {
    width: 100%;
  }

  .natures .image-wrapper {
    display: block;
    width: 90%;
    padding-top: 4rem;
  }

  .natures .card-image {
    max-height: 430px;
  }
}
</style>
