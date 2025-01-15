<template>
  <li :class="class" data-aos="zoom-in">
    <img class="card-image" :src="src" :alt="alt" />
    <div class="card-overlay"></div>
    <h3 class="card-heading">
      <router-link to="/team" class="card-title">{{ title }}</router-link>
    </h3>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: {
    class: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
