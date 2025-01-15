<template>
  <section class="prefooter">
    <div class="section full-footer">
      <div class="container">
        <div class="footer-brand">
          <a href="/home" class="logo">
            <img
              :src="logo"
              class="footer-logo"
              width="150"
              height="150"
              loading="lazy"
              alt="X Element logo"
            />
          </a>

          <div class="footer-wrapper">
            <p class="footer-text">Follow Our Socials!</p>

            <ul class="social-list">
              <li v-for="social in socials" :key="social.name">
                <a :href="social.href" class="social-link">
                  <ion-icon
                    :name="social.icon"
                    role="img"
                    class="md hydrated"
                    :aria-label="social.label"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-list">
          <p class="title footer-list-title has-after">Useful Links</p>

          <ul>
            <li v-for="link in usefulLinks" :key="link.text">
              <a :href="link.href" class="footer-link">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-list">
          <p class="title footer-list-title has-after">Contact Us</p>

          <div
            class="contact-item"
            v-for="contact in contacts"
            :key="contact.label"
          >
            <span class="span">{{ contact.label }}:</span>
            <address v-if="contact.isAddress" class="contact-link">
              {{ contact.value }}
            </address>
            <a v-else :href="contact.href" class="contact-link">{{
              contact.value
            }}</a>
          </div>
        </div>

        <div class="footer-list">
          <p class="title footer-list-title has-after">Newsletter Signup</p>

          <form action="#" method="get" class="footer-form">
            <input
              type="email"
              name="email_address"
              required
              placeholder="Your E-mail"
              autoComplete="off"
              class="input-field"
            />
            <Button
              type="submit"
              text="Subscribe Now"
              class="btn"
              data-btn=""
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
import logo from "@/assets/logo.png";

export default {
  name: "Prefooter",
  components: {
    Button,
  },
  data() {
    return {
      logo,
      socials: [
        {
          name: "facebook",
          href: "https://www.facebook.com/groups/1176119786245217/?ref=share",
          icon: "logo-facebook",
          label: "logo facebook",
        },
        {
          name: "tiktok",
          href: "https://www.tiktok.com/@xelementgaming",
          icon: "logo-tiktok",
          label: "logo tiktok",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/x_elementgaming/",
          icon: "logo-instagram",
          label: "logo instagram",
        },
        {
          name: "youtube",
          href: "https://www.youtube.com/channel/UCG9KpfH_p__Dacvsxd00Dzg",
          icon: "logo-youtube",
          label: "logo youtube",
        },
      ],
      usefulLinks: [
        {
          text: "Member's Agreement",
          href: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/membership_agrement_2.1%20(2)%20(3).pdf",
        },
        {
          text: "Non-Discrimination",
          href: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/NON-DISCRIMINATION_AGREEMENT-2.1%20(7)%20(2)%20(1).pdf",
        },
        {
          text: "Responsibilities",
          href: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/Parents_Agreement-_X_Element-2.1%20(1)%20(1).pdf",
        },
        {
          text: "Privacy Policy",
          href: "/legal/privacy",
        },
        {
          text: "Terms and Conditions",
          href: "/legal/terms",
        },
      ],
      contacts: [
        {
          label: "Location",
          value: "Junction City, KS 66441",
          isAddress: true,
        },
        {
          label: "Join Us",
          value: "officialxelement@gmail.com",
          href: "mailto:officialxelement@gmail.com",
          isAddress: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.full-footer .container {
  display: grid;
  gap: 35px;
  width: 50%;
}

.full-footer .footer-brand {
  margin: 0;
}

.full-footer .footer-logo {
  display: block;
  margin-top: -1rem;
  padding-bottom: 1rem;
}

.full-footer .footer-text {
  display: none;
}

.footer-wrapper {
  padding-bottom: 1.5rem;
}

.footer-list {
  padding-bottom: 3rem;
}

.input-field::placeholder {
  color: var(--text-gainsboro);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 575px) {
  .full-footer .container {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  .full-footer .footer-brand {
    display: block;
  }

  .full-footer .footer-text {
    display: block;
    margin-top: -0.1rem;
  }
}

@media screen and (min-width: 768px) {
  .full-footer {
    padding-top: 8rem;
  }
}

@media screen and (min-width: 992px) {
  .full-footer .container {
    grid-template-columns: repeat(4, 1fr);
  }

  .full-footer {
    padding-bottom: 0;
  }

  .full-footer .footer-brand {
    margin-top: -3rem;
  }
}
</style>
