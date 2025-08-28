<template>
    <swiper
        :modules="[Pagination, EffectFade, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :speed="1000"
        :pagination="{
        el: paginationSelector,
        clickable: true,
        type: 'bullets',
        renderBullet: renderCustomBullet
      }"
        class="mySwiper"
        @swiper="onSwiperInit"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <HeroSlide :slide="slide" />
      </swiper-slide>

      <!-- Пагинация для ПК -->
      <div class="swiper-pagination-pc"></div>
    </swiper>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeroSlide from "./HeroSlide.vue";
import { slides as slidesData } from "@/data/slides.js";

const slides = ref(slidesData);



const windowWidth = ref(0);
const swiperInstance = ref(null);

// селектор для пагинации
const paginationSelector = computed(() => {
  return windowWidth.value >= 768
      ? ".swiper-pagination-pc"
      : ".swiper-pagination-mobile";
});

// кастомные буллеты
const renderCustomBullet = (index, className) => {
  return `<span class="${className}">
            <span class="progress-bar"></span>
          </span>`;
};

let prevIndex = 0;

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper;

  // стартовая анимация первой полоски
  const firstBar = swiper.pagination.bullets[swiper.realIndex].querySelector(".progress-bar");
  setTimeout(() => {
    firstBar.style.transition = `width ${swiper.params.autoplay.delay / 1000}s linear`;
    firstBar.style.width = "100%";
  }, 50);

  swiper.on("slideChange", () => {
    const bullets = swiper.pagination.bullets;

    // предыдущая полоска — опустошение
    const prevBar = bullets[prevIndex].querySelector(".progress-bar");
    prevBar.style.transition = "width 2.1s linear";
    prevBar.style.width = "0%";

    // новая полоска — заполнение
    const activeBar = bullets[swiper.realIndex].querySelector(".progress-bar");
    activeBar.style.transition = `width ${swiper.params.autoplay.delay / 1000}s linear`;
    activeBar.style.width = "100%";

    prevIndex = swiper.realIndex;
  });
};

watch(paginationSelector, (newSelector) => {
  if (swiperInstance.value) {
    if (swiperInstance.value.pagination?.destroy) {
      swiperInstance.value.pagination.destroy();
    }
    swiperInstance.value.params.pagination.el = newSelector;
    swiperInstance.value.pagination.init();
    swiperInstance.value.pagination.render();
    swiperInstance.value.pagination.update();
  }
});

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWidth);
  }
});
</script>

<style>
/* Общий стиль для полосок */
.swiper-pagination-bullet {
  flex: 1 !important;
  height: 4px !important;
  border-radius: 2px !important;
  background: rgba(255, 255, 255, 0.3) !important;
  overflow: hidden;
  position: relative;
}
.swiper-pagination-bullet .progress-bar {
  display: block;
  width: 0%;
  height: 100%;
  background: #fff;
  transition: none;
}
.swiper-pagination-bullet-active .progress-bar {
  width: 100%;
  transition: width 4.9s linear;
}

/* 💻 ПК */
@media (min-width: 768px) {
  .swiper-pagination-pc {
    display: flex !important;
    justify-content: start !important;
    gap: 8px !important;
    position: absolute !important;
    bottom: 20px !important;
    left: 0 !important;
    right: 0 !important;
    padding: 0 20% !important;
    z-index: 10 !important;
    pointer-events: auto !important;
  }
  .swiper-pagination-mobile {
    display: none !important;
  }
}

/* 📱 Телефоны */
@media (max-width: 767px) {
  .swiper-pagination-pc {
    display: none ;
  }
  .swiper-pagination-mobile {
    display: flex ;
    justify-content: center;
    gap: 8px;
    padding: 0 16px;
  }
  .swiper-pagination-bullet {
    background: rgba(179, 181, 182, 0.54) !important;
  }

  .swiper-pagination-bullet .progress-bar {
    background: #1370b9;
  }
}

.mySwiper,
.mySwiper .swiper-wrapper,
.mySwiper .swiper-slide {
  height: 100%;
}
</style>
