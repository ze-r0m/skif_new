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

/* 💻 Desktop (от 1024px) */
@media (min-width: 1024px) {
  .hero-slide {
    padding: 56px 56px 70px;
  }
}

/* 📱 Tablet (744px - 1023px) */
@media (min-width: 744px) and (max-width: 1023px) {
  .hero-slide {
    padding: 40px 32px 50px;
  }
}

/* 📱 Phones (до 743px) */
@media (max-width: 743px) {
  .hero-slide {
    padding: 20px 12px 30px;
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
</style>
