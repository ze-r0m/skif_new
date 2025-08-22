<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="grid-item grid-slider">
        <swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :loop="true"
            :navigation="false"
            :pagination="{ clickable: true }"
            class="mySwiper"
        >
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <HeroSlide :slide="slide" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="hero-grid-right">
        <a href="">
          <div class="card card-1">
            <div class="card-content">
              <h3 class="card-title">События ДГТУ</h3>
            </div>
          </div>
        </a>

        <a href="">
          <div class="card card-2">
            <div class="card-content">
              <h3 class="card-title">Наши достижения</h3>
            </div>
          </div>
        </a>
        <a href="">
          <div class="card card-3">
            <div class="card-content">
              <h3 class="card-title">Инструкции по работе с&nbsp;системами</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeroSlide from './HeroSlide.vue';

const slides = ref([
  { title: 'Создание видеокурса. Студия записи', color: '#34495e' },
  { title: 'Информация о ходе приёмной кампании 2025', color: '#2980b9' },
  { title: 'Открытие новой лаборатории', color: '#8e44ad' },
]);
</script>

<style scoped>
/* =======================================================
   Стили для всех устройств (Mobile-first подход)
   ======================================================= */

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  padding: 24px 0;
}

/* Сетка по умолчанию для мобильных — одна колонка */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.hero-grid a{
  text-decoration: none;
}

/* Слайдер и его контейнер */
.grid-slider {
  position: relative;
  min-height: 20rem;
  border-radius: 12px;
  overflow: hidden;
  min-width: 0;
}

.mySwiper,
.mySwiper .swiper-wrapper,
.mySwiper .swiper-slide {
  height: 100%;
}

/* Правая колонка с карточками */
.hero-grid-right {
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding: 32px;
  box-sizing: border-box;
  min-height: 10rem;
}

.card-title{
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 700;
  margin: 0;
}

.card-1 {
  background: url("src/assets/fasad.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-2 {
  background: url("../assets/achievements.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-3 {
  background-image: url("src/assets/instructions.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-content {
  display: flex;
  flex-direction: column;
  padding-right: 20px;
}

.card-content h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
}


/* =======================================================
   Медиа-запросы для более широких экранов
   ======================================================= */

@media (min-width: 768px) {
  .hero-section {
    padding: 28px 0;
  }

  .hero-grid {
    grid-template-columns: 2fr 1fr;
    align-items: stretch;
    height: 600px;
  }

  .grid-slider {
    border-radius: 32px;
    min-height: 0;
    height: 100%;
  }

  .hero-grid-right {
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
    grid-auto-flow: unset;
  }

  .card {
    border-radius: 32px;
    min-height: 0;
    height: 100%;
  }
}
</style>