<template>
  <section class="section apparel" aria-label="more team apparel">
    <div class="container">
      <p class="section-subtitle">Having Trouble Choosing?</p>
      <h2 class="h2 section-title">
        <span class="span">Upgrade</span> Your Wardrobe
      </h2>
      <p class="section-text">
        Get all three (the Hoodie, Jersey, and Sweats altogether) in one
        package.
      </p>
      <ol class="merch-list">
        <Item
          :src1="BoldUniform"
          alt1="X Element Full Black Uniform with Pink Accent Color"
          title1="Bold Uniform"
          price="$182.00"
          :src2="WiseUniform"
          alt2="X Element Full Black Uniform with Purple Accent Color"
          title2="Wise Uniform"
        />
        <Item
          :src1="PoloShirt"
          alt1="X Element Black Polo Shirt"
          title1="Staff Polo"
          price="$56.00"
          :isSingle="true"
        />
      </ol>
    </div>
  </section>
</template>

<script>
import Item from "@/components/Item.vue";
import { BoldUniform, WiseUniform, PoloShirt } from "@/assets";

export default {
  components: { Item },
  data() {
    return {
      BoldUniform,
      WiseUniform,
      PoloShirt,
    };
  },
};
</script>

<style>
.apparel {
  padding-top: 0;
  padding-block-end: 0 !important;
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
  .apparel .merch-item:first-of-type {
    gap: 1rem;
  }
}
</style>
