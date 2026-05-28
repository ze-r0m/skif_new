<template>
  <header class="site-header" id="js-header">
    <div class="top-bar" data-animate="slide">
      <div class="container">
        <div class="top-bar-content">
          <div class="top-links-left">
            <a href="https://donstu.ru/" class="link-always-mobile" data-animate="data-animate">Главный сайт</a>
            <a href="https://skif.donstu.ru/old" class="link-hide-mobile link-hide-1" data-animate="data-animate">Старая версия сайта</a>
          </div>

          <div class="top-links-right">
            <a href="https://do.skif.donstu.ru/" class="link-always" data-animate="data-animate">ДО.СКИФ</a>
            <a href="https://skif.donstu.ru/test/" class="link-always" data-animate="data-animate">СКИФ.ТЕСТ</a>
            <a href="https://de.donstu.ru/zaoch/organizations/1" class="link-hide-tablet link-hide-5" data-animate="data-animate">СКИФ.Библиотека</a>
            <a href="https://skif.donstu.ru/spec/" class="link-hide-tablet link-hide-4" data-animate="data-animate">СКИФ.СПЕЦ</a>
            <a href="https://int.skif.donstu.ru/" class="link-hide-tablet link-hide-3" data-animate="data-animate">СКИФ.Международный</a>
            <a href="https://prof.skif.donstu.ru/" class="link-hide-tablet link-hide-2" data-animate="data-animate">ПРОФ.СКИФ</a>
          </div>
        </div>
      </div>
    </div>

    <div class="main-header" data-animate="slide">
      <div class="container">
        <div class="main-header-content">
          <div class="header-logos">
            <a href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer" data-animate>
              <IconSkifSquare class="logo-skif-square"/>
            </a>
            <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer" data-animate>
              <IconDstuUcotBrandBlue class="logo-dstu"  />
            </a>
          </div>

          <nav class="main-nav">
            <a v-for="item in navItems" :key="item.id" :href="item.to" class="nav-link" data-animate="data-animate">{{ item.title }}</a>
          </nav>

          <!-- Кнопка меню для Tablet -->
          <button
              class="menu-button menu-button--tablet"
              :class="{ 'is-active': isMobileMenuOpen }"
              @click="toggleMobileMenu"
              data-animate="data-animate"
          >
            <span class="menu-button__text">Меню</span>
            <IconBurgerMenu class="menu-button__icon" />
          </button>

          <!-- Кнопка меню для Mobile -->
          <button
              class="menu-button menu-button--mobile"
              :class="{ 'is-active': isMobileMenuOpen }"
              @click="toggleMobileMenu"
              data-animate="data-animate"
          >
            <IconBurgerMenu class="menu-button__icon" />
          </button>

        </div>
      </div>
    </div>

    <MobileMenu
        :isMobileMenuOpen="isMobileMenuOpen"
        :navItems="navItems"
        @close="toggleMobileMenu"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";
import MobileMenu from './MobileMenu.vue';
import IconDstuUcotBrandBlue from "@/components/icons/IconDstuUcotBrandBlue.vue";
import IconBurgerMenu from "@/components/icons/IconBurgerMenu.vue";

// <!-- TODO: для деплоя убрать '/skif_new/v2/' из link (приписка используется для gh)-->
const navItems = ref([
  { id: 'home', title: 'Главная', to: '/skif_new/v2/' },
  { id: 'about', title: 'Об управлении', to: '/skif_new/v2/about/' },
  { id: 'instructions', title: 'Инструкции', to: '/skif_new/v2/instructions/' },
  // { id: 'systems', title: 'Системы', to: '/skif_new/v2/#systems' },
  // { id: 'creating_courses', title: 'Разработка курсов', to: '/skif_new/v2/#creating_courses' },
]);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
  document.body.classList.toggle('menu-open', isMobileMenuOpen.value);
};
</script>

<style scoped>
/* ==================== Общие ==================== */
.site-header {
  position: relative;
  z-index: 100;
}

/* Top bar - показывается всегда на всех устройствах */
.top-bar {
  display: block;
  border-bottom: 1px solid #e5e5e5;
  height: 68px;
  width: 100%;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
  flex-wrap: nowrap;
}

.top-links-left {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  min-width: 0;
}

.top-links-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 1;
  justify-content: flex-end;
  min-width: 0;
  overflow: hidden;
}

/* общий стиль ссылок top-bar */
.top-bar a {
  text-decoration: none;
  color: #80889D;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.24px;
  transition: opacity 0.35s ease, color 0.35s ease;
  white-space: nowrap;
}

.top-bar a:hover {
  color: #C7C9CF;
}

/* Скрытие ссылок по умолчанию (mobile) */
.link-hide-mobile {
  display: none;
}

.link-always {
  display: inline-block;
}

.link-always-mobile {
  display: inline-block;
}

.link-hide-tablet {
  display: none;
}

/* Ссылки для плавного скрытия */
.link-hide-1,
.link-hide-2,
.link-hide-3,
.link-hide-4,
.link-hide-5 {
  display: inline-block;
}

/* Main header */


.main-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logos {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-skif-square {
  height: 40px;
  width: 40px;
}

.logo-dstu {
  width: 140px;
  height: 40px;
}

.main-nav {
  display: none;
}

/* ===================== Кнопка меню Tablet ===================== */
.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #1370B9;
  transition: background-color 0.3s ease;
}

.menu-button:hover {
  background-color: #0f5a8f;
}

.menu-button__text {
  font-family: 'GolosText', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: #FFFFFF;
  white-space: nowrap;
}

.menu-button__icon {
  width: 24px;
  height: 24px;
  color: #FFFFFF;
  flex-shrink: 0;
}

/* Tablet кнопка */
.menu-button--tablet {
  display: none;
  min-width: 108px;
  height: 56px;
  padding: 16px 20px;
  justify-content: flex-start;
}

.menu-button--tablet .menu-button__text {
  font-size: 16px;
  line-height: 24px;
}

.menu-button--tablet .menu-button__icon {
  width: 20px;
  height: 20px;
}

/* Mobile кнопка: 40×40, только иконка */
.menu-button--mobile {
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
}

.menu-button--mobile .menu-button__text {
  display: none;
}

.menu-button--mobile .menu-button__icon {
  width: 16px;
  height: 16px;
}

/* ===================== Tablet (8 колонок) ===================== */
@media (min-width: 744px) and (max-width: 1023px) {
  .main-header {
    padding-top: 32px;
  }

  .logo-skif-square {
    height: 48px;
    width: 48px;
  }

  .logo-dstu {
    width: auto;
    height: 48px;
  }

  .header-logos {
    gap: 16px;
  }

  .top-links-left {
    gap: 24px;
  }

  .top-links-right {
    gap: 16px;
  }

  /* Показываем левые ссылки и часть правых */
  .link-hide-mobile {
    display: inline-block;
  }

  .link-hide-tablet,
  .link-hide-1,
  .link-hide-2,
  .link-hide-3,
  .link-hide-4,
  .link-hide-5 {
    display: none;
  }

  /* Показываем tablet кнопку меню */
  .menu-button--tablet {
    display: flex;
  }

  .menu-button--mobile {
    display: none;
  }
}

/* ===================== Mobile (до 743px) ===================== */
@media (max-width: 743px) {
  .main-header {
    padding-top: 20px;
  }

  .logo-skif-square {
    height: 40px;
    width: 40px;
  }

  .logo-dstu {
    width: auto;
    height: 40px;
  }

  .top-bar{
    height: 49px;
  }

  .top-bar a{
    font-size: 12px;
  }

  .header-logos {
    gap: 12px;
  }

  .top-links-left {
    gap: 24px;
  }

  .top-links-right {
    gap: 12px;
  }

  /* Скрываем левые и часть правых ссылок */
  .link-hide-mobile,
  .link-hide-1,
  .link-hide-2,
  .link-hide-3,
  .link-hide-4,
  .link-hide-5 {
    display: none;
  }

  .link-hide-tablet {
    display: none;
  }

  /* Показываем mobile кнопку меню */
  .menu-button--tablet {
    display: none;
  }

  .menu-button--mobile {
    display: flex;
  }
}

/* ===================== Desktop (12 колонок) ===================== */
@media (min-width: 1024px) {
  .site-header {
    height: 157px;
  }

  .main-header {
    padding-top: 32px;
  }

  .logo-skif-square {
    height: 56px;
    width: 56px;
  }

  .logo-dstu {
    width: auto;
    height: 56px;
  }

  .header-logos {
    gap: 20px;
  }

  .top-links-left {
    gap: 32px;
  }

  .top-links-right {
    gap: 32px;
  }

  /* Показываем все ссылки */
  .link-hide-mobile {
    display: inline-block;
  }

  .link-hide-tablet {
    display: inline-block;
  }

  /* Уменьшаем gap при сужении экрана для плавности */
  @media (max-width: 1400px) {
    .top-links-left {
      gap: 24px;
    }
    .top-links-right {
      gap: 24px;
    }
  }

  @media (max-width: 1300px) {
    .top-links-left {
      gap: 20px;
    }
    .top-links-right {
      gap: 20px;
    }
  }

  @media (max-width: 1200px) {
    .top-links-left {
      gap: 16px;
    }
    .top-links-right {
      gap: 16px;
    }
  }

  /* Скрываем ссылки по очереди когда расстояние между блоками = gap (16px) */
  @media (max-width: 1180px) {
    .link-hide-2 {
      display: none;
    }
  }

  @media (max-width: 1130px) {
    .link-hide-3 {
      display: none;
    }
  }

  @media (max-width: 1090px) {
    .link-hide-4 {
      display: none;
    }
  }

  @media (max-width: 1050px) {
    .link-hide-5 {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .link-hide-1 {
      display: none;
    }
  }

  /* Показываем навигацию */
  .main-nav {
    display: flex;
    gap: 24px;
  }

  /* Скрываем кнопки меню */
  .menu-button--tablet {
    display: none;
  }

  .menu-button--mobile {
    display: none;
  }

  .main-nav a,
  .main-nav .nav-link {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.24px;
    line-height: 24px;
    color: #38424F;
    text-decoration: none;
    transition: color 0.35s ease;
  }

  .main-nav a:hover,
  .main-nav .nav-link:hover {
    color: #C7C9CF;
  }
}
</style>