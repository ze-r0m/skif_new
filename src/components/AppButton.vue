<!--TODO: заданные размеры кнопки, ховер режим для слайдера и для карточек, блокировка по параметру одного из стилей-->
<template>
  <button
      class="custom-btn"
      :class="{
      'has-arrow': showArrow,
      'hover-inverted': hoverInverted
    }"
  >
    <span class="btn-text"><slot /></span>
    <span v-if="showArrow" class="btn-arrow">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
      >
        <path
            d="M1.41 0 0 1.41l4.58 4.59L0 10.59 1.41 12l6-6-6-6z"
            fill="currentColor"
        />
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  name: "GradientButton",
  props: {
    showArrow: {
      type: Boolean,
      default: true
    },
    hoverInverted: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.custom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  backdrop-filter: blur(6px);
}

.btn-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  margin-left: 8px;
  transition: background 0.3s ease;
}

.custom-btn:hover:not(.hover-inverted) {
  background: linear-gradient(90deg, #0072ce 0%, #005bb5 100%);
}

.custom-btn:hover:not(.hover-inverted) .btn-arrow {
  background: rgba(255, 255, 255, 0.25);
}

.hover-inverted {
  background: linear-gradient(90deg, #0072ce 0%, #005bb5 100%);
}

.hover-inverted:hover {
  background: rgba(255, 255, 255, 0.25);
}

.hover-inverted:hover .btn-arrow {
  background: rgba(255, 255, 255, 0.25);
}
</style>
