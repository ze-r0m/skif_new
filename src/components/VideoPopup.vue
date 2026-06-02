<template>
  <Teleport to="body">
    <div v-if="isOpen" class="video-popup" @click.self="$emit('close')">
      <div class="video-popup__container">
        <button class="video-popup__close" @click="$emit('close')" type="button" aria-label="Закрыть">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="video-popup__close-icon" d="M24.5 9.5L9.5 24.5M9.5 9.5L24.5 24.5" stroke="#dbdbdb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div v-if="!isDirectVideo" class="video-popup__iframe-wrapper">
          <iframe
            :src="videoUrl"
            frameborder="0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div v-else class="video-popup__direct-wrapper">
          <video :src="videoUrl" controls autoplay></video>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, computed, watch } from 'vue'

const props = defineProps({
  videoUrl: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: true
  },
  isDirectMp4: {
    type: Boolean,
    default: null
  }
})

const emit = defineEmits(['close'])

const isDirectVideo = computed(() => {
  if (props.isDirectMp4 !== null) {
    return props.isDirectMp4
  }
  return props.videoUrl.includes('.mp4') || props.videoUrl.includes('.webm') || props.videoUrl.includes('.mov')
})

watch(() => props.isOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
}, { immediate: true })

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.video-popup {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.video-popup__container {
  position: relative;
  width: 100%;
  max-width: 960px;
}

.video-popup__close {
  position: absolute;
  top: -35px;
  right: 0;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 10;
  transition: opacity 0.2s ease;
}

.video-popup__close:hover {
  opacity: 1;
}

.video-popup__close:hover .video-popup__close-icon {
  stroke: #fff;
}

.video-popup__iframe-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video-popup__iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-popup__direct-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video-popup__direct-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>