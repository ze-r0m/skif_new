<template>
  <article :class="['info-icon-card', `info-icon-card--${variant}`]">
    <div class="info-icon-card__body">
      <div class="info-icon-card__content">
        <h3 class="info-icon-card__title text-h3-desktop">{{ title }}</h3>
        <p class="info-icon-card__description text-body-desktop" v-html="description"></p>
      </div>
      <div class="info-icon-card__footer">
        <a :href="link" target="_blank" rel="noopener noreferrer" class="info-icon-card__button btn-secondary text-button">
          <span class="btn-secondary__label">Подробнее</span>
          <span class="btn-secondary__icon">
            <svg class="_icon-arrow-right" width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="currentColor"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'primary', 'primary-light'].includes(value)
  }
})
</script>

<style scoped>
/* =======================================================
   Desktop styles (по структуре сайта ДГТУ)
   ======================================================= */
.info-icon-card {
  display: block;
  height: 100%;
}

.info-icon-card__body {
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 40px;
  cursor: default;
}

.info-icon-card__content {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.info-icon-card__title {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.info-icon-card__description {
  margin: 0;
}

.info-icon-card__footer {
  margin-top: 0;
}

.info-icon-card__button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
}

.btn-secondary__label {
  white-space: nowrap;
}

.btn-secondary__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  padding: 4px;
  flex-shrink: 0;
}

.btn-secondary__icon svg {
  width: 16px;
  height: 16px;
}

/* ========================================
   Вариант: White (белый фон)
   ======================================== */
.info-icon-card--white .info-icon-card__body {
  background: rgba(255, 255, 255, 1);
  color: rgba(56, 66, 79, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.info-icon-card--white .info-icon-card__title,
.info-icon-card--white .btn-secondary__label {
  color: rgba(56, 66, 79, 1);
}

.info-icon-card--white .info-icon-card__description {
  color: rgba(128, 136, 157, 1);
}

.info-icon-card--white .btn-secondary__icon {
  background: rgba(19, 112, 185, 1);
}

.info-icon-card--white .btn-secondary__icon svg {
  color: rgba(255, 255, 255, 1);
}

/* ========================================
   Вариант: Primary (синий #11519C)
   ======================================== */
.info-icon-card--primary .info-icon-card__body {
  background: rgba(17, 81, 156, 1);
  color: rgba(255, 255, 255, 1);
}

.info-icon-card--primary .info-icon-card__title,
.info-icon-card--primary .btn-secondary__label {
  color: rgba(255, 255, 255, 1);
}

.info-icon-card--primary .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--primary .btn-secondary__icon {
  background: rgba(255, 255, 255, 1);
}

.info-icon-card--primary .btn-secondary__icon svg {
  color: rgba(19, 112, 185, 1);
}

/* ========================================
   Вариант: Primary Light (градиент)
   ======================================== */
.info-icon-card--primary-light .info-icon-card__body {
  background: linear-gradient(187.83deg, rgb(17, 80, 154) 0%, rgb(37, 135, 212) 100%);
  color: rgba(255, 255, 255, 1);
}

.info-icon-card--primary-light .info-icon-card__title,
.info-icon-card--primary-light .btn-secondary__label {
  color: rgba(255, 255, 255, 1);
}

.info-icon-card--primary-light .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--primary-light .btn-secondary__icon {
  background: rgba(255, 255, 255, 1);
}

.info-icon-card--primary-light .btn-secondary__icon svg {
  color: rgba(19, 112, 185, 1);
}

/* =======================================================
   Tablet (744px - 1023px)
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .info-icon-card__body {
    border-radius: 24px;
    padding: 24px;
    row-gap: 32px;
  }

  .info-icon-card__content {
    row-gap: 20px;
  }
}

/* =======================================================
   Mobile (до 743px)
   ======================================================= */
@media (max-width: 743px) {
  .info-icon-card__body {
    border-radius: 20px;
    padding: 20px;
    row-gap: 24px;
  }

  .info-icon-card__content {
    row-gap: 16px;
  }
}
</style>
