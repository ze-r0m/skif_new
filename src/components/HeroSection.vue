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
        <div class="card card-1">
          <div class="card-content">
            <h3>События ДГТУ</h3>
          </div>
        </div>
        <div class="card card-2">
          <div class="card-content">
            <h3>Наши достижения</h3>
          </div>
        </div>
        <div class="card card-3">
          <div class="card-content">
            <h3>Инструкции по работе с системами</h3>
          </div>
        </div>
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
  height: clamp(360px, 48vh, 640px); /* Используем clamp() для контроля высоты */
}

/* Слайдер и его контейнер */
.grid-slider {
  position: relative;
  /* Убираем жесткую высоту и позволяем ему растягиваться на 100% от родителя */
  height: 100%;
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
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  /* Убираем жесткую высоту и позволяем ему растягиваться на 100% от родителя */
  height: 100%;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  height: 100%;
}

.card-1 { background: linear-gradient(135deg, #0a5fb4, #004a99); color: #fff; }
.card-2 { background: #c7c3bb; color: #000; }
.card-3 { background: #fff; color: #000; }

.card-content h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25;
}

/* Стили пагинации и навигации Swiper */
.swiper-button-next,
.swiper-button-prev {
  display: none;
}

.swiper-pagination {
  left: 16px;
  bottom: 16px;
}

.swiper-pagination-bullet {
  width: 32px;
  height: 4px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-bullet-active {
  background: #fff;
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
  }

  .grid-slider {
    border-radius: 32px;
  }

  .hero-grid-right {
    grid-template-rows: repeat(3, 1fr);
  }

  .card {
    border-radius: 32px;
  }
}
</style>