<template>
  <header class="site-header">
    <!-- Верхняя полоса -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <div class="top-links">
          <a href="https://do.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">ДО.СКИФ</a>
          <a href="https://skif.donstu.ru/test/" target="_blank" rel="noopener noreferrer">СКИФ.ТЕСТ</a>
          <a href="https://de.donstu.ru/zaoch/organizations/1" target="_blank" rel="noopener noreferrer">СКИФ.Библиотека</a>
          <a href="https://skif.donstu.ru/spec/" target="_blank" rel="noopener noreferrer">СКИФ.СПЕЦ</a>
          <a href="https://int.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">СКИФ.Международный</a>
          <a href="https://prof.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">ПРОФ.СКИФ</a>
        </div>
        <div class="dstu-link">
          <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer" class="link-button">
            Сайт ДГТУ
          </a>
        </div>
      </div>
    </div>

    <!-- Основная часть шапки -->
    <div class="main-header">
      <div class="container main-header-content">
        <div class="header-logos">
          <a href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconSkifSquare class="logo-skif-square" />
          </a>
          <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconDstu95 class="logo-dstu" />
          </a>
        </div>

        <nav class="main-nav">
          <a href="#" v-for="item in navItems" :key="item">{{ item }}</a>
        </nav>

        <div class="header-contacts">
          <AppButton text="+7 (863) 273-84-73" :showArrow="false" class="is-hovered" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from './AppButton.vue';
import IconDstu95 from "@/components/icons/IconDstu95.vue";
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";

const navItems = ref(['Начало', 'О нас', 'Системы', 'Обратная связь']);
</script>

<style scoped>
.site-header {
  border-bottom: 1px solid #e5e5e5;
}

/* верхняя полоса */
.top-bar {
  background-color: #f9f9f9;
  padding: 8px 0;
  font-size: 14px;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-links a {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.top-links a:hover {
  color: #004a8f;
}

/* Ссылка Сайт ДГТУ */
.link-button {
  margin-left: 20px;
  text-decoration: none;
  color: #333; /* как обычные ссылки */
  padding: 4px 12px;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  z-index: 0;
}

.link-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(208.61deg, rgb(15, 72, 143) 0%, rgb(23, 117, 191) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1; /* фон под текстом */
}

.link-button:hover::before {
  opacity: 1;
}

.link-button:hover {
  color: #fff;
}

/* контейнер */
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

/* основная шапка */
.main-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}

.header-logos {
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo-skif-square {
  height: 90px;
  width: 90px;
}

.logo-dstu {
  height: 50px;
  width: auto;
}

.main-nav a {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
}

.main-nav a:hover {
  color: #004a8f;
}

.header-contacts {
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  white-space: nowrap;
}
</style>
