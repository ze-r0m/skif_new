<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    :class="['info-icon-card', `info-icon-card--${variant}`]"
    :to="isExternal ? undefined : link"
    :href="isExternal ? link : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <div class="info-icon-card__body">
      <div class="info-icon-card__content">
        <h3 class="info-icon-card__title text-h3">{{ title }}</h3>
        <p class="info-icon-card__description text-body" v-html="description"></p>
      </div>
      <div class="info-icon-card__footer">
        <span class="info-icon-card__button btn-secondary text-button">
          <span class="btn-secondary__label">Подробнее</span>
          <span class="btn-secondary__icon">
            <svg class="_icon-arrow-right" width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2514 28.4213C11.9902 28.4213 11.7289 28.325 11.5227 28.1188C11.1239 27.72 11.1239 27.06 11.5227 26.6613L20.4877 17.6963C21.1477 17.0363 21.1477 15.9638 20.4877 15.3038L11.5227 6.33876C11.1239 5.94001 11.1239 5.28001 11.5227 4.88126C11.9214 4.48251 12.5814 4.48251 12.9802 4.88126L21.9452 13.8463C22.6464 14.5475 23.0452 15.4963 23.0452 16.5C23.0452 17.5038 22.6602 18.4525 21.9452 19.1538L12.9802 28.1188C12.7739 28.3113 12.5127 28.4213 12.2514 28.4213Z" fill="currentColor"/>
            </svg>
          </span>
        </span>
      </div>
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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
    validator: (value) => ['white', 'primary', 'primary-light', 'gradient'].includes(value)
  }
})

const isExternal = computed(() => props.link && (props.link.startsWith('http://') || props.link.startsWith('https://')))
</script>

<style scoped>
/* =======================================================
   Desktop styles (по структуре сайта ДГТУ)
   ======================================================= */
.info-icon-card {
  display: block;
  height: 100%;
  text-decoration: none;
}

.info-icon-card__body {
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 40px;
  cursor: pointer;
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
   Вариант: White (rgba(255, 255, 255, 1))
   ======================================== */
.info-icon-card--white .info-icon-card__body {
  background: rgba(255, 255, 255, 1);
  color: rgba(56, 66, 79, 1);
  transition: background .35s ease;
}

.info-icon-card--white .info-icon-card__body:hover {
  background: rgba(233, 237, 242, 1);
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
  transition: background .35s ease;
}

.info-icon-card--white .info-icon-card__body:hover .btn-secondary__icon {
  background: #0E468B;
}

.info-icon-card--white .btn-secondary__icon svg {
  color: rgba(255, 255, 255, 1);
}

/* ========================================
   Вариант: Primary (синий rgba(17, 81, 156, 1))
   ======================================== */
.info-icon-card--primary .info-icon-card__body {
  background: rgba(17, 81, 156, 1);
  color: rgba(255, 255, 255, 1);
  transition: background .35s ease;
}

.info-icon-card--primary .info-icon-card__body:hover {
  background: rgba(14, 70, 139, 1);
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
   Вариант: Primary Light (rgba(19, 112, 185, 1))
   ======================================== */
.info-icon-card--primary-light .info-icon-card__body {
  background: rgba(19, 112, 185, 1);
  color: rgba(255, 255, 255, 1);
  transition: background .35s ease;
}

.info-icon-card--primary-light .info-icon-card__body:hover {
  background: rgba(17, 81, 156, 1);
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

/* ========================================
   Вариант: Gradient (градиент)
   ======================================== */
.info-icon-card--gradient .info-icon-card__body {
  background: linear-gradient(238.27deg, #11519C -4.32%, #288AD8 91.02%);
  color: rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
}

.info-icon-card--gradient .info-icon-card__body::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(237.17deg, #0E468B 19.27%, #1370B9 123.02%, #1370B9 123.02%);
  opacity: 0;
  transition: opacity .35s ease;
  z-index: 0;
  pointer-events: none;
}

.info-icon-card--gradient .info-icon-card__body:hover::before {
  opacity: 1;
}

.info-icon-card--gradient .info-icon-card__content,
.info-icon-card--gradient .info-icon-card__footer {
  position: relative;
  z-index: 1;
}

.info-icon-card--gradient .info-icon-card__title,
.info-icon-card--gradient .btn-secondary__label {
  color: rgba(255, 255, 255, 1);
}

.info-icon-card--gradient .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--gradient .btn-secondary__icon {
  background: rgba(255, 255, 255, 1);
}

.info-icon-card--gradient .btn-secondary__icon svg {
  color: rgba(19, 112, 185, 1);
}

/* =======================================================
   Tablet (744px - 1023px)
   ======================================================= */
@media (max-width: 1023px) {
  .info-icon-card__body {
    padding: 24px;
    row-gap: 32px;
  }

  .info-icon-card__content {
    row-gap: 24px;
  }

  .info-icon-card__footer{
    margin-top: 24px;
  }
}


</style>
