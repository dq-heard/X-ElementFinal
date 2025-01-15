<template>
  <footer class="footer">
    <div :class="footerTopClass">
      <div class="container">
        <div class="footer-brand">
          <a href="/home" class="logo">
            <img
              :src="logo"
              class="footer-logo"
              width="150"
              height="150"
              loading="lazy"
              alt="X-Element logo"
            />
          </a>

          <div class="footer-wrapper">
            <p class="footer-text">Check Out Our Socials!</p>

            <ul class="social-list">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.href" class="social-link">
                  <ion-icon :name="social.icon"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="twitch">
          <iframe
            src="https://player.twitch.tv/xelementgaming"
            height="180"
            width="320"
            allowfullscreen
          ></iframe>

          <p>Make sure to keep up with our official Twitch channel too!</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          © 2024 - {{ new Date().getFullYear() }}&nbsp;X-Element LLC - All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "@/assets/logo.png";

export default {
  name: "Footer",
  props: {
    hideFooterTop: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      logo,
      socials: [
        {
          name: "facebook",
          href: "https://www.facebook.com/groups/1176119786245217/?ref=share",
          icon: "logo-facebook",
        },
        {
          name: "tiktok",
          href: "https://www.tiktok.com/@xelementgaming",
          icon: "logo-tiktok",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/x_elementgaming/",
          icon: "logo-instagram",
        },
        {
          name: "youtube",
          href: "https://www.youtube.com/channel/UCG9KpfH_p__Dacvsxd00Dzg",
          icon: "logo-youtube",
        },
      ],
    };
  },
  computed: {
    footerTopClass() {
      return this.hideFooterTop ? "footer-top hide" : "section footer-top";
    },
  },
};
</script>

<style>
.footer-top {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer-top.hide {
  display: none;
}

.footer-top .container {
  display: grid;
  gap: 35px;
}

.footer-brand,
.twitch {
  margin: 0 auto;
}

.twitch {
  text-align: center;
  max-width: 375px;
}

.footer-logo {
  display: none;
}

.footer-text {
  margin-block: 15px;
}

.social-list {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: var(--bg-purple-alpha-30);
  display: grid;
  place-items: center;
  clip-path: var(--clip-path-8);
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus-visible) {
  background-color: var(--bg-purple);
  transform: translateY(-2px);
}

.footer-list-title {
  font-size: var(--fontSize-3);
  font-weight: var(--weight-semibold);
  line-height: 1;
  position: relative;
  padding-block-end: 10px;
  margin-block-end: 20px;
  max-width: max-content;
}

.footer-list-title::after {
  bottom: 0;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: var(--bg-purple);
}

.footer-link {
  padding-block: 5px;
  color: var(--text-white);
  transition: var(--transition-1);
}

.input-field {
  background-color: var(--bg-darker-purple);
  color: var(--text-white);
  font-size: var(--fontSize-5);
  padding: 18px 12px;
  box-shadow: var(--shadow);
  border: 2px solid var(--border-purple-alpha-30);
  margin-block-end: 15px;
  outline: none;
}

.input-field::placeholder {
  color: var(--text-white);
}

.footer-bottom {
  clip-path: var(--clip-path-9);
  background-color: var(--bg-darker-purple);
}

.copyright {
  font-family: "Oxanium", cursive;
  padding: 30px 20px;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (max-width: 375px) {
  .footer-brand {
    justify-content: center;
  }
}

@media screen and (min-width: 575px) {
  .footer-brand {
    display: flex;
    justify-content: space-evenly;
    /* gap: 5%; */
    padding-top: 2rem;
  }

  .footer-logo {
    display: block;
    width: 205px;
    height: auto;
    margin-top: -4rem;
  }

  .footer-text {
    margin-top: 3rem;
  }
}

@media screen and (min-width: 992px) {
  .footer-top .container {
    display: flex;
    align-items: center;
    gap: 0;
  }

  .footer-brand {
    padding-top: 0;
    margin-top: -2rem;
    gap: 10%;
  }
}
</style>
