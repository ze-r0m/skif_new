<template>
  <section class="app-section">
    <div class="app-section__head" v-if="title">
      <h1 class="text-h1" data-animate>{{ title }}</h1>
    </div>
    <div class="app-section__content">
      <div class="app-grid _columns-4-1" data-animate-group data-animate-stagger="0.08" data-animate-slide-direction="right">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bullet-list-item"
          data-animate
        >
          <div class="bullet-list-item__icon">
            <svg class="_icon-tick-box" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" d="M21.587 2.66663H10.4137C5.56033 2.66663 2.66699 5.55996 2.66699 10.4133V21.5733C2.66699 26.44 5.56033 29.3333 10.4137 29.3333H21.5737C26.427 29.3333 29.3203 26.44 29.3203 21.5866V10.4133C29.3337 5.55996 26.4403 2.66663 21.587 2.66663Z" fill="#1370B9"/>
            </svg>
            <svg class="_icon-tick" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1069 20.7733C13.8402 20.7733 13.5869 20.6667 13.4002 20.48L9.62691 16.7067C9.24025 16.32 9.24025 15.68 9.62691 15.2933C10.0136 14.9067 10.6536 14.9067 11.0402 15.2933L14.1069 18.36L20.9602 11.5067C21.3469 11.12 21.9869 11.12 22.3736 11.5067C22.7602 11.8933 22.7602 12.5333 22.3736 12.92L14.8136 20.48C14.6269 20.6667 14.3736 20.7733 14.1069 20.7733Z" fill="#1370B9"/>
            </svg>
          </div>
          <div class="bullet-list-item__content">
            <p class="text-body" data-animate="title">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.app-section {
  margin-bottom: 80px;
}

.app-section__head {
  margin-top: 0;
  margin-bottom: 40px;
}

.app-section__head h2 {
  margin: 0;
}

.app-section__content {
  margin-top: 0;
}

.app-grid {
  display: grid;
  gap: 20px;
}

._columns-4-1 {
  grid-template-columns: repeat(4, 1fr);
}

.bullet-list-item {
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  gap: 24px;
  padding: 24px;
}

.bullet-list-item__icon {
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.bullet-list-item__icon svg {
  position: absolute;
  top: 0;
  left: 0;
}

.bullet-list-item__icon ._icon-tick {
  z-index: 1;
}

.bullet-list-item__content p {
  margin: 0;
}

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }

  ._columns-4-1 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 743px) {
  .app-section {
    margin-bottom: 40px;
  }

  .app-section__head {
    margin-bottom: 24px;
  }

  ._columns-4-1 {
    grid-template-columns: 1fr;
  }
}
</style>