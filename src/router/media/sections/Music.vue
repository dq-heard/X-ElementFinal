<template>
  <section class="section music" aria-label="X Element Music">
    <div class="container">
      <p class="section-subtitle">Conquer the World</p>

      <h2 class="h2 section-title">
        At <span class="span">Maximum</span> Volume
      </h2>

      <div class="songs">
        <p class="music-desc">
          Boost your gameplay and tap into your element with two of our official
          anthems. Made for both gamers and dreamers alike, these songs are a
          tribute to everyone who rises above the competition & consistently
          pushes boundaries.
          <br />
          <br />
          Get the W; rep the X.
        </p>

        <div class="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/5g1slgr2kmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://www.youtube-nocookie.com/embed/O1ewXQH5XUk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Music",
};
</script>

<style scoped>
.music {
  padding-top: 14rem;
  text-align: center;
}

.music-desc {
  padding-bottom: 2rem;
}

iframe {
  padding-bottom: 0.5rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (max-width: 375px) {
  iframe {
    width: 275px;
  }
}

@media screen and (min-width: 768px) {
  .music .container {
    max-width: 720px;
  }

  .songs .video-wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
