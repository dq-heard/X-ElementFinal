<template>
  <component :is="showHeader ? 'Header' : 'div'" />
  <router-view />
  <router-view name="prefooter" />
  <router-view name="footer" />
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import AOS from "aos";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.path !== "/");

    onMounted(() => {
      AOS.init({
        duration: 800,
      });
    });

    return {
      showHeader,
    };
  },
};
</script>
