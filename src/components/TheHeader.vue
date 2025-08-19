<template>
  <header class="site-header">
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

        <div class="mobile-menu-toggle" :class="{ 'is-active': isMobileMenuOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="mobile-menu-overlay" :class="{ 'is-active': isMobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#" v-for="item in navItems" :key="item">{{ item }}</a>
      </nav>
      <div class="mobile-contacts">
        <AppButton text="+7 (863) 273-84-73" :showArrow="false" class="is-hovered" />
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
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};
</script>

<style scoped>
/* =======================================================
   Стили для всех устройств (Mobile-first подход)
   ======================================================= */
.site-header {
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  z-index: 100;
}

/* Верхняя полоса скрыта по умолчанию */
.top-bar {
  display: none;
}

/* Контейнер */
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Основная шапка */
.main-header {
  padding: 10px 0;
}

.main-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logos {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-skif-square {
  height: 60px;
  width: 60px;
}

.logo-dstu {
  height: 35px;
  width: auto;
}

/* Навигация и контакты скрыты по умолчанию */
.main-nav,
.header-contacts {
  display: none;
}

/* ===================== Мобильная кнопка ===================== */
.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 12px;
  background: linear-gradient(207.7deg, #0f488f 0%, #1775bf 100%);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  z-index: 101;
}

.mobile-menu-toggle:hover {
  background: linear-gradient(207.7deg, #15509f 0%, #1c82d0 100%);
}

.mobile-menu-toggle span {
  display: block;
  width: 60%;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Анимация бургер-меню */
.mobile-menu-toggle.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-menu-toggle.is-active span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-toggle.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===================== Мобильное меню ===================== */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.35s ease;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 20px;
  box-sizing: border-box;
  z-index: 100;
}

.mobile-menu-overlay.is-active {
  transform: translateX(0);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.mobile-nav a,
.mobile-contacts a {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-nav a:hover,
.mobile-contacts a:hover {
  color: #004a8f;
}

.mobile-contacts {
  margin-top: 40px;
}

/* ===================== Десктоп ===================== */
@media (min-width: 992px) {
  .top-bar {
    display: block;
  }

  .top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    font-size: 14px;
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

  .link-button {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
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
    z-index: -1;
  }

  .link-button:hover::before {
    opacity: 1;
  }

  .link-button:hover {
    color: #fff;
  }

  .main-nav,
  .header-contacts {
    display: flex;
  }

  .mobile-menu-toggle,
  .mobile-menu-overlay {
    display: none;
  }

  .main-nav a {
    margin: 0 15px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
  }

  .main-nav a:hover {
    color: #004a8f;
  }
}
</style>