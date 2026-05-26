<template>
  <a
      :href="href"
      :target="newTab ? '_blank' : null"
      :class="[
      'main-button',
      `main-button--${variant}`,
      { 'main-button--disabled': disabled }
    ]"
  >
    <span class="main-button__background"></span>
    <span class="main-button__text">{{ text }}</span>
    <span class="main-button__icon">
      <svg width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="currentColor" class="icon-arrow-right"/>
      </svg>
    </span>
  </a>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    text: { 
      type: String, 
      default: 'Button' 
    },
    href: { 
      type: String, 
      default: '#' 
    },
    variant: {
      type: String,
      default: 'light', // 'light' | 'dark'
      validator: (value) => ['light', 'dark'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    newTab: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.main-button {
  --divider-contrast-color: rgba(210, 218, 227, 0.48);
  --text-contrast-color: #FFFFFF;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 317px; /* фиксированная ширина */
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--text-contrast-color);
  overflow: hidden;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px var(--divider-contrast-color);
  background-color: transparent;
  gap: 20px;
}

.main-button__background {
  position: absolute;
  inset: 0;
  background: linear-gradient(208.61deg, rgb(15, 72, 143) 0%, rgb(23, 117, 191) 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.main-button__text {
  position: relative;
  z-index: 1;
  letter-spacing: -0.24px;
  line-height: 24px;
  text-align: start;
  width: 100%;
  font-family: 'GolosText', sans-serif;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: color .35s ease;
}

.main-button__icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 0;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(19, 112, 185, 1); /* цвет для светлого фона по умолчанию */
  transition: background 0.3s ease; /* только изменение фона */
}

.icon-arrow-right {
  color: var(--icon-color, var(--text-contrast-color));
  transition: none; /* отключаем анимацию стрелки */
}

/* Light variant (for dark backgrounds) */
.main-button--light {
  --divider-contrast-color: rgba(210, 218, 227, 0.3); /* границы */
  --text-contrast-color: #FFFFFF;
  --icon-color: rgba(17, 81, 156, 1); /* синяя стрелка на белом квадрате */
  background: rgba(255, 255, 255, 0.1); /* еле белый фон */
}

/* Dark variant (for light backgrounds) */
.main-button--dark {
  --divider-contrast-color: rgba(210, 218, 227, 0.48);
  --text-contrast-color: #38424F;
  --icon-color: #FFFFFF; /* белая стрелка на синем квадрате */
}

.main-button--dark .main-button__background {
  background: linear-gradient(208.61deg, rgb(15, 72, 143) 0%, rgb(23, 117, 191) 100%);
}

.main-button--light .main-button__icon {
  background: rgba(255, 255, 255, 1); /* цвет для темного фона */
}

.main-button--dark .main-button__icon {
  background: rgba(19, 112, 185, 1); /* цвет для светлого фона */
}

/* Hover effects */
.main-button:hover {
  box-shadow: none;
  text-decoration: none;
}

.main-button:hover .main-button__background {
  opacity: 1;
  background: linear-gradient(238.27deg, #11519C -4.32%, #288AD8 91.02%); /* градиент для hover */
}

.main-button:hover .main-button__icon {
  background: rgba(255, 255, 255, 0.1); /* цвет квадрата при hover на кнопку */
  --icon-color: #FFFFFF; /* белая стрелка при hover */
  /* убран сдвиг квадрата - только изменение цвета */
}

/* Изменение цвета текста для light варианта в hover */
.main-button--light:hover .main-button__text {
  color: rgba(255, 255, 255, 1);
}

/* Изменение цвета текста для dark варианта в hover */
.main-button--dark:hover .main-button__text {
  color: rgba(255, 255, 255, 1);
}

/* Hover effect for icon square */
.main-button__icon:hover {
  background: rgba(255, 255, 255, 0.1) !important; /* приоритетный эффект при наведении на квадрат */
}

/* Disabled state */
.main-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.main-button--disabled:hover .main-button__background {
  opacity: 0;
}

.main-button--disabled:hover .main-button__icon {
  background: rgba(19, 112, 185, 1); /* сохраняем цвет при disabled */
}

/* Active effect */
.main-button:active {
  transform: none; /* убрано перемещение */
  background: linear-gradient(238.27deg, #11519C -4.32%, #288AD8 91.02%); /* цвет фона при нажатии */
}

.main-button:active .main-button__icon {
  background: rgba(255, 255, 255, 0.2); /* цвет квадрата при нажатии */
}

/* Permanent hover imitation */
.main-button.is-hovered .main-button__background {
  opacity: 1;
}

.main-button.is-hovered .main-button__icon {
  background: rgba(255, 255, 255, 0.1);
}

/* =======================================================
   Mobile (до 743px)
   ======================================================= */
@media (max-width: 767px) {
  .main-button {
    height: 44px;
    min-width: 109px;
    width: auto;
    padding: 8px 8px 8px 12px;
    gap: 16px;
  }

  .main-button__text {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.21px;
    width: auto;
  }

  .main-button__icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
  }

  .main-button__icon svg {
    width: 12px;
    height: 12px;
  }
}
</style>