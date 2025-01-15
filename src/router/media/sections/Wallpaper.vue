<template>
  <section
    class="section wallpapers"
    aria-label="Wallpapers for Mobile/Desktop"
  >
    <div class="container">
      <p class="section-subtitle">Show Your Pride With</p>

      <h2 class="h2 section-title">
        Exclusive <span class="span">Wallpapers</span>
      </h2>

      <ul class="mobile-list">
        <li data-aos="zoom-in">
          <div class="preview-card">
            <figure
              class="card-banner img-holder"
              style="width: 210px; height: 300px"
            >
              <img
                :src="preview"
                width="210"
                height="300"
                loading="lazy"
                alt="Innovative Business All Over The World."
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <Button
                :href="file"
                class="card-tag"
                text="Download"
                download
              ></Button>
            </div>
          </div>
        </li>

        <li data-aos="zoom-in">
          <div class="preview-card">
            <figure
              class="card-banner img-holder"
              style="width: 300px; height: 300px"
            >
              <img
                :src="preview5"
                width="300"
                height="300"
                loading="lazy"
                alt="How To Start Initiating An Startup In Few Days."
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <Button
                :href="file5"
                class="card-tag"
                text="Download"
                download
              ></Button>
            </div>
          </div>
        </li>
      </ul>

      <ul class="desktop-list">
        <li data-aos="zoom-in">
          <div class="preview-card">
            <figure
              class="card-banner img-holder"
              style="width: 300px; height: 212px"
            >
              <img
                :src="preview2"
                width="300"
                height="212"
                loading="lazy"
                alt="How To Start Initiating An Startup In Few Days."
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <Button
                :href="file2"
                class="card-tag"
                text="Download"
                download
              ></Button>
            </div>
          </div>
        </li>

        <li data-aos="zoom-in">
          <div class="preview-card">
            <figure
              class="card-banner img-holder"
              style="width: 300px; height: 212px"
            >
              <img
                :src="preview3"
                width="300"
                height="212"
                loading="lazy"
                alt="How To Start Initiating An Startup In Few Days."
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <Button
                :href="file3"
                class="card-tag"
                text="Download"
                download
              ></Button>
            </div>
          </div>
        </li>

        <li data-aos="zoom-in">
          <div class="preview-card">
            <figure
              class="card-banner img-holder"
              style="width: 300px; height: 212px"
            >
              <img
                :src="preview4"
                width="300"
                height="212"
                loading="lazy"
                alt="How To Start Initiating An Startup In Few Days."
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <Button
                :href="file4"
                class="card-tag"
                text="Download"
                download
              ></Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {
  preview,
  preview2,
  preview3,
  preview4,
  preview5,
  file,
  file2,
  file3,
  file4,
  file5,
} from "@/assets";
import Button from "@/components/Button.vue";

export default {
  name: "Wallpaper",
  components: {
    Button,
  },
  data() {
    return {
      preview,
      preview2,
      preview3,
      preview4,
      preview5,
      file,
      file2,
      file3,
      file4,
      file5,
    };
  },
};
</script>

<style scoped>
.mobile-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  gap: 0;
}

.desktop-list {
  display: none;
}

.preview-card .card-content {
  position: relative;
  padding: 30px;
}

.card-tag.btn {
  position: absolute;
  bottom: 100%;
  left: 0;
  font-size: var(--fontSize-8);
  text-transform: uppercase;
  min-width: 108px;
  height: 30px;
  line-height: 32px;
  padding-inline: 20px;
}

@media screen and (min-width: 575px) {
  .mobile-list {
    flex-direction: row;
    gap: 30px;
  }
}

@media screen and (min-width: 992px) {
  .desktop-list {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
}
</style>
