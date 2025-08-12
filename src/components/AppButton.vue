<template>
  <button :class="['app-button', `btn-${kind}`]">
    <slot></slot> </button>
</template>

<script setup>
// Определяем props для компонента
defineProps({
  kind: {
    type: String,
    default: 'primary', // 'primary' или 'secondary'
  },
});
</script>

<style scoped>
.app-button {
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  border: 2px solid transparent;
}

/* Основной стиль кнопки */
.btn-primary {
  background-color: #004a8f;
  color: #ffffff;
}
.btn-primary:hover {
  background-color: #005cb3; /* Немного светлее при наведении */
}

/* Второстепенный стиль кнопки */
.btn-secondary {
  background-color: #ffffff;
  color: #004a8f;
  border: 2px solid #004a8f;
}
.btn-secondary:hover {
  background-color: #f0f5fa;
}
</style>