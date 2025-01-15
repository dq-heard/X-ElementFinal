<template>
  <section class="section support" aria-label="how to join">
    <div class="container">
      <p class="section-subtitle">How You Can Help</p>

      <h2 class="h2 section-title">
        <span class="span">Support</span> the Team
      </h2>

      <div class="wrapper">
        <div class="donate">
          <div class="img-wrapper">
            <img :src="BeYou" alt="Black Believe in Yourself apparel" />
          </div>

          <p class="reason">
            X-Element is actively seeking financial support to send its teams to
            Kansas City's Midwest Fest for their first LAN performance June 7-9.
            <br />
            <br />
            The required funds for this approximate to $20,000, with a minimum
            of $7,500 needed to ensure our participation.
            <br />
            <br />
            We welcome and appreciate donations of any size, and anyone
            contributing $50 or more will receive special acknowledgments from
            X-Element as a token of gratitude.
            <br />
            <br />
            Your support will play a crucial role this opportunity.
          </p>

          <div class="link-wrapper">
            <div class="neon-border-top"></div>
            <ul class="social-list">
              <li>
                <a href="https://www.paypal.me/XElement" class="social-link">
                  <img :src="paypal" alt="X Element PayPal link" />
                </a>
              </li>

              <li>
                <a
                  href="https://cash.app/$OfficialXElement"
                  class="social-link"
                >
                  <img :src="cashapp" alt="X Element Cash App link" />
                </a>
              </li>

              <li>
                <a href="https://gofund.me/f5cdd8ea" class="social-link">
                  <img :src="gofundme" alt="X Element Go Fund Me link" />
                </a>
              </li>

              <li>
                <a
                  href="https://venmo.com/code?user_id=3750577657873857310"
                  class="social-link"
                >
                  <img :src="venmo" alt="X Element Venmo link" />
                </a>
              </li>
            </ul>
          </div>

          <p class="tiers">
            Donations: <br />
            <span>(Tier 1 = $50)</span> Shirt - 50 Available
            <br />
            <span>(Tier 2 = $100)</span> Hat & Shirt - 25 Available
            <br />
            <span>(Tier 3 = $200)</span> Hoodie, Hat, & Shirt - 25 Available
            <br />
            <br />
            Please allow 8-12 weeks for shipping.
            <br />
            E-mail all personal info for shipping and sizes
            <a href="mailto:officialxelement@gmail.com" class="contact-link">
              here.
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BeYou, paypal, cashapp, venmo, gofundme } from "@/assets";

export default {
  data() {
    return {
      BeYou,
      paypal,
      cashapp,
      gofundme,
      venmo,
    };
  },
};
</script>

<style scoped>
main {
  overflow-x: hidden;
}

.support {
  text-align: center;
}

.support .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.donate img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-5);
}

.donate p {
  margin: 0 auto;
}

.donate .img-wrapper {
  padding-top: 2rem;
  margin: 0 auto;
}

.donate .reason {
  padding-top: 3rem;
  padding-bottom: 5rem;
}

.donate .link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;
}

.donate .link-wrapper {
  max-width: 720px;
}

.donate .tiers {
  margin-bottom: 0;
  padding: 0;
}

.donate span,
.donate a {
  display: inline;
}

.donate .social-list {
  display: flex;
}

.donate .social-link {
  display: grid;
  width: 100%;
  height: 100%;
  background-color: transparent;
  place-items: center;
  transition: var(--transition-1);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/
@media (max-width: 375px) {
  .donate span {
    display: block;
  }
}

@media screen and (min-width: 575px) {
  .donate p,
  .donate .img-wrapper {
    width: 480px;
  }
}

@media screen and (min-width: 992px) {
  .donate .img-wrapper {
    width: 720px;
  }
}
</style>
