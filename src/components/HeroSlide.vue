<template>
  <div class="hero-slide" :style="{ backgroundColor: slide.color }">
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <h2>{{ slide.title }}</h2>
      <div class="slide-actions">
        <AppButton
            text="Подробнее"
            href="/about"
            :showArrow="true"
            class="slide-link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import AppButton from "@/components/AppButton.vue";

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

  /* на ПК — твои родные отступы */
  padding: 3.2rem 3.2rem 5rem;
}

/* затемнение для читаемости текста */
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.55) 12%,
      rgba(0, 0, 0, 0.18) 40%,
      rgba(0, 0, 0, 0) 100%
  );
  pointer-events: none;
}

/* контент */
.slide-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 72%;
}

/* Заголовок */
.slide-content h2 {
  font-size: clamp(1.5rem, 2.6vw, 2.6rem);
  line-height: 1.1;
  margin-bottom: 14px;
  font-weight: 700;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

/* Кнопки */
.slide-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.slide-link {
  margin: 2rem 0 0;
  max-width: 320px;
}

/* 💻 ПК — твои родные отступы */
@media (min-width: 992px) {
  .hero-slide {
    padding: 3.2rem 3.2rem 5rem;
  }
}

/* 📱 Телефоны */
@media (max-width: 576px) {
  .hero-slide {
    padding: 1.2rem 1rem 2rem; /* компактные отступы */
  }

  .slide-content {
    max-width: 100%;
  }

  .slide-content h2 {
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .slide-actions {
    flex-direction: column;
    gap: 10px;
    align-items: stretch; /* кнопка на всю ширину */
  }

  .slide-link {
    margin: 0;
    width: 100%;
    max-width: none;
  }
}

/* 📲 Планшеты */
@media (min-width: 577px) and (max-width: 991px) {
  .hero-slide {
    padding: 2rem 2rem 3rem; /* чуть больше воздуха */
  }

  .slide-content {
    max-width: 90%;
  }

  .slide-content h2 {
    font-size: 1.6rem;
    line-height: 1.35;
    margin-bottom: 12px;
  }

  .slide-actions {
    flex-direction: row;
    align-items: flex-start;
  }

  .slide-link {
    margin-top: 1rem;
    width: auto;
    max-width: 260px;
  }
}
</style>