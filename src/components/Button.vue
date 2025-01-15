<template>
  <component
    :is="Tag"
    :to="to"
    :href="href || '#!'"
    :class="['btn', className]"
    ref="buttonRef"
    @click="handleClick"
    :download="download ? '' : undefined"
  >
    {{ text }}
  </component>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "Button",
  props: {
    to: String,
    href: String,
    className: String,
    text: String,
    onClick: Function,
    download: Boolean,
  },
  setup(props) {
    const buttonRef = ref(null);
    const Tag = props.to ? RouterLink : "a";

    const buttonHoverRipple = (event) => {
      const button = buttonRef.value?.$el || buttonRef.value;
      if (button) {
        button.style.setProperty("--top", `${event.offsetY}px`);
        button.style.setProperty("--left", `${event.offsetX}px`);
      }
    };

    const handleClick = (event) => {
      if (props.onClick) {
        props.onClick(event);
      }
    };

    onMounted(() => {
      const button = buttonRef.value?.$el || buttonRef.value;
      if (button && typeof button.addEventListener === "function") {
        button.addEventListener("mousemove", buttonHoverRipple);
      } else {
        console.error("buttonRef is not a valid DOM element:", button);
      }
    });

    onUnmounted(() => {
      const button = buttonRef.value?.$el || buttonRef.value;
      if (button && typeof button.removeEventListener === "function") {
        button.removeEventListener("mousemove", buttonHoverRipple);
      }
    });

    return {
      buttonRef,
      Tag,
      buttonHoverRipple,
      handleClick,
    };
  },
};
</script>

<style scoped>
.btn {
  position: relative;
  background-image: var(--gradient-1);
  color: var(--text-white);
  font-family: "Oxanium", cursive;
  font-size: var(--fontSize-6);
  font-weight: var(--weight-semibold);
  max-width: max-content;
  min-width: 180px;
  height: 50px;
  display: grid;
  place-items: center;
  padding-inline: 30px;
  clip-path: var(--clip-path-3);
  overflow: hidden;
  text-decoration: none;
}

.btn::before {
  content: "";
  position: absolute;
  top: var(--top, 50%);
  left: var(--left, 50%);
  width: 250%;
  padding-block-end: 250%;
  background-color: var(--bg-purple);
  transform: translate(-50%, -50%) scale(0);
  border-radius: var(--radius-circle);
  z-index: -1;
  transition: transform var(--transition-2);
}

.btn:is(:hover, :focus-visible)::before {
  transform: translate(-50%, -50%) scale(1);
  background-color: var(--bg-pink);
}
</style>
