<template>
  <li class="team-role" data-aos="fade-right">
    <div class="title-section">
      <p class="role-title">{{ title }}:</p>

      <button v-if="!showDetails" :class="moreButtonClass" @click="onMoreClick">
        <span class="read-more">{{ showDetails ? "" : "More" }}</span>
      </button>
    </div>

    <ul v-if="showDetails">
      <li>{{ li1 }}</li>
      <li>{{ li2 }}</li>
      <li>{{ li3 }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "Positions",
  props: {
    title: {
      type: String,
      required: true,
    },
    showDetails: {
      type: Boolean,
      required: true,
    },
    onMoreClick: {
      type: Function,
      required: true,
    },
    li1: {
      type: String,
      required: true,
    },
    li2: {
      type: String,
      required: true,
    },
    li3: {
      type: String,
      required: true,
    },
  },
  computed: {
    detailsClass() {
      return this.showDetails ? "role-desc show-text" : "role-desc";
    },
    moreButtonClass() {
      return this.showDetails ? "desc-link show-text" : "desc-link has-before";
    },
  },
};
</script>
