<template>
  <div class="media-card" data-animate="data-animate" data-animate-stagger="0.08">
    <div class="media-card__media">
      <div class="media-card__video" @click="$emit('open', videoUrl)">
        <img :src="image" :alt="title">
      </div>
      <div class="media-card__play">
        <button class="btn-secondary text-button media-card__play-btn _contrast _outline" type="button" data-animate="data-animate">
          <span class="btn-secondary__icon _no-bg">
            <IconPlay class="_icon-play"></IconPlay>
          </span>
        </button>
      </div>
    </div>
    <h4 class="text-h4-desktop media-card__title">{{ title }}</h4>
  </div>
</template>

<script setup>
import IconPlay from '@/components/icons/IconPlay.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  }
})

defineEmits(['open'])
</script>

<style scoped>
.media-card {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.media-card__media {
  border-radius: 32px;
  height: 300px;
  margin-bottom: 4px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.media-card__video {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
  z-index: 1;
}

.media-card__play {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
}

.media-card__play:before {
  background-color: rgba(0, 0, 0, 0.4);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.media-card__play-btn {
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.btn-secondary._outline._contrast {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid var(--divider-contrast-color);
  border-radius: 12px;
  color: var(--text-contrast-color);
  font-size: 1.4rem;
  font-weight: 500;
  gap: 8px;
  line-height: 20px;
  padding: 8px 16px;
  width: fit-content;
}

.btn-secondary._contrast .btn-secondary__icon._no-bg {
  background-color: transparent;
  color: var(--text-contrast-color);
}

.btn-secondary._outline .btn-secondary__icon {
  height: 20px;
  width: 20px;
}

.btn-secondary._outline._contrast svg {
  color: var(--text-contrast-color);
}

.btn-secondary._outline._contrast .btn-secondary__icon._no-bg svg {
  color: var(--text-contrast-color);
}

.btn-secondary__icon {
  align-items: center;
  background-color: #1370b9;
  border-radius: 8px;
  color: var(--text-contrast-color);
  display: flex;
  flex-shrink: 0;
  height: 24px;
  justify-content: center;
  transition: background-color 0.35s ease;
  width: 24px;
}

.media-card__media iframe,
.media-card__media img,
.media-card__media video {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.media-card__title {
  color: #38424F;
  margin: 0;
  transition: color 0.35s ease;
}

.media-card:hover .media-card__title {
  color: rgba(19, 112, 185, 1);
}
@media (max-width: 1023px) {
  .media-card {
    margin-bottom: 20px;
  }
  .media-card__media {
    border-radius: 24px;
    height: 350px;
  }
}

@media (max-width: 743px) {
  .media-card__media {
    height: 250px;
  }
  .media-card__title{
    font-size: 16px;
  }
}

</style>