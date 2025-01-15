<template>
  <nav ref="navRef" :class="{ navbar: true, active: navActive }" data-navbar>
    <ul class="navbar-list">
      <li class="navbar-item" v-for="link in links" :key="link.to">
        <RouterLink
          :to="link.to"
          :class="['navbar-link', { 'team-link': link.to === '/team' }]"
          data-nav-link
          @click="handleNavLinkClick"
        >
          {{ link.text }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "Nav",
  props: {
    navActive: Boolean,
  },
  emits: ["close-nav"],
  setup(props, { emit }) {
    const navRef = ref(null);

    const links = [
      { to: "/home", text: "Home" },
      { to: "/about", text: "About" },
      { to: "/media", text: "Media" },
      { to: "/gear", text: "Gear" },
      { to: "/team", text: "Team" },
    ];

    const handleNavLinkClick = () => {
      emit("close-nav");
    };

    return {
      navRef,
      links,
      handleNavLinkClick,
    };
  },
};
</script>

<style>
.navbar {
  position: absolute;
  top: calc(100% - 1px);
  right: 12px;
  left: 12px;
  background-color: var(--bg-darker-purple);
  padding: 0 15px;
  clip-path: var(--clip-path-1);
  transition: clip-path 500ms var(--cubic-out);
}

.navbar.active {
  clip-path: var(--clip-path-2);
}

.navbar-link {
  font-family: "Oxanium", cursive;
  padding: 12px 25px;
  text-transform: uppercase;
  font-size: var(--fontSize-7);
  font-weight: var(--weight-semibold);
  color: var(--text-white) !important;
}

.navbar-link:hover {
  color: var(--text-champagne-pink) !important;
}

.navbar-item {
  border-block-start: 1px solid var(--border-space-cadet);
}

.navbar-item:last-child {
  border-block-end: 1px solid var(--border-space-cadet);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media screen and (min-width: 992px) {
  .navbar,
  .navbar.active {
    all: unset;
    display: block;
  }

  .navbar-item,
  .navbar-item:last-child {
    border: none;
  }

  .navbar-list {
    display: flex;
  }

  .team-link {
    display: none;
  }
}
</style>
