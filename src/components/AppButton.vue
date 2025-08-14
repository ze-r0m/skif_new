<template>
  <a
      :href="href"
      target="_blank"
      class="app-button"
  >
    <span class="app-button__background"></span>
    <span class="app-button__text">{{ text }}</span>
    <span v-if="showArrow" class="app-button__icon">
      <svg width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="white"/>
      </svg>
    </span>
  </a>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: { type: String, default: 'Нажми меня' },
    href: { type: String, default: '#' },
    showArrow: { type: Boolean, default: true }
  }
}
</script>

<style scoped>
.app-button {
  --divider-contrast-color: rgba(210, 218, 227, 0.48);
  --text-contrast-color: #FFFFFF;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--text-contrast-color);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: inset 0 0 0 1px var(--divider-contrast-color);
  background-color: transparent;
  width: 100%;
  max-width: 320px;
  gap: 20px;
}

.app-button__background {
  position: absolute;
  inset: 0;
  background: linear-gradient(208.61deg, rgb(15, 72, 143) 0%, rgb(23, 117, 191) 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.app-button__text {
  position: relative;
  z-index: 1;
  letter-spacing: -0.24px;
  line-height: 24px;
  text-align: start;
  width: 100%;
}

.app-button__icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;      /* фиксированная ширина */
  height: 40px;     /* фиксированная высота */
  min-width: 0;     /* предотвращает растягивание flex */
  flex-shrink: 0;   /* не сжимать элемент */
  border-radius: 6px;
  background: transparent;
  transition: all 0.3s ease; /* анимация квадрата */
}


.icon-arrow-right {
  color: var(--text-contrast-color);
  transition: none; /* отключаем анимацию стрелки */
}

/* Hover эффекты */
.app-button:hover {
  box-shadow: none;
}

.app-button:hover .app-button__background {
  opacity: 1;
}

.app-button:hover .app-button__icon {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px); /* сдвиг квадрата, а не стрелки */
}

.app-button:hover .icon-arrow-right {
  transform: none; /* стрелка остаётся на месте */
}

/* Active эффект */
.app-button:active {
  transform: translateY(1px);
}

</style>