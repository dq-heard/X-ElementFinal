<template>
  <section class="section roles" aria-label="we are recruiting">
    <div class="container">
      <p class="section-subtitle">Ready to Excel?</p>

      <h2 class="h2 section-title">Know Your <span class="span">Role</span></h2>

      <div class="role-intro">
        <div class="text-wrapper">
          <p>
            Greetings, new recruit! We're seeking skilled, passionate pros to
            join us in various roles. Below, you will find a list of positions
            we currently have available.
            <br />
            <span>
              If you're looking for an exciting opportunity to contribute your
              talents to a dynamic team, we encourage you to apply by sending
              your professional résumé&nbsp;
              <a href="https://www.aaronsheltrown.com/">
                <strong>here.</strong>
              </a>
            </span>
          </p>
        </div>

        <div class="image-wrapper">
          <img
            class="card-image"
            :src="Astromotion"
            alt="Multiple saluting astronauts in front of X Element logo"
          />
        </div>
      </div>

      <div class="role-names">
        <p class="section-subtitle" data-aos="fade-right">
          Available Positions:
        </p>

        <ol class="role-list">
          <Positions
            title="Discord Mod Manager"
            li1="Responsible for managing and organizing the moderation team."
            li2="Ensures a positive and inclusive cultural environment."
            li3="Proven history in community management and conflict resolution is preferred."
            :showDetails="selectedPosition === 'Discord Mod Manager'"
            @more-click="handleMoreClick('Discord Mod Manager')"
          ></Positions>

          <Positions
            title="Social Media Manager"
            li1="Manages our social media presence across various platforms."
            li2="Creates engaging content, schedules posts, and interacts with the community."
            li3="Proficiency in social media management tools and analytics are a plus."
            :showDetails="selectedPosition === 'Social Media Manager'"
            @more-click="handleMoreClick('Social Media Manager')"
          ></Positions>

          <Positions
            title="Recruiting Manager"
            li1="Leads the recruitment process for new team members."
            li2="Identifies talent, conducts interviews, and facilitates onboarding."
            li3="Strong interpersonal skills and a good understanding of the industry are desired."
            :showDetails="selectedPosition === 'Recruiting Manager'"
            @more-click="handleMoreClick('Recruiting Manager')"
          ></Positions>

          <Positions
            title="Content Creation Manager"
            li1="Oversees content creation efforts for our team."
            li2="Coordinates with content creators to develop engaging and high-quality posts."
            li3="Expertise in content creation, video editing, and graphic design is valuable."
            :showDetails="selectedPosition === 'Content Creation Manager'"
            @more-click="handleMoreClick('Content Creation Manager')"
          ></Positions>

          <Positions
            title="Head Coaches (Multiple)"
            li1="Provide guidance, leadership, and mentorship to the squad of your respective game."
            li2="Develop training regimens, manage player performances, and optimize team synergy."
            li3="Coaching experience and knowledge of your chosen game's competitive scene are required."
            :showDetails="selectedPosition === 'Head Coaches (Multiple)'"
            @more-click="handleMoreClick('Head Coaches (Multiple)')"
          ></Positions>

          <Positions
            title="Assistant Coaches (Multiple)"
            li1="Supplements the Head Coach's training and strategy implementation."
            li2="Supports players during matches, competitions, and practice sessions."
            li3="Familiarity with gameplay tactics and mechanics of your chosen game are essential."
            :showDetails="selectedPosition === 'Assistant Coaches (Multiple)'"
            @more-click="handleMoreClick('Assistant Coaches (Multiple)')"
          ></Positions>

          <Positions
            title="Team Analysts (Multiple)"
            li1="Monitors squad performances, opponents, and gameplay data/strategies."
            li2="Provides feedback with insights and recommendations for improvements."
            li3="Strong analytical skills and a deep understanding of your chosen game are necessary."
            :showDetails="selectedPosition === 'Team Analysts (Multiple)'"
            @more-click="handleMoreClick('Team Analysts (Multiple)')"
          ></Positions>
        </ol>
      </div>
      <div class="neon-border-bottom"></div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Astromotion } from "@/assets";
import Positions from "@/components/Positions.vue";

export default {
  name: "Roles",
  components: {
    Positions,
  },
  setup() {
    const selectedPosition = ref("Discord Mod Manager");

    const handleMoreClick = (position) => {
      if (selectedPosition.value === position) {
        selectedPosition.value = null;
      } else {
        selectedPosition.value = position;
      }
    };

    return {
      selectedPosition,
      handleMoreClick,
      Astromotion,
    };
  },
};
</script>

<style>
.roles {
  padding-top: var(--section-spacing);
  padding-block-end: 0;
}

.role-intro {
  display: none;
}

.role-names .section-subtitle {
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  text-align: left;
}

.team-role {
  margin-bottom: 2rem;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.role-intro .text-wrapper {
  padding-bottom: 3rem;
}

.role-intro .text-wrapper a {
  display: inline;
}

.role-intro .image-wrapper .card-image {
  width: 250px;
}

.title-section .desc-link {
  color: var(--text-gainsboro);
  font-size: var(--fontSize-7);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
}

.title-section .desc-link {
  max-width: max-content;
  margin-block-start: 5px;
  padding-inline-start: 30px;
  transition: var(--transition-1);
}

.title-section .desc-link::before {
  top: 50%;
  left: 0;
  transform: translateY(-100%);
  width: 20px;
  height: 4px;
  background-color: var(--bg-purple);
}

.title-section .desc-link:is(:hover, :focus-visible) {
  color: var(--text-pink);
}

.role-desc,
.read-less,
.desc-link.show-text {
  display: none;
}

.role-desc.show-text {
  display: block;
}

.role-title {
  font-weight: var(--weight-bold);
}

.role-desc li {
  padding-bottom: 0.5rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 768px) {
  .roles .container {
    width: 768px;
  }

  .role-intro,
  .season-desc .image-wrapper {
    display: flex;
    gap: 1.5rem;
  }

  .role-intro .text-wrapper {
    width: 90%;
    padding-top: 0;
  }

  .role-intro p span {
    padding-top: 1rem;
  }

  .season-desc .image-wrapper p {
    padding-top: 0.5rem;
  }
}

@media screen and (min-width: 992px) {
  .role-intro {
    padding-top: 1rem;
  }
}
</style>
