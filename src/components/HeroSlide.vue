<template>
  <div
      class="hero-slide"
      :style="{
      backgroundImage: imageStyle,
      backgroundColor: backgroundColor
    }"
  >
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <h2>{{ slide.title }}</h2>
      <div class="slide-actions">
        <AppButton
            text="Подробнее"
            :href="slide.link"
            :showArrow="true"
            class="slide-link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import AppButton from "@/components/AppButton.vue";

const props = defineProps({
  slide: {
    type: Object,
    required: true
  }
});

// если есть картинка — используем её, иначе фон пустой
const imageStyle = computed(() =>
    props.slide.image ? `url(${props.slide.image})` : "none"
);

// если нет картинки, используем цвет
const backgroundColor = computed(() => props.slide.color || "#34495e");
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
  padding: 3.2rem 3.2rem 5rem;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0.3; /* регулируем интенсивность */
  pointer-events: none;
  transition: opacity .35s ease;
}

.slide-content {
  position: relative;
  z-index: 2;
  color: #fff;
  max-width: 72%;
}

.slide-content h2 {
  font-size: clamp(1.5rem, 2.6vw, 2.6rem);
  line-height: 1.1;
  margin-bottom: 14px;
  font-weight: 700;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.slide-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.slide-link {
  margin: 2rem 0 0;
  max-width: 320px;
  background-color: rgba(248, 248, 248, 0.09);
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
