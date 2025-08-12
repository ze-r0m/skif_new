<template>
  <section class="hero-section">
    <div class="container hero-grid">
      <!-- Слайдер -->
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

      <!-- Правая колонка: оборачиваем и привязываем к сетке -->
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
/* контейнер блока */
.hero-section {
  padding-top: 28px; /* отступ от верха (на мобилках увеличим) */
  padding-bottom: 28px;
}
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

/* сетка: 2 колонки, правая — обёртка с карточками */
.hero-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: stretch;
  /* адаптивная высота: не растягиваем до бесконечности, но оставляем отзывчивость */
  height: clamp(360px, 48vh, 720px);
  /* min-width:0 нужно, чтобы дочерние элементы с overflow корректно сжимались внутри grid */
  min-width: 0;
}

/* слева — слайдер (заполняет всю первую колонку) */
.grid-slider {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  position: relative;
  height: 100%;
  border-radius: 32px;
  overflow: hidden; /* обрезаем скругления и элементы слайдера */
  min-width: 0;
}

/* Селектор Swiper -> чтобы все внутренние контейнеры были 100% по высоте */
.mySwiper,
.mySwiper .swiper-wrapper,
.mySwiper .swiper-slide {
  height: 100%;
}

/* правая колонка — занимает вторую колонку и делится на 3 равные строки */
.hero-grid-right {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  height: 100%;
}

/* карточки справа */
.card {
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  height: 100%;
}

/* Текст внутри карточек */
.card-content h3 {
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  line-height: 1.15;
}
.card-content p {
  margin: 0;
  font-size: 0.92rem;
  opacity: 0.95;
}

/* Примерные фоны (замени на нужные изображения/градиенты) */
.card-1 { background: linear-gradient(135deg,#0a5fb4,#004a99); color: #fff; }
.card-2 { background: #c7c3bb; color: #000; }
.card-3 { background: #fff; color: #000; }

/* Стили навигации (кнопки) — делаем круглые белые, как на скрине */
.swiper-button-next,
.swiper-button-prev {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  color: #004a99;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  bottom: 24px;
  transform: none;
}

/* Скрываем левую кнопку, оставляем одну справа (как на скрине) — при необходимости убрать */
.swiper-button-prev { display: none; }
.swiper-button-next { right: 24px; }

/* Пагинация (точки/линия) */
.swiper-pagination {
  position: absolute;
  left: 20px;
  bottom: 20px;
  right: auto;
  display: flex;
  gap: 10px;
}
.swiper-pagination-bullet {
  width: 38px;
  height: 4px;
  border-radius: 4px;
  background: rgba(255,255,255,0.45);
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #fff;
}

/* Мелкие правки для текста слайда (внутри HeroSlide, но здесь добавим базу) */
.hero-slide .slide-content h2 {
  color: #fff;
  margin: 0;
}

/* Адаптив: на небольших экранах — одна колонка, увеличенный отступ сверху */
@media (max-width: 992px) {
  .hero-section { padding-top: 42px; padding-bottom: 20px; }
  .hero-grid {
    grid-template-columns: 1fr;
    height: auto; /* убираем фикс/ограничение по высоте на мобильных */
  }
  .grid-slider {
    border-radius: 12px;
    height: clamp(220px, 38vh, 420px);
  }
  .hero-grid-right {
    grid-template-rows: none;
    grid-auto-rows: auto;
    height: auto;
  }
  .swiper-button-next, .swiper-button-prev { display: none; } /* скрываем кнопки на мобильных */
  .swiper-pagination { left: 16px; bottom: 12px; }
}
</style>
