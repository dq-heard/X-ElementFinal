<template>
  <li class="merch-item">
    <div class="merch-card left has-before" data-aos="fade-right">
      <img
        :src="src1"
        width="86"
        height="81"
        loading="lazy"
        :alt="alt1"
        class="merch-img"
      />
      <h3 class="h3 card-title">{{ title1 }}</h3>
      <Button @click="openModal(src1)" class="modal-btn" text="Click to Zoom" />
    </div>

    <div class="merch-sale" data-aos="fade-up">
      <div class="price">{{ price }}</div>
      <div class="social-wrapper">
        <a href="https://discord.com/invite/WuNtgnB6Hp" class="social-link">
          <ion-icon
            name="logo-discord"
            role="img"
            aria-label="team Discord"
          ></ion-icon>
        </a>
      </div>
    </div>

    <div
      v-if="!isSingle"
      class="merch-card right has-before"
      data-aos="fade-left"
    >
      <img
        :src="src2"
        width="86"
        height="81"
        loading="lazy"
        :alt="alt2"
        class="merch-img"
      />
      <h3 class="h3 card-title">{{ title2 }}</h3>
      <Button @click="openModal(src2)" class="modal-btn" text="Click to Zoom" />
    </div>

    <Modal
      v-if="modalOpen"
      :image="modalImage"
      @closeModal="closeModal"
      :isOpen="modalOpen"
    />
  </li>
</template>

<script>
import Button from "@/components/Button.vue";
import Modal from "./Modal.vue";

export default {
  components: { Button, Modal },
  props: {
    src1: {
      type: String,
      default: "",
    },
    alt1: {
      type: String,
      default: "",
    },
    title1: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    isSingle: {
      type: Boolean,
      default: false,
    },
    src2: {
      type: String,
      default: "",
    },
    alt2: {
      type: String,
      default: "",
    },
    title2: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      modalImage: "",
      modalOpen: false,
    };
  },
  methods: {
    openModal(imageSrc) {
      this.modalImage = imageSrc;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>

<style>
.merch-item:not(.single) {
  margin-block-end: 90px;
}

.merch-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.merch-card::before {
  top: 50%;
  background-image: var(--gradient-1);
  transform: translateY(-50%);
  width: 90%;
  height: 80px;
  z-index: -1;
  opacity: 0.3;
  border-radius: var(--radius-5);
}

.merch-card.left::before {
  right: 0;
  clip-path: var(--clip-path-4);
}

.merch-card.right::before {
  left: 0;
  clip-path: var(--clip-path-6);
}

.merch-card .card-title {
  text-transform: uppercase;
}

.merch-card.left .card-title {
  margin-inline-end: 50px;
  text-align: right;
}

.merch-card.right .card-title {
  margin-inline-start: 50px;
  text-align: left;
}

.merch-card .modal-btn {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 150px;
  height: 34px;
  padding: 6px 20px;
  font-size: var(--fontSize-7);
  text-transform: uppercase;
  border-radius: var(--radius-3);
}

.merch-card.left .modal-btn {
  clip-path: var(--clip-path-5);
}

.merch-card.right .modal-btn {
  clip-path: var(--clip-path-7);
}

.merch-card .merch-img {
  width: 30%;
  border-radius: var(--radius-5);
}

.merch-card.right .merch-img {
  order: 1;
}

.merch-sale {
  margin-block: 50px 30px;
}

.merch-sale :is(.price) {
  text-align: center;
}

.merch-sale .price {
  color: var(--text-white);
  font-size: var(--fontSize-1);
  font-weight: var(--weight-bold);
  line-height: 1;
  margin-block: 5px;
}

.merch-item .social-wrapper {
  justify-content: center;
}

.merch-item .social-link {
  width: 40px;
  height: 40px;
  background-color: var(--bg-purple-alpha-30);
  display: grid;
  place-items: center;
  clip-path: var(--clip-path-8);
  transition: var(--transition-1);
  color: var(--text-white);
  font-size: 2rem;
}

.merch-item .social-link:is(:hover, :focus-visible) {
  color: var(--text-purple);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (max-width: 320px) {
  .merch-card .modal-btn {
    bottom: -35px;
  }
}

@media screen and (min-width: 575px) {
  .merch-card .modal-btn {
    bottom: -10px;
  }

  .merch-card.left .modal-btn {
    left: auto;
    right: -10%;
  }

  .merch-card.right .modal-btn {
    left: 25%;
  }
}

@media screen and (min-width: 768px) {
  .merch-card::before {
    height: 110px;
  }

  .merch-card .modal-btn {
    padding-block: 12px;
    bottom: -20px;
    height: 50px;
  }

  .merch-sale .price {
    font-size: var(--fontSize-2);
  }

  .merch-card .card-title {
    --fontSize-3: 2.8rem;
  }

  .merch-card.left .modal-btn {
    right: -5%;
  }

  .merch-card.right .modal-btn {
    left: 20%;
  }
}

@media screen and (min-width: 992px) {
  .merch-item {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    align-items: center;
  }

  .merch-item.single {
    margin-block-end: 90px;
  }

  .merch-card .modal-btn {
    left: 50%;
    bottom: -40px;
    transform: translateX(-50%);
  }

  .merch-card.right .modal-btn {
    left: 40%;
  }
}

@media screen and (min-width: 1200px) {
  .merch .merch-item {
    gap: 1.5rem;
  }

  .merch-card {
    width: 475px;
  }

  .merch-card .merch-img {
    max-height: 180px;
  }

  .merch-card .modal-btn {
    bottom: -20px;
  }

  .merch .merch-card .modal-btn {
    bottom: -30px;
  }

  .merch-card.right .modal-btn {
    left: 35%;
  }
}
</style>
