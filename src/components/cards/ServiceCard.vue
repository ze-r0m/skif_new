<template>
  <a
    :class="['info-icon-card', `info-icon-card--${variant}`]"
    :href="link"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    data-animate="data-animate"
  >
    <div class="info-icon-card__body">
      <div class="info-icon-card__content">
        <h3 class="info-icon-card__title text-h3" data-animate="data-animate">{{ title }}</h3>
        <p class="info-icon-card__description text-body" v-html="description"></p>
      </div>
      <div class="info-icon-card__footer">
        <span class="info-icon-card__button btn-secondary text-button">
          <span class="btn-secondary__label">Подробнее</span>
          <span class="btn-secondary__icon">
            <IconArrowRight />
          </span>
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

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

/* ========================================
   Вариант: White (rgba(255, 255, 255, 1))
   ======================================== */
.info-icon-card--white .info-icon-card__body {
  background: var(--element-bg);
  color: var(--text-color);
  transition: background .35s ease;
}

.info-icon-card--white .info-icon-card__body:hover {
  background: var(--element-bg-2);
}

.info-icon-card--white .info-icon-card__title,
.info-icon-card--white .btn-secondary__label {
  color: var(--text-color);
}

.info-icon-card--white .info-icon-card__description {
  color: var(--text-2-color);
}

.info-icon-card--white .btn-secondary__icon {
  background: var(--text-link-color);
  transition: background .35s ease;
}

.info-icon-card--white .info-icon-card__body:hover .btn-secondary__icon {
  background: var(--app-contrast-2);
}

.info-icon-card--white .btn-secondary__icon :deep(svg) {
  color: var(--text-contrast-color);
}

/* ========================================
   Вариант: Primary (синий rgba(17, 81, 156, 1))
   ======================================== */
.info-icon-card--primary .info-icon-card__body {
  background: var(--primary-color);
  color: var(--text-contrast-color);
  transition: background .35s ease;
}

.info-icon-card--primary .info-icon-card__body:hover {
  background: rgba(14, 70, 139, 1);
}

.info-icon-card--primary .info-icon-card__title,
.info-icon-card--primary .btn-secondary__label {
  color: var(--text-contrast-color);
}

.info-icon-card--primary .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--primary .btn-secondary__icon {
  background: var(--element-bg);
}

.info-icon-card--primary .btn-secondary__icon :deep(svg) {
  color: var(--text-link-color);
}

/* ========================================
   Вариант: Primary Light
   ======================================== */
.info-icon-card--primary-light .info-icon-card__body {
  background: var(--text-link-color);
  color: var(--text-contrast-color);
  transition: background .35s ease;
}

.info-icon-card--primary-light .info-icon-card__body:hover {
  background: var(--primary-color);
}

.info-icon-card--primary-light .info-icon-card__title,
.info-icon-card--primary-light .btn-secondary__label {
  color: var(--text-contrast-color);
}

.info-icon-card--primary-light .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--primary-light .btn-secondary__icon {
  background: var(--element-bg);
}

.info-icon-card--primary-light .btn-secondary__icon :deep(svg) {
  color: var(--text-link-color);
}

/* ========================================
   Вариант: Gradient (градиент)
   ======================================== */
.info-icon-card--gradient .info-icon-card__body {
  background: linear-gradient(238.27deg, #11519C -4.32%, #288AD8 91.02%);
  color: var(--text-contrast-color);
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
  color: var(--text-contrast-color);
}

.info-icon-card--gradient .info-icon-card__description {
  color: rgba(255, 255, 255, 0.7);
}

.info-icon-card--gradient .btn-secondary__icon {
  background: var(--element-bg);
}

.info-icon-card--gradient .btn-secondary__icon :deep(svg) {
  color: var(--text-link-color);
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

/* =======================================================
   Mobile (≤743px) — уменьшаем иконку
   ======================================================= */
@media (max-width: 743px) {
  .btn-secondary__icon {
    width: 20px;
    height: 20px;
  }

  .btn-secondary__icon :deep(svg) {
    width: 12px;
    height: 12px;
  }
}
</style>
