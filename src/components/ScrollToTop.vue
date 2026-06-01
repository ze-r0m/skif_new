<template>
  <button
      ref="buttonRef"
      class="scroll-to-top"
      :class="{ 'is-visible': visible }"
      @click="scrollToTop"
  >
    <IconArrowUp />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import { getLenis } from "@/composables/useAnimations";

const props = defineProps({
  footerSelector: {
    type: String,
    default: "footer"
  },
  offset: {
    type: Number,
    default: 200
  },
  hideDistance: {
    type: Number,
    default: 40
  }
});

const visible = ref(false);
const buttonRef = ref(null);
const lastDistanceToFooter = ref(9999);

const getScrollY = () => {
  const lenis = getLenis();
  return lenis ? lenis.scroll : window.scrollY;
};

const handleScroll = () => {
  const scrolledEnough = getScrollY() > props.offset;

  const footer = document.querySelector(props.footerSelector);
  let distanceToFooter = 9999;

  if (footer && buttonRef.value) {
    const buttonRect = buttonRef.value.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    distanceToFooter = footerRect.top - buttonRect.bottom;
    lastDistanceToFooter.value = distanceToFooter;
  }

  visible.value = scrolledEnough && lastDistanceToFooter.value > props.hideDistance;
};

const scrollToTop = () => {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

let cleanup = null;

onMounted(() => {
  const attach = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", handleScroll);
      cleanup = () => lenis.off("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
      cleanup = () => window.removeEventListener("scroll", handleScroll);
    }
  };

  setTimeout(attach, 0);
});

onUnmounted(() => {
  if (cleanup) cleanup();
});
</script>

<style scoped>
.scroll-to-top {
  align-items: center;
  background-color: var(--element-bg);
  border: none;
  border-radius: 50%;
  box-shadow: -2px 2px 4px rgba(56, 66, 79, 0.1);
  color: var(--text-color);
  display: flex;
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 28px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  transition:
    transform 0.35s ease,
    opacity 0.35s ease,
    visibility 0s linear 0.35s,
    background-color 0.35s ease,
    color 0.35s ease;
  width: 56px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  box-sizing: border-box;
}

.scroll-to-top.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(-50%) scale(1);
  transition:
    transform 0.35s ease,
    opacity 0.35s ease,
    visibility 0s linear 0s,
    background-color 0.35s ease,
    color 0.35s ease;
}

.scroll-to-top:hover {
  background-color: var(--text-link-color);
  color: var(--text-contrast-color);
}

@media (min-width: 744px) and (max-width: 1024px) {
  .scroll-to-top {
    top: auto;
    bottom: 20px;
    right: 20px;
    transform: scale(0);
  }

  .scroll-to-top.is-visible {
    transform: scale(1);
    transition:
      transform 0.35s ease,
      opacity 0.35s ease,
      visibility 0s linear 0s,
      background-color 0.35s ease,
      color 0.35s ease;
  }

  .scroll-to-top:hover {
    background-color: var(--element-bg);
    color: var(--text-color);
  }
}

@media (max-width: 743px) {
  .scroll-to-top {
    top: auto;
    bottom: 20px;
    right: 20px;
    transform: scale(0);
    width: 40px;
    height: 40px;
  }

  .scroll-to-top.is-visible {
    transform: scale(1);
    transition:
      transform 0.35s ease,
      opacity 0.35s ease,
      visibility 0s linear 0s,
      background-color 0.35s ease,
      color 0.35s ease;
  }

  .scroll-to-top:hover {
    background-color: var(--element-bg);
    color: var(--text-color);
  }
}
</style>
