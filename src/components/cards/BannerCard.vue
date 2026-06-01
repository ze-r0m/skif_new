<template>
  <div class="banner-card" :class="variant" data-animate-group>
    <div class="banner-card__content">
      <div class="banner-card__text">
        <h2 class="banner-card__title text-h2-desktop" data-animate="title">{{ title }}</h2>
        <p class="banner-card__subtitle text-body" data-animate="text">{{ text }}</p>
      </div>
      <MainButton
        v-if="buttonText && buttonHref"
        :text="buttonText"
        :variant="buttonVariant"
        :href="buttonHref"
        class="banner-card__button-item"
        data-animate
      />
    </div>
    <div class="banner-card__img" data-animate :style="imageStyles">
      <img :src="image" :alt="title"/>
    </div>
  </div>
</template>

<script setup>
import MainButton from '@/components/MainButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonHref: {
    type: String,
    default: ''
  },
  imageStyles: {
    type: Object,
    default: () => ({})
  },
  variant: {
    type: String,
    default: 'default',
    validator: v => ['default', 'primary'].includes(v)
  },
  buttonVariant: {
    type: String,
    default: 'dark'
  }
})
</script>

<style scoped>
/* ── Base ── */
.banner-card {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
}

.banner-card__content,
.banner-card__text {
  display: flex;
  flex-direction: column;
}

.banner-card__text {
  gap: 20px;
}

.banner-card__content {
  align-items: flex-start;
  gap: 56px;
  max-width: 500px;
  min-height: 232px;
  position: relative;
  z-index: 5;
}

.banner-card__subtitle {
  margin: 0;
  color: var(--text-2-color);
}

.banner-card__img {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(20%) scale(1.4);
  width: 50%;
  z-index: 1;
}

.banner-card__img img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

h2 {
  margin: 0;
}

/* ── Variant: default ── */
.default {
  padding: 56px;
  background-color: var(--element-bg);
}

/* ── Variant: primary (hero) ── */
.primary {
  padding: 24px;
  padding-bottom: 40px;
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%);
  color: var(--text-contrast-color);
  min-height: 280px;
}

.primary .banner-card__subtitle {
  color: inherit;
}

/* ── Responsive: variant default ── */
@media screen and (min-width: 1200px) {
  .default .banner-card__content {
    max-width: 634px;
  }
}

@media (max-width: 1023px) {
  .default {
    padding: 32px;
  }

  .default .banner-card__content {
    max-width: unset;
  }

  .default .banner-card__img {
    display: none;
  }
}

@media (max-width: 767px) {
  .default {
    padding: 20px;
  }

  .default .banner-card__content {
    align-items: normal;
  }

  .default .banner-card__button-item {
    margin-top: auto;
    width: 100%;
    min-width: unset;
  }

  .default .banner-card__title {
    font-size: 24px;
    letter-spacing: -.65px;
    line-height: 28px;
  }
}

/* ── Responsive: variant primary (hero) ── */
@media (min-width: 744px) and (max-width: 1023px) {
  .primary {
    padding: 32px;
    border-radius: 24px;
    min-height: 320px;
  }

  .primary .banner-card__content {
    gap: 24px;
    max-width: 480px;
  }

  .primary .banner-card__title {
    font-size: 32px;
    line-height: 40px;
  }

  .primary .banner-card__subtitle {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .primary {
    padding: 56px;
    min-height: 400px;
  }

  .primary .banner-card__content {
    gap: 40px;
    max-width: 660px;
  }

  .primary .banner-card__title {
    font-size: 44px;
    line-height: 52px;
  }

  .primary .banner-card__subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 743px) {
  .primary {
    padding: 24px;
    padding-bottom: 40px;
    border-radius: 20px;
  }

  .primary .banner-card__content {
    gap: 16px;
  }

  .primary .banner-card__title {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -1px;
  }

  .primary .banner-card__subtitle {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>