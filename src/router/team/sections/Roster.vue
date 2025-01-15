<template>
  <section class="section roster" aria-label="team roster breakdown">
    <div class="container">
      <p class="section-subtitle">Preparing for Takeoff</p>

      <h2 class="h2 section-title">
        <span class="span">Current</span> Rosters
      </h2>
    </div>

    <div class="roster-wrapper container">
      <div class="teams apex">
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="XE_Apex"
            alt="Apex Legends tryout graphic"
          />
        </div>

        <div class="text-wrapper">
          <p class="roster-desc">
            <a class="member-link" href="https://www.twitch.tv/liipo_">Lipo</a>,
            <a class="member-link" href="https://www.twitch.tv/xelnaughtyy">
              Naughty</a
            >, &
            <a class="member-link" href="https://www.twitch.tv/blu3chr0n1c">
              Blu3Chr0n1c</a
            >, a recently established team in Apex Legends, have successfully
            qualified for the third round of the ALGS (Apex Legends Global
            Series).
            <span class="span1">
              For more about the Apex Team, head over to the Official X-Element
              Discord. For inquiries or bookings, contact Philosophyz
              <Button
                href="https://discord.com/invite/WuNtgnB6Hp"
                text="Join Our Discord"
              />
            </span>
          </p>
        </div>
      </div>
      <div class="neon-border-bottom"></div>
    </div>

    <div class="roster-wrapper container">
      <div class="teams fortnite">
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="XE_Fortnite"
            alt="Fortnite Tryout graphic"
          />
        </div>

        <div class="text-wrapper">
          <p class="roster-desc">
            Competing in e-Sports for six years, Jeralz has excelled in iRacing
            with substantial earnings and made it to the third round of the
            Fortnite Championship Series (FNCS).
            <span class="span1">
              Learn more about Jeralz by following his socials.
            </span>
          </p>
          <ul class="social-list">
            <li>
              <a href="https://www.twitch.tv/jeralz_" class="social-link">
                <ion-icon name="logo-twitch"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com/@jeralz_" class="social-link">
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/jeralz_fr" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/@Jeralz1" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="neon-border-bottom"></div>
    </div>

    <div class="roster-wrapper container">
      <div class="teams warzone">
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="XE_Warzone"
            alt="Call of Duty Warzone graphic"
          />
        </div>

        <div class="text-wrapper">
          <p class="roster-desc">
            Under the leadership of former semi-pro player FaZeBella, our Call
            of Duty team has reached the second round of the CDL (Call of Duty
            League).
            <span class="span1">
              For more about the Warzone Team, head over to the Official
              X-Element Discord. For inquiries or bookings, contact Bella.
              <Button
                href="https://discord.com/invite/WuNtgnB6Hp"
                text="Join Our Discord"
              />
            </span>
          </p>
        </div>
      </div>
      <div class="neon-border-bottom"></div>
    </div>

    <div class="roster-wrapper container">
      <div class="teams paintball">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/8gKoF6ZUyt0?si=5ClMyB2ToImyJY5T"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="text-wrapper">
          <p class="roster-desc">
            The X-Element Paintball Team is a skilled, competitive group defined
            by its strategic gameplay and camaraderie. Led by Paintball Coach
            Texn, we stand tall in any arena.
            <span class="span1">
              For more about the Paintball Team, head over to the Official
              X-Element Discord. For inquiries or bookings, contact Texn.
              <Button
                href="https://discord.com/invite/WuNtgnB6Hp"
                text="Join Our Discord"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import { XE_Apex, XE_Fortnite, XE_Warzone } from "@/assets";

export default {
  components: {
    Button,
  },
  data() {
    return {
      XE_Apex,
      XE_Fortnite,
      XE_Warzone,
    };
  },
};
</script>

<style>
.teams {
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.member-link {
  display: inline;
}

.roster .card-image {
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.roster span .btn {
  margin: 1.5rem auto 0;
}

.span1 {
  padding-top: 2rem;
}

.text-wrapper .social-list {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.teams.paintball {
  display: block;
}

.teams .text-wrapper,
.teams.paintball .text-wrapper {
  text-align: center;
  margin: 2rem auto;
}

.teams.paintball .video-wrapper {
  text-align: center;
}

/*-----------------------------------*\
    #MEDIA QUERIES
\*-----------------------------------*/
@media screen and (max-width: 375px) {
  .teams.paintball iframe {
    width: 250px;
  }
}

@media screen and (min-width: 768px) {
  .roster-desc .span2 {
    display: block;
    padding-top: 0.5rem;
  }

  .teams .text-wrapper,
  .teams.paintball .text-wrapper {
    width: 95%;
  }
}

@media screen and (min-width: 992px) {
  .teams {
    display: flex;
    gap: 1.5rem;
    margin: 2rem auto 0;
    padding: 0 1.3rem;
  }

  .teams .image-wrapper {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }

  .fortnite .image-wrapper {
    order: 1;
  }

  .teams.paintball .text-wrapper {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .fortnite .text-wrapper {
    padding-top: 6rem;
  }

  .apex .text-wrapper,
  .warzone .text-wrapper {
    padding-top: 3rem;
  }

  .teams.paintball .text-wrapper {
    padding-top: 0;
  }
}
</style>
