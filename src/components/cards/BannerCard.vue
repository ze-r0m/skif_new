<template>
  <div class="banner-card card_lg" data-animate="data-animate">
    <div class="banner-card__content">
      <div class="banner-card__text">
        <h2 class="banner-card__title text-h2-desktop" data-animate="title">{{ title }}</h2>
        <p class="banner-card__subtitle text-body" data-animate="text">{{ text }}</p>
      </div>
      <div class="banner-card__button" data-animate="data-animate">
        <MainButton
          v-if="buttonText && buttonHref"
          :text="buttonText"
          variant="dark"
          :href="buttonHref"
          class="banner-card__button-item"
        />
      </div>
    </div>
    <div class="banner-card__img" :style="imageStyles">
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
  }
})
</script>

<style scoped>
.card_lg {
  padding: 56px;
  background-color: var(--element-bg);
  border-radius: 32px;
  overflow: hidden;
}

.banner-card {
  position: relative;
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

.banner-card__button {
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

h2{
  margin: 0;
}

@media screen and (min-width: 1200px) {
  .banner-card__content {
    max-width: 634px;
  }
}

@media (max-width: 1023px) {
  .card_lg {
    padding: 32px;
  }

  .banner-card__content {
    max-width: unset;
  }

  .banner-card__img {
    display: none;
  }
}

@media (max-width: 767px) {
  .card_lg {
    padding: 20px;
  }

  .banner-card__content {
    align-items: normal;
  }
  .banner-card__button{
    margin-top: auto;
  }
  .banner-card__button-item {
    width: 100%;
    min-width: unset;
  }

  .banner-card__title {
    font-size: 24px;
    letter-spacing: -.65px;
    line-height: 28px;
  }
}

</style>