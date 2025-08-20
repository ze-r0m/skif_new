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

    <nav class="mobile-nav">
      <a href="#" v-for="item in navItems" :key="item">{{ item }}</a>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";
import IconUcotHorizont from "@/components/icons/IconUcotHorizont.vue";

const props = defineProps({
  isMobileMenuOpen: Boolean,
  navItems: Array
});
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
  margin-bottom: 40px;
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
  gap: 22px;
}

.mobile-nav a {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e5e5e5;
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-nav a:hover {
  color: #004a8f;
}

/* Скрываем на десктопе */
@media (min-width: 992px) {
  .mobile-menu-overlay {
    display: none;
  }
}
</style>