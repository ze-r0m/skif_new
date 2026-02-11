<template>
  <header class="site-header">
    <div class="top-bar">
      <div class="container top-bar-content">




        <div class="top-links-left">
          <a href="https://donstu.ru/">Главный сайт</a>
          <a href="https://skif.donstu.ru/old">Старая версия сайта</a>
        </div>

        <div class="top-links-right">
          <a href="https://do.skif.donstu.ru/">ДО.СКИФ</a>
          <a href="https://skif.donstu.ru/test/">СКИФ.ТЕСТ</a>
          <a href="https://de.donstu.ru/zaoch/organizations/1">СКИФ.Библиотека</a>
          <a href="https://skif.donstu.ru/spec/">СКИФ.СПЕЦ</a>
          <a href="https://int.skif.donstu.ru/">СКИФ.Международный</a>
          <a href="https://prof.skif.donstu.ru/">ПРОФ.СКИФ</a>
        </div>


<!--        <div class="top-links">-->
<!--          <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer">Главный сайт</a>-->
<!--          <a href="https://skif.donstu.ru/old" target="_blank" rel="noopener noreferrer">Старая версия сайта</a>-->

<!--          <div class="top-links-right">-->
<!--            <a href="https://do.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">ДО.СКИФ</a>-->
<!--            <a href="https://skif.donstu.ru/test/" target="_blank" rel="noopener noreferrer">СКИФ.ТЕСТ</a>-->
<!--            <a href="https://de.donstu.ru/zaoch/organizations/1" target="_blank" rel="noopener noreferrer">СКИФ.Библиотека</a>-->
<!--            <a href="https://skif.donstu.ru/spec/" target="_blank" rel="noopener noreferrer">СКИФ.СПЕЦ</a>-->
<!--            <a href="https://int.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">СКИФ.Международный</a>-->
<!--            <a href="https://prof.skif.donstu.ru/" target="_blank" rel="noopener noreferrer">ПРОФ.СКИФ</a>-->
<!--          </div>-->

<!--        </div>-->

      </div>
    </div>

    <div class="main-header">
      <div class="container main-header-content">
        <div class="header-logos">
          <a href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconSkifSquare class="logo-skif-square"/>
          </a>
          <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconDstuUcotBrandBlue class="logo-dstu"  />
          </a>
        </div>

        <nav class="main-nav">
          <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">{{ item.title }}</a>
        </nav>

<!--        <div class="header-contacts">-->
<!--          <AppButton text="+7 (863) 273-84-73" :showArrow="false" class="is-hovered" />-->
<!--        </div>-->

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

    <MobileMenu
        :isMobileMenuOpen="isMobileMenuOpen"
        :navItems="navItems"
        @close="toggleMobileMenu"
    />

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
import IconDstuUcotBrandBlue from "@/components/icons/IconDstuUcotBrandBlue.vue";

const navItems = ref([
  { id: 'about', title: 'О нас' },
  { id: 'systems', title: 'Системы' },
  { id: 'creating_courses', title: 'Разработка курсов' },
  // { id: 'feedback', title: 'Обратная связь' }
]);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};
</script>

<style scoped>
/* ==================== Общие ==================== */
.site-header {
  position: relative;
  z-index: 100;
  height: 157px;
}

.top-bar {
  display: none;
  border-bottom: 1px solid #e5e5e5;
  height: 69px;
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
  height: 40px;
  width: 40px;
}

.logo-dstu {
  width: 200px;
  height: 40px;
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
  .main-header{
    padding-top: 32px;
  }

  .logo-skif-square {
    height: 56px;
    width: 56px;
  }

  .logo-dstu {
    width: 269px;
    height: 56px;
  }

  .top-bar {
    display: block;
    height: 69px;
  }

  .top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;



    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.24px;
  }

  .top-links {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 3.2rem;
  }

  .top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-links-left,
  .top-links-right {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  /* общий стиль ссылок */
  .top-bar a {
    text-decoration: none;
    color: #80889D;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.24px;
    transition: opacity .35s ease, color .35s ease;
  }

  .top-bar a:hover {
    color: #C7C9CF;
  }



  .main-nav,
  .header-contacts {
    display: flex;
    gap: 2.4rem;
  }

  .mobile-menu-toggle{
    display: none;
  }

  .main-nav a {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -.24px;
    line-height: 2.4rem;


    color: #38424F;
    text-decoration: none;
  }

  .main-nav a:hover {
    color: #C7C9CF;
    transition: opacity .35s ease, color .35s ease, background-color .35s ease, border-color .35s ease;
  }
}
</style>