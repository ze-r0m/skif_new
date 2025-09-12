<template>
  <div class="mobile-menu-overlay" :class="{ 'is-active': isMobileMenuOpen }">
    <div class="mobile-header-logos">
      <a href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer">
        <IconSkifSquare class="logo-skif-square" />
      </a>
      <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/DstuLogo95.png" alt="ДГТУ" class="logo-dstu" />
      </a>
    </div>
    <div class="mobile-header-separator"></div>

    <nav class="mobile-nav">

      <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="emit('close')"
      >
        {{ item.title }}
      </a>


      <div class="additional-links">
        <a href="https://skif.donstu.ru/test/">СКИФ.ТЕСТ</a>
        <a href="https://de.donstu.ru/zaoch/organizations/1">СКИФ.Библиотека</a>
        <a href="https://skif.donstu.ru/spec/">СКИФ.СПЕЦ</a>
        <a href="https://prof.skif.donstu.ru/">ПРОФ.СКИФ</a>
        <a href="https://int.skif.donstu.ru/">СКИФ.Международный</a>
        <a href="https://do.skif.donstu.ru/">ДО.СКИФ</a>
      </div>

      <div class="bottom-links">
        <a href="https://skif.donstu.ru/old" class="dstu-link">Старая версия сайта</a>
        <a href="https://donstu.ru/" class="dstu-link">Сайт ДГТУ</a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";

const props = defineProps({
  isMobileMenuOpen: Boolean,
  navItems: Array
});
const emit = defineEmits(['close']); // событие закрытия
</script>

<style scoped>
/* Стили для мобильного меню */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #11519c;
  transform: translateX(100%);
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 100;
  padding: 10px 20px 20px;
}

.mobile-menu-overlay.is-active {
  transform: translateX(0);
}

.mobile-header-logos {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}
.mobile-header-separator {
  width: 100vw;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 20px;
  position: relative;
  left: calc(-50vw + 50%);
}

.logo-skif-square {
  height: 60px;
  width: 60px;
}

.logo-dstu {
  height: 35px;
  width: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding-bottom: 20px;
}

.mobile-nav a {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e5e5e5;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-bottom: 22px;
}

.mobile-nav a:hover {
  color: #004a8f;
}

.additional-links {
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 22px;
}
.bottom-links {
  margin-top: auto;       /* прижимает к низу */
  display: flex;
  flex-direction: column;
  gap: 18px;
}


/* Скрываем на десктопе */
@media (min-width: 992px) {
  .mobile-menu-overlay {
    display: none;
  }
}
</style>