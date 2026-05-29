<template>
  <div class="app-menu-cons js-app-menu" :class="{ '_menu-opened': isMobileMenuOpen }">
    <div class="app-menu-cons__bg" @click="emit('close')"></div>
    <div class="app-menu-cons__content">
      <div class="app-menu__top">
        <div class="container">
          <div class="app-menu-cons__inner _top">
            <a class="app-menu-cons__sites-menu" :href="MAIN_SITE">Главный сайт</a>
            <a class="app-menu-cons__sites-menu" :href="OLD_SITE">Старая версия сайта</a>
          </div>
        </div>
      </div>
      <div class="app-menu-cons__bottom">
        <div class="container">
          <div class="app-menu-cons__inner _bottom">
            <div class="app-menu-cons__logo">
              <div class="app-menu-cons__logo-group">
                <a :href="SKIF_SITE">
                  <IconSkifSquare class="_icon-logo-skif" />
                </a>
                <a :href="MAIN_SITE">
                  <IconDstuUcotBrandWhite class="_icon-logo-dstu" />
                </a>
              </div>
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
                    <MainButton v-if="isMobile" :disable-animation="true" variant="light" class="menu-main-btn" :href="item.to" :text="item.title" :new-tab="false" />
                    <a v-else :href="item.to" @click="emit('close')">{{ item.title }}</a>
                  </li>
                  <li v-for="link in serviceLinks" :key="link.id">
                    <MainButton v-if="isMobile" :disable-animation="true" variant="light" class="menu-main-btn" :href="link.href" :text="link.title" :new-tab="false" />
                    <a v-else :href="link.href" @click="emit('close')">{{ link.title }}</a>
                  </li>
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
import { defineProps, ref, onMounted, onUnmounted } from 'vue'
import IconSkifSquare from '@/components/icons/IconSkifSquare.vue'
import IconDstuUcotBrandWhite from '@/components/icons/IconDstuUcotBrandWhite.vue'
import IconClose from '@/components/icons/IconClose.vue'
import MainButton from "@/components/MainButton.vue";
import { serviceLinks, SKIF_SITE, MAIN_SITE, OLD_SITE } from '@/data/navigation.js'

const props = defineProps({
  isMobileMenuOpen: Boolean,
  navItems: Array
})
const emit = defineEmits(['close'])

const isMobile = ref(false)
let mql = null

const onMqlChange = (e) => { isMobile.value = e.matches }

onMounted(() => {
  mql = window.matchMedia('(max-width: 767px)')
  isMobile.value = mql.matches
  mql.addEventListener('change', onMqlChange)
})

onUnmounted(() => {
  if (mql) mql.removeEventListener('change', onMqlChange)
})
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
  overflow: hidden;
  visibility: hidden;
  pointer-events: none;
}

.app-menu-cons._menu-opened {
  visibility: visible;
  pointer-events: auto;
}

.app-menu-cons__bg {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0;
  transition: visibility 0s ease .35s, opacity .35s ease;
  visibility: hidden;
}

._menu-opened .app-menu-cons__bg {
  opacity: 1;
  transition: visibility 0s ease .1s, opacity .35s ease .1s;
  visibility: visible;
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
  opacity: 0;
  transform: translateY(-1%);
  transition: visibility 0s ease .35s, transform .35s ease, opacity .35s ease;
  visibility: hidden;
  overflow-y: auto;
}

._menu-opened .app-menu-cons__content {
  opacity: 1;
  transform: translateY(0);
  transition: visibility 0s ease .2s, transform .35s ease .2s, opacity .35s ease .2s;
  visibility: visible;
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
  justify-content: space-between;
  margin-bottom: 32px;
}

.app-menu-cons__logo-group {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
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
  flex-shrink: 0;
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
  border-radius: 12px;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.app-menu__nav-list li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Mobile MainButton override */
.menu-main-btn {
  width: 100%;
  padding: 12px;
  gap: 17px;
  height: auto;
}

.menu-main-btn :deep(.main-button__text) {
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.7px;
}

/* ==================== Tablet (744-1023px) ==================== */
@media (min-width: 744px) and (max-width: 1023px) {
  .app-menu-cons__inner._bottom {
    padding-top: 30px;
  }

  .app-menu-cons__logo-group {
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
  .app-menu__top {
    height: 49px;
  }

  .app-menu-cons__sites-menu {
    font-size: 12px;
  }

  .app-menu-cons__inner._bottom {
    padding-top: 20px;
  }

  .btn-primary.text-button._menu {
    width: 40px;
    height: 40px;
    min-width: 40px;
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
