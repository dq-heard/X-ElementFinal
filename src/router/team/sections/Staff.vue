<template>
  <section class="section staff" aria-label="meet the staff">
    <div class="container">
      <p class="section-subtitle">Feel the Spirit</p>

      <h2 class="h2 section-title">Meet Our <span class="span">Core</span></h2>

      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/videoseries?si=7shdlK6SsPPpWXwg&amp;list=PLjZJjTdaS1_JSFXtm2kLX9S-ftCWq8PFP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h3 data-aos="fade-right">The Spirit Squad:</h3>
      <ol class="squad">
        <Spirit
          v-for="(staff, index) in STAFF_MEMBERS"
          :key="index"
          :title="staff.title + ':'"
          :members="staff.members"
        />
      </ol>
    </div>
  </section>
</template>

<script>
import Spirit from "./Spirit.vue";

export default {
  components: {
    Spirit,
  },
  data() {
    return {
      STAFF_MEMBERS: [
        {
          title: "Chief Executive Officer",
          members: [
            { name: "King Aaron", url: "https://www.aaronsheltrown.com/" },
          ],
        },
        {
          title: "Chief Marketing Officer",
          members: [{ name: "BigBigSpoon", url: "https://bigbigspoon.com/" }],
        },
        {
          title: "Paintball Coach",
          members: [
            { name: "Texn", url: "https://www.tiktok.com/@xelement.paintball" },
          ],
        },
        {
          title: "Apex Legends Coach",
          members: [
            { name: "Philosophyz", url: "https://linktr.ee/xphilosophyz" },
          ],
        },
        {
          title: "Call of Duty Asst. Coaches",
          members: [
            {
              name: "Mike Sensei",
              url: "https://otakunewz.wixsite.com/mikesensei",
            },
            { name: "& UberDaryl" },
          ],
        },
        {
          title: "Team Data Analysts",
          members: [
            { name: "Jerm6760", url: "https://www.twitch.tv/xjerm6760" },
            { name: "&" },
            { name: "ADHD", url: "https://www.twitch.tv/adhd_sc" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.staff {
  padding-top: 14rem;
  overflow-x: hidden;
  text-align: center;
}

.staff iframe,
.roster iframe {
  padding-top: 2rem;
  padding-bottom: 0.5rem;
}

.staff h3 {
  text-align: start;
  padding-top: 3rem;
}

.squad {
  margin: 0;
  padding: 0;
  display: inline-block;
  white-space: nowrap;
  animation: floatText 35s infinite linear;
  padding-left: 105%; /*Initial offset*/
  padding-right: 5%;
}

.squad li {
  display: inline-flex;
  margin: 0 10px;
  align-items: center;
}

.squad p {
  margin: 8px;
}

.squad ul li {
  margin: 0;
  margin-right: 5px;
}

.squad::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

.squad:hover {
  animation-play-state: paused;
}

@keyframes floatText {
  to {
    transform: translateX(-100%);
  }
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/
@media screen and (max-width: 375px) {
  .staff iframe,
  .roster iframe {
    width: 275px;
  }
}

@media screen and (min-width: 575px) {
  .staff iframe,
  .roster iframe {
    width: 480px;
    height: 360px;
  }
}

@media screen and (min-width: 992px) {
  .staff iframe,
  .roster iframe {
    width: 720px;
    height: 480px;
  }

  .squad {
    padding-left: 115%;
    padding-right: 20%;
  }
}

@media screen and (min-width: 1200px) {
  .squad {
    padding-left: 130%;
    padding-right: 20%;
  }
}
</style>
