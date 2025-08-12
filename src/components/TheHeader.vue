<template>
  <header class="site-header">
    <div class="top-bar">
      <div class="container">
        <span>ДО.СКИФ</span>
        <span>СКИФ.ТЕСТ</span>
        <span>СКИФ.Библиотека</span>
        <span>СКИФ.Заочный</span>
        <span>СКИФ.СПЕЦ</span>
        <span>СКИФ.Международный</span>
      </div>
    </div>
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
          <AppButton kind="secondary"><span>+7 (863) 273-84-73</span></AppButton>
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
.top-bar {
  background-color: #f9f9f9;
  padding: 8px 0;
  font-size: 14px;
}
.top-bar span {
  margin-right: 20px;
  cursor: pointer;
}
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}
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