<template>
  <div id="index">
    <div class="preloader">
      <img :src="Preloader" alt="preloader" style="height: 60px" />
    </div>

    <header class="landing">
      <video
        muted
        loop
        ref="videoRef"
        class="video-container"
        @loadeddata="hidePreloader"
      >
        <source :src="Video" type="video/mp4" />
      </video>

      <Button href="/home" class="redirect-btn" text="Visit Website" />

      <button
        :class="['switch-btn', isPlaying ? '' : 'slide']"
        @click="togglePlay"
      >
        <span>Play</span>
        <span>Pause</span>
        <span class="switch"></span>
      </button>
    </header>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import Button from "@/components/Button.vue";
import { Preloader, Video } from "@/assets";

export default {
  name: "Index",
  components: {
    Button,
  },
  setup() {
    const videoRef = ref(null);
    const isPlaying = ref(true);

    const hidePreloader = () => {
      const preloader = document.querySelector(".preloader");
      preloader.classList.add("hide-preloader");
    };

    const togglePlay = () => {
      isPlaying.value = !isPlaying.value;
    };

    watch(isPlaying, (newVal) => {
      if (newVal) {
        videoRef.value.play();
      } else {
        videoRef.value.pause();
      }
    });

    onMounted(() => {
      if (isPlaying.value) {
        videoRef.value.play();
      }
    });

    return {
      videoRef,
      isPlaying,
      Preloader,
      Video,
      hidePreloader,
      togglePlay,
    };
  },
};
</script>

<style scoped>
#index {
  --white: #f2f2f2;
  --purple: #d441cd;
  --red: #ff1919;
  --black: #4d4d4d;
  --transition: all 0.3s linear;
  --spacing: 0.25em;
  --radius: 0.5em;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --fixed-width: 620px;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: grid;
  justify-content: center;
  align-items: center;
  visibility: visible;
  z-index: 999;
  transition: var(--transition);
}

.hide-preloader {
  z-index: -999;
  visibility: hidden;
}

.landing {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.video-container {
  position: absolute;
  background: #000;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
  object-fit: cover;
  z-index: -2;
}

.switch-btn {
  position: absolute;
  bottom: 7%;
  left: 7%;
  width: 8em;
  height: 2.4em;
  display: flex;
  background: var(--white);
  border-radius: var(--radius);
  align-items: center;
  justify-content: space-around;
  border: none;
  transition: var(--transition);
}

.switch-btn span {
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--purple);
}

.switch {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--purple);
  border-radius: var(--radius);
  margin: 0;
  display: block;
  transition: var(--transition);
}

.switch-btn:hover > .switch {
  background: var(--red);
}

.switch-btn:hover > span {
  color: var(--red);
}

.slide .switch {
  left: 50%;
}

.landing::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.redirect-btn {
  position: absolute;
  bottom: 7%;
  right: 7%;
}

@media (max-width: 768px) {
  .video-container {
    object-fit: contain;
  }
}

@media (max-width: 575px) {
  .switch-btn {
    display: none;
  }
}
</style>
