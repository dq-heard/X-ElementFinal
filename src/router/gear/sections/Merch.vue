<template>
  <section class="section merch" aria-label="team apparel">
    <div class="container">
      <p class="section-subtitle">Next Level Apparel</p>
      <h2 class="h2 section-title">
        <span class="span">Official</span> Uniforms
      </h2>
      <p class="section-text">
        We offer merch that allows you to proudly showcase your dedication to
        the X-Element brand. Show your support with our range of high-quality
        apparel, designed for both comfort & style.
        <br />
        <br />
        To purchase an item, visit our Team Discord and leave a message in the
        "Buy Merch" channel.
      </p>
      <ol class="merch-list">
        <Item
          :src1="BoldHoodie"
          alt1="X Element Black Hoodie with Pink Accent Color"
          title1="Bold Hoodie"
          price="$66.00"
          :src2="WiseHoodie"
          alt2="X Element Black Hoodie with Purple Accent Color"
          title2="Wise Hoodie"
        />
        <Item
          :src1="BoldJersey"
          alt1="X Element Black Jersey with Pink Accent Color"
          title1="Bold Jersey"
          price="$56.00"
          :src2="WiseJersey"
          alt2="X Element Black Jersey with Purple Accent Color"
          title2="Wise Jersey"
        />
        <Item
          :src1="BoldSweats"
          alt1="X Element Black Sweats with Pink Accent Color"
          title1="Bold Sweats"
          price="$60.00"
          :src2="WiseSweats"
          alt2="X Element Black Sweats with Purple Accent Color"
          title2="Wise Sweats"
        />
      </ol>
    </div>
  </section>
</template>

<script>
import Item from "@/components/Item.vue";
import {
  BoldHoodie,
  WiseHoodie,
  BoldJersey,
  WiseJersey,
  BoldSweats,
  WiseSweats,
} from "@/assets";

export default {
  components: { Item },
  data() {
    return {
      BoldHoodie,
      WiseHoodie,
      BoldJersey,
      WiseJersey,
      BoldSweats,
      WiseSweats,
    };
  },
};
</script>

<style>
.merch {
  padding-top: 16rem;
  padding-bottom: 0;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 992px) {
  .apparel {
    padding-bottom: 0;
  }
}

@media screen and (min-width: 1200px) {
  .merch .merch-item {
    gap: 1.5rem;
  }
}
</style>
