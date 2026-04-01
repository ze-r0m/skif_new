<template>
  <button
      v-show="visible"
      class="scroll-to-top"
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
    default: "footer" // можно указать любой селектор футера
  },
  offset: {
    type: Number,
    default: 300 // через сколько пикселей появляется кнопка
  }
});

const visible = ref(false);

const handleScroll = () => {
  const scrolledEnough = window.scrollY > props.offset;

  const footer = document.querySelector(props.footerSelector);
  let footerVisible = false;

  if (footer) {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    footerVisible = footerTop <= windowHeight;
  }

  visible.value = scrolledEnough && !footerVisible;
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
  position: fixed;
  top: 50%;        /* середина экрана по вертикали */
  right: 20px;     /* прижимаем к правому краю */
  transform: translateY(-50%); /* чтобы центр совпадал */
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #38424f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
}

.scroll-to-top:hover {
  background-color: #1370b9;
  color: #FFFFFF;
}

.scroll-to-top {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #38424f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
}

.scroll-to-top:hover {
  background-color: #1370b9;
  color: #FFFFFF;
}

.scroll-to-top {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #38424f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
}

.scroll-to-top:hover {
  background-color: #1370b9;
  color: #FFFFFF;
}

/* Tablet (744px–1023px) — кнопка снизу, но размер как на ПК */
@media (min-width: 744px) and (max-width: 1023px) {
  .scroll-to-top {
    top: auto;
    bottom: 20px;
    right: 20px;
    transform: none;
    width: 56px;
    height: 56px;
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
