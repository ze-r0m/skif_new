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

        <div
            class="mobile-menu-toggle"
            :class="{ 'is-active': isMobileMenuOpen }"
            @click="toggleMobileMenu"
        >
          <IconMenu v-if="!isMobileMenuOpen" />
          <IconClose v-else />
        </div>
      </div>
    </div>

    <MobileMenu :isMobileMenuOpen="isMobileMenuOpen" :navItems="navItems" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import AppButton from './AppButton.vue';
import IconDstu95 from "@/components/icons/IconDstu95.vue";
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";
import MobileMenu from './MobileMenu.vue';
import IconMenu from "@/components/icons/IconMenu.vue";
import IconClose from "@/components/icons/IconClose.vue";

const navItems = ref(['Начало', 'О нас', 'Системы', 'Обратная связь']);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};
</script>

<style scoped>
/* ==================== Общие ==================== */
.site-header {
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  z-index: 100;
}

.top-bar {
  display: none;
}

.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

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

.main-nav,
.header-contacts {
  display: none;
}

/* ===================== Мобильная кнопка ===================== */
.mobile-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(208.61deg, rgb(15, 72, 143) 0%, rgb(23, 117, 191) 100%);
  position: relative;
  z-index: 200;
}

.mobile-menu-toggle svg {
  width: 24px;
  height: 24px;
  color: #fff;
}

.mobile-menu-toggle.is-active {
  background: #fff;
}

.mobile-menu-toggle.is-active svg {
  color: #11519c;
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