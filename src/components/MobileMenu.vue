<template>
  <div class="app-menu-cons js-app-menu" :class="{ '_menu-opened': isMobileMenuOpen }">
    <div class="app-menu-cons__bg" @click="emit('close')"></div>
    <div class="app-menu-cons__content">
      <div class="app-menu__top">
        <div class="container">
          <div class="app-menu-cons__inner _top">
            <a class="app-menu-cons__sites-menu" href="https://donstu.ru">Главный сайт</a>
            <a class="app-menu-cons__sites-menu" href="https://skif.donstu.ru/old">Старая версия сайта</a>
          </div>
        </div>
      </div>
      <div class="app-menu-cons__bottom">
        <div class="container">
          <div class="app-menu-cons__inner _bottom">
            <div class="app-menu-cons__logo">
              <a href="https://skif.donstu.ru/">
                <IconSkifSquare class="_icon-logo-skif" />
              </a>
              <a href="https://donstu.ru/">
                <IconDstuUcotBrandWhite class="_icon-logo-dstu" />
              </a>
              <button class="btn-primary text-button _menu js-menu-close" type="button" @click="emit('close')">
                <span class="btn-primary__background"></span>
                <span>Меню</span>
                <span class="btn-primary__icon">
                  <IconClose />
                </span>
              </button>
            </div>
            <div class="app-menu-cons__nav">
              <nav>
                <ul class="app-menu__nav-list">
                  <li v-for="item in navItems" :key="item.id">
                    <a :href="item.to" @click="emit('close')">{{ item.title }}</a>
                  </li>
                  <li><a href="https://do.skif.donstu.ru/" @click="emit('close')">ДО.СКИФ</a></li>
                  <li><a href="https://skif.donstu.ru/test/" @click="emit('close')">СКИФ.ТЕСТ</a></li>
                  <li><a href="https://de.donstu.ru/zaoch/organizations/1" @click="emit('close')">СКИФ.Библиотека</a></li>
                  <li><a href="https://skif.donstu.ru/spec/" @click="emit('close')">СКИФ.СПЕЦ</a></li>
                  <li><a href="https://prof.skif.donstu.ru/" @click="emit('close')">ПРОФ.СКИФ</a></li>
                  <li><a href="https://int.skif.donstu.ru/" @click="emit('close')">СКИФ.Международный</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import IconSkifSquare from '@/components/icons/IconSkifSquare.vue'
import IconDstuUcotBrandWhite from '@/components/icons/IconDstuUcotBrandWhite.vue'
import IconClose from '@/components/icons/IconClose.vue'

const props = defineProps({
  isMobileMenuOpen: Boolean,
  navItems: Array
})
const emit = defineEmits(['close'])
</script>

<style scoped>
/* ==================== Базовые ==================== */
.app-menu-cons {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: none;
  overflow: hidden;
}

.app-menu-cons._menu-opened {
  display: block;
}

.app-menu-cons__bg {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.app-menu-cons__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color, #11519C);
  display: flex;
  flex-direction: column;
  transform: translateY(-100%);
  transition: transform 0.35s ease;
  overflow-y: auto;
}

._menu-opened .app-menu-cons__content {
  transform: translateY(0);
}

/* ==================== Top section ==================== */
.app-menu__top {
  height: 68px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.app-menu-cons__inner._top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.app-menu-cons__sites-menu {
  font-family: 'GolosText', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.app-menu-cons__sites-menu:hover {
  color: #fff;
}

.app-menu__top .container {
  display: flex;
  align-items: center;
  height: 100%;
}

/* ==================== Bottom section ==================== */
.app-menu-cons__bottom {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-menu-cons__inner._bottom {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 24px;
}

/* Logo row + close button */
.app-menu-cons__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.app-menu-cons__logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

._icon-logo-skif {
  height: 40px;
  width: 40px;
}

._icon-logo-dstu {
  height: 40px;
  width: auto;
}

/* Кнопка закрытия — стилизована под menu-button из хедера */
.btn-primary.text-button._menu {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #1370B9;
  color: #fff;
  font-family: 'GolosText', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  padding: 16px 20px;
  margin-left: auto;
  min-width: 108px;
  height: 56px;
  transition: background-color 0.3s ease;
  overflow: hidden;
}

.btn-primary.text-button._menu:hover {
  background-color: #0f5a8f;
}

.btn-primary__background {
  display: none;
}

.btn-primary__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn-primary__icon svg {
  width: 20px;
  height: 20px;
  color: #fff;
}

/* Navigation */
.app-menu-cons__nav {
  flex: 1;
}

.app-menu__nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.app-menu__nav-list li {
  margin: 0;
}

.app-menu__nav-list li a {
  font-family: 'GolosText', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  letter-spacing: -0.9px;
  color: #fff;
  text-decoration: none;
  padding: 12px;
  display: block;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.app-menu__nav-list li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* ==================== Tablet (744-1023px) ==================== */
@media (min-width: 744px) and (max-width: 1023px) {
  .app-menu-cons._menu-opened {
    display: block;
  }

  .app-menu-cons__inner._bottom {
    padding-top: 32px;
  }

  .app-menu-cons__logo {
    gap: 16px;
  }

  ._icon-logo-skif {
    height: 48px;
    width: 48px;
  }

  ._icon-logo-dstu {
    height: 48px;
    width: auto;
  }
}

/* ==================== Mobile (≤743px) ==================== */
@media (max-width: 743px) {
  .app-menu-cons._menu-opened {
    display: block;
  }

  .app-menu-cons__inner._bottom {
    padding-top: 20px;
  }

  .app-menu-cons__logo {
    gap: 8px;
  }

  ._icon-logo-skif {
    height: 40px;
    width: 40px;
  }

  ._icon-logo-dstu {
    height: 40px;
    width: auto;
  }

  .btn-primary.text-button._menu {
    width: 40px;
    height: 40px;
    min-width: unset;
    padding: 12px;
    justify-content: center;
  }

  .btn-primary.text-button._menu span:not(.btn-primary__icon) {
    display: none;
  }

  .btn-primary__icon {
    width: 16px;
    height: 16px;
  }

  .btn-primary__icon svg {
    width: 16px;
    height: 16px;
  }
}

/* ==================== Desktop (≥1024px) ==================== */
@media (min-width: 1024px) {
  .app-menu-cons {
    display: none !important;
  }
}
</style>
