<template>
  <div class="hero-slide" :style="{ backgroundColor: slide.color }">
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <h2>{{ slide.title }}</h2>
      <div class="slide-actions">
        <button class="btn">Подробнее</button>
        <button class="btn-arrow" aria-label="next">›</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  slide: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.hero-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 30px;
}

/* затемнение для читаемости текста */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 12%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.0) 100%);
  pointer-events: none;
}

/* контент поверх */
.slide-content {
  position: relative; /* над overlay */
  z-index: 2;
  color: #fff;
  max-width: 72%;
}

/* Заголовок */
.slide-content h2 {
  font-size: clamp(1.5rem, 2.6vw, 2.6rem);
  line-height: 1.05;
  margin-bottom: 14px;
  font-weight: 700;
  text-shadow: 0 6px 18px rgba(0,0,0,0.35);
}

/* Кнопки */
.slide-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.26);
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(4px);
}

.btn-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #004a99;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}

/* Меньше отступы на мобильных */
@media (max-width: 576px) {
  .hero-slide { padding: 18px; }
  .slide-content { max-width: 100%; }
  .slide-content h2 { font-size: 1.25rem; }
  .btn { padding: 6px 12px; }
  .btn-arrow { width: 36px; height: 36px; font-size: 18px; }
}
</style>
