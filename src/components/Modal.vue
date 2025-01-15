<template>
  <section :class="isOpen ? 'display-block' : 'display-none'">
    <div id="modal" class="modal" @click="closeModal">
      <button @click="closeModal" aria-label="Close" class="close">×</button>
      <img class="modal-content" id="modal-image" :src="image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 50% auto;
  padding: 20px;
  border: 1px solid var(--text-pink);
  width: 80%;
  border-radius: var(--radius-5);
}

.display-none {
  display: none;
}

.display-block {
  display: block;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 575px) {
  .modal-content {
    margin: 15% auto;
  }
}

@media screen and (min-width: 992px) {
  .modal-content {
    margin: 0 auto;
    width: 60%;
  }
}

@media screen and (min-width: 1200px) {
  .modal-content {
    margin: 6% auto;
  }
}
</style>
