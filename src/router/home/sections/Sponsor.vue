<template>
  <section class="section sponsor" aria-label="glytch energy sponsor">
    <div class="container">
      <p class="section-subtitle">We've Joined Forces</p>

      <h2 class="h2 section-title">
        With <span class="span">Glytch</span> Energy
      </h2>

      <div class="glytch">
        <div class="image-wrapper">
          <img class="logo" :src="Glytch" alt="Glytch Energy logo" />

          <p class="logo-text">
            We need <strong>YOUR</strong> help to spread the word! ⚡️ Power up
            your game with our exclusive collaboration! Use code: "X-Element"
            for 20% off Glytch products!
            <img class="wordmark" :src="Glytch_1" alt="Glytch Energy logo" />
            <Button :href="buttonHref" text="Glytch Energy" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Glytch, Glytch_1 } from "@/assets";
import Button from "@/components/Button.vue";

export default {
  name: "Sponsor",
  components: {
    Button,
  },
  data() {
    return {
      Glytch,
      Glytch_1,
    };
  },
  props: {
    buttonHref: {
      type: String,
      default: "https://www.glytchenergy.com",
    },
  },
};
</script>

<style>
.sponsor {
  text-align: center;
}

.sponsor .logo {
  display: none;
}

.sponsor .wordmark {
  margin: 1rem auto 0;
  width: 99%;
  max-width: 348px;
}

.sponsor .btn {
  margin: 2rem auto 0;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 768px) {
  .sponsor .image-wrapper {
    display: flex;
    gap: 1.5rem;
  }

  .sponsor .logo {
    display: block;
    width: 380px;
  }

  .sponsor .wordmark {
    display: none;
  }

  .sponsor .logo-text {
    max-width: 400px;
  }
}

@media screen and (min-width: 992px) {
  .sponsor .container {
    max-width: 940px;
  }

  .sponsor .logo-text {
    margin-top: 4rem;
  }

  .sponsor .logo {
    width: 480px;
  }
}
</style>
