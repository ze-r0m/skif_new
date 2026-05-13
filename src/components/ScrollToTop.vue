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

const handleScroll = () => {
  const scrolledEnough = window.scrollY > props.offset;

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
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  align-items: center;
  background-color: #FFFFFF;
  border: none;
  border-radius: 50%;
  box-shadow: -2px 2px 4px rgba(56, 66, 79, 0.1);
  color: #38424f;
  display: flex;
  height: 56px;
  justify-content: center;
  position: fixed;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.35s ease, color 0.35s ease;
  width: 56px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.scroll-to-top.is-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.scroll-to-top:hover {
  background-color: #1370b9;
  color: #FFFFFF;
}

@media (min-width: 744px) and (max-width: 1023px) {
  .scroll-to-top {
    top: auto;
    bottom: 20px;
    right: 20px;
    transform: none;
  }

  .scroll-to-top:hover {
    background-color: #FFFFFF;
    color: #38424f;
  }
}

@media (max-width: 743px) {
  .scroll-to-top {
    top: auto;
    bottom: 20px;
    right: 20px;
    transform: none;
    width: 40px;
    height: 40px;
  }

  .scroll-to-top:hover {
    background-color: #FFFFFF;
    color: #38424f;
  }
}
</style>
