<template>
  <footer class="footer" id="js-footer">
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__head">
          <div class="footer__logos">
          <a class="footer__logo" href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer" data-animate="slide" data-animate-slide-direction="right">
            <IconSkifSquare class="logo-icon--skif" />
          </a>
          <a class="footer__logo footer__logo--dstu" href="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/" target="_blank" rel="noopener noreferrer" data-animate="slide" data-animate-slide-direction="right">
            <IconDstuUcotBrandWhite class="logo-icon--dstu" />
          </a>
          </div>
          <div class="footer__links">
            <a class="footer__link text-h4-desktop" href="https://do.skif.donstu.ru/" target="_blank" data-animate="slide" data-animate-slide-direction="right">ДО.СКИФ
              <IconLinkExternal class="footer__link-icon" />
            </a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/spec/" target="_blank" data-animate="slide" data-animate-slide-direction="right">СКИФ.СПЕЦ</a>
            <a class="footer__link text-h4-desktop" href="https://donstu.ru/" target="_blank" data-animate="slide" data-animate-slide-direction="right">Главный сайт
              <IconLinkExternal class="footer__link-icon" />
            </a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/test/" target="_blank" data-animate="slide" data-animate-slide-direction="right">СКИФ.ТЕСТ</a>
            <a class="footer__link text-h4-desktop" href="https://int.skif.donstu.ru/" target="_blank" data-animate="slide" data-animate-slide-direction="right">СКИФ.Международный
              <IconLinkExternal class="footer__link-icon" />
            </a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/old" target="_blank" data-animate="slide" data-animate-slide-direction="right">Старая версия сайта</a>
            <a class="footer__link text-h4-desktop" href="https://de.donstu.ru/zaoch/organizations/1" target="_blank" data-animate="slide" data-animate-slide-direction="right">СКИФ.Библиотека
              <IconLinkExternal class="footer__link-icon" />
            </a>
            <a class="footer__link text-h4-desktop" href="https://prof.skif.donstu.ru/" target="_blank" data-animate="slide" data-animate-slide-direction="right">ПРОФ.СКИФ
              <IconLinkExternal class="footer__link-icon" />
            </a>

          </div>
        </div>
        <div class="footer__contacts" data-animate="slide" data-animate-slide-direction="right">
          <div class="footer__tagline-wrapper">
            <div class="footer__tagline" data-animate="slide" data-animate-slide-direction="right">
              <img src="@/assets/slogan.png" alt="Слоган" />
            </div>
          </div>
          <div class="footer__contact-items">

            <div class="footer__contact-item" data-animate="slide" data-animate-slide-direction="right">
              <p class="text-body-bold-desktop">Управление цифровых образовательных технологий</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88632381583">8 863 238 15 83</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420а</address>
              <a class="footer__contact-link text-body-small" href="mailto:spu-06.1@donstu.ru">spu-06.1@donstu.ru</a>
            </div>
            <div class="footer__contact-item" data-animate="slide" data-animate-slide-direction="right">
              <p class="text-body-bold-desktop">Отдел сопровождения дистанционного образования</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88632738473">8 863 273 84 73</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-423</address>
              <a class="footer__contact-link text-body-small" href="mailto:bacharov@donstu.ru">bacharov@donstu.ru</a>
            </div>
            <div class="footer__contact-item" data-animate="slide" data-animate-slide-direction="right">
              <p class="text-body-bold-desktop">Отдел сопровождения образовательной логистики</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88632738441">8 863 273 84 41</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420</address>
              <a class="footer__contact-link text-body-small" href="mailto:ognedina@donstu.ru">ognedina@donstu.ru</a>
            </div>
          </div>
        </div>
        <div class="footer__foot">
          <p class="text-body-small footer__copyright" data-animate="slide" data-animate-slide-direction="right">Донской государственный технический университет ©&nbsp;{{ currentYear }}</p>
          <a class="footer__paraweb" href="https://paraweb.me/" target="_blank" rel="noopener noreferrer" data-animate="slide" data-animate-slide-direction="right" >
            <img src="@/assets/parawe-logo-xs.png" alt="paraweb" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";
import IconDstuUcotBrandWhite from "@/components/icons/IconDstuUcotBrandWhite.vue";
import IconLinkExternal from "@/components/icons/IconLinkExternal.vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* ==================== Общие ==================== */
.footer {
  background-color: rgba(14, 70, 139, 1);
  color: #ffffff;
}

.footer__head-contacts {
  display: none;
}

/* ==================== footer__head ==================== */
.footer__head {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 60px;
  align-items: flex-start;
  padding-top: 80px;
  padding-bottom: 56px;
}

.footer__logos {
  display: flex;
  gap: 20px;
  align-items: center;
  height: 65px;
}

.footer__logo {
  display: flex;
  align-items: center;
  height: 65px;
}

.logo-icon--skif {
  width: 65px;
  height: 65px;
}

.logo-icon--dstu {
  width: auto;
  height: 65px;
}

.footer__links {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
}

.footer__link {
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.footer__link-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.footer__link:hover {
  opacity: 0.7;
}

/* ==================== footer__contacts ==================== */
.footer__contacts {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 60px;
  align-items: flex-start;
  padding: 40px 0;
  border-top: 1px solid rgba(210, 218, 227, 0.30);
}

.footer__tagline {
  height: 34px;
  width: 320px;
}

.footer__tagline img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.footer__contact-items {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
}

.footer__contact-item {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__contact-item > .text-body-bold-desktop {
  margin: 0;
}

.footer__contact-item time {
  color: rgba(255, 255, 255, 0.70);
}

.footer__contact-link {
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer__contact-link:hover {
  opacity: 0.7;
}

.footer__contact-item address {
  font-style: normal;
}

/* ==================== footer__foot ==================== */
.footer__foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgba(210, 218, 227, 0.30);
}

.footer__copyright {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.footer__paraweb img {
  height: 20px;
  width: 94px;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

/* =======================================================
   изменение размеров лого при узком экране
   ======================================================= */
@media (min-width: 1024px) {
  .logo-icon--skif,
  .logo-icon--dstu,
  .footer__tagline {
    max-width: 100%;
  }
}

/* =======================================================
   Tablet (744px – 1023px)
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .footer__head {
    padding-top: 40px;
    padding-bottom: 32px;
  }

  .footer__logos {
    height: 56px;
    width: auto;
  }

  .footer__logo {
    height: 56px;
  }

  .logo-icon--skif {
    width: 56px;
    height: 56px;
  }

  .logo-icon--dstu {
    width: auto;
    height: 56px;
  }

  .footer__links {
    display: none;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column-reverse;
    gap: 32px;
    border-top: none;
    padding: 0;
  }

  .footer__contact-items {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .footer__tagline-wrapper {
    width: 100%;
    border-top: 1px solid rgba(210, 218, 227, 0.30);
    padding: 24px 0;
  }

  .footer__tagline {
    height: 26px;
    width: 260px;
  }

  .footer__foot {
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }



}

/* =======================================================
   Mobile (до 743px)
   ======================================================= */
@media (max-width: 743px) {

  .footer__head {
    padding-top: 40px;
    padding-bottom: 32px;
  }

  .footer__logos {
    height: 56px;
    width: auto;
  }

  .footer__logo {
    height: 56px;
  }

  .logo-icon--skif {
    width: 56px;
    height: 56px;
  }

  .logo-icon--dstu {
    width: auto;
    height: 56px;
  }

  .footer__links {
    display: none;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    border-top: none;
    padding: 0;
  }

  .footer__contact-items {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .footer__contact-item {
    gap: 8px;
  }

  .footer__contact-item > p{
    font-size: 14px;
  }

  .footer__tagline-wrapper {
    width: 100%;
    border-top: 1px solid rgba(210, 218, 227, 0.30);
    padding: 32px 0;
  }

  .footer__tagline {
    height: 26px;
    width: 260px;
  }

  .footer__foot {
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
