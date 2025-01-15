<template>
  <header class="header" data-aos="fade-down">
    <div class="container">
      <RouterLink to="/home" class="logo">
        <img :src="logo" width="60" height="60" alt="X Element Home" />
        <p>X-Element</p>
      </RouterLink>

      <Nav
        :navActive="navActive"
        @close-nav="setNavActive(false)"
        ref="navbarRef"
      />
      <Button to="/team" text="Meet Our Team" />

      <button
        @click="toggleNav"
        ref="navTogglerRef"
        :class="['nav-toggle-btn', { active: navActive }]"
        aria-label="Toggle Navigation Menu"
        data-nav-toggler
      >
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Nav from "./Nav.vue";
import Button from "./Button.vue";
import { logo } from "@/assets";

export default {
  name: "Header",
  components: {
    Nav,
    Button,
  },
  setup() {
    const navActive = ref(false);
    const navbarRef = ref(null);
    const navTogglerRef = ref(null);

    const toggleNav = () => {
      navActive.value = !navActive.value;
    };

    const setNavActive = (value) => {
      navActive.value = value;
    };

    const handleClickOutside = (event) => {
      const navbar = navbarRef.value?.$el || navbarRef.value;
      const toggler = navTogglerRef.value?.$el || navTogglerRef.value;
      if (
        navbar &&
        !navbar.contains(event.target) &&
        toggler &&
        !toggler.contains(event.target)
      ) {
        setNavActive(false);
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    });

    return {
      navActive,
      navbarRef,
      navTogglerRef,
      toggleNav,
      setNavActive,
      logo,
    };
  },
};
</script>

<style scoped>
.header .btn {
  display: none;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-darker-purple);
  padding: 10px 12px;
  z-index: 4;
}

.header .logo {
  display: flex;
  align-items: center;
  font-family: var(--fontFamily-archivo);
  font-weight: var(--weight-bold);
  font-size: var(--fontSize-3);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.header .logo p {
  padding-top: 0.75rem;
  color: var(--text-white);
}

.header .logo:hover {
  text-decoration: none;
}

.header.active {
  position: fixed;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-toggle-btn .line {
  height: 3px;
  width: 10px;
  margin-block: 4px;
  background-color: var(--text-gainsboro);
  border-radius: 8px;
  transition: var(--transition-1);
}

.nav-toggle-btn .line-2 {
  width: 20px;
}

.nav-toggle-btn .line-3 {
  margin-inline-start: auto;
}

.nav-toggle-btn.active .line-2 {
  transform: rotate(-45deg);
}

.nav-toggle-btn.active .line-1 {
  transform: rotate(45deg) translate(4px, 1.5px);
}

.nav-toggle-btn.active .line-3 {
  transform: rotate(45deg) translate(-3px, -1px);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 992px) {
  .nav-toggle-btn {
    display: none;
  }

  .header .btn {
    display: grid;
    text-align: center;
  }

  .header .logo {
    margin-top: -1rem;
  }

  .header .logo p {
    padding-top: 1rem;
  }
}
</style>
