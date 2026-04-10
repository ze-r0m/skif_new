<template>
  <footer class="footer" id="js-footer">
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__head">
          <div class="footer__logos">
          <a class="footer__logo" href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconSkifSquare class="logo-icon--skif" />
          </a>
          <a class="footer__logo footer__logo--dstu" href="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/" target="_blank" rel="noopener noreferrer">
            <IconDstuUcotBrandWhite class="logo-icon--dstu" />
          </a>
          </div>
          <div class="footer__links">
            <a class="footer__link text-h4-desktop" href="https://do.skif.donstu.ru/" target="_blank">ДО.СКИФ</a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/spec/" target="_blank">СКИФ.СПЕЦ</a>
            <a class="footer__link text-h4-desktop" href="https://donstu.ru/" target="_blank">Главный сайт</a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/test/" target="_blank">СКИФ.ТЕСТ</a>
            <a class="footer__link text-h4-desktop" href="https://int.skif.donstu.ru/" target="_blank">СКИФ.Международный</a>
            <a class="footer__link text-h4-desktop" href="https://skif.donstu.ru/old" target="_blank">Старая версия сайта</a>
            <a class="footer__link text-h4-desktop" href="https://de.donstu.ru/zaoch/organizations/1" target="_blank">СКИФ.Библиотека</a>
            <a class="footer__link text-h4-desktop" href="https://prof.skif.donstu.ru/" target="_blank">ПРОФ.СКИФ</a>

          </div>
        </div>
        <div class="footer__contacts">
          <div class="footer__tagline-wrapper">
            <div class="footer__tagline">
              <img src="@/assets/slogan.png" alt="Слоган" />
            </div>
          </div>
          <div class="footer__contact-items">
            <div class="footer__contact-item">
              <p class="text-body-small-bold">Приёмная ректора</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88632738525">8 863 273 85 25</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 250</address>
              <a class="footer__contact-link text-body-small" href="mailto:reception@donstu.ru">reception@donstu.ru</a>
            </div>
            <div class="footer__contact-item">
              <p class="text-body-small-bold">Приёмная комиссия</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88001001930">8 800 100 19 30</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, главный корпус, ауд. 143а, 102</address>
              <a class="footer__contact-link text-body-small" href="mailto:spu-33@donstu.ru">spu-33@donstu.ru</a>
            </div>
            <div class="footer__contact-item">
              <p class="text-body-small-bold">Пресс-служба</p>
              <time class="text-body-small">Пн. - Пт.: 8:30 - 17:00</time>
              <a class="footer__contact-link text-body-small" href="tel:88632381700">8 863 238 17 00</a>
              <address class="text-body-small">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 7-329</address>
              <a class="footer__contact-link text-body-small" href="mailto:isdstu@mail.ru">isdstu@mail.ru</a>
            </div>
            <div class="footer__contact-item">
              <p class="text-body-small-bold">Начальник УЦОТ</p>
              <p class="text-body-small footer__person">Шлыкова Алла Ивановна</p>
              <a class="footer__contact-link text-body-small" href="tel:+78632381583">+7 (863) 238-15-83 (внутр. 3583)</a>
              <address class="text-body-small">г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420а</address>
            </div>
            <div class="footer__contact-item">
              <p class="text-body-small-bold">Отдел сопровождения дистанционного образования</p>
              <p class="text-body-small footer__person">Начальник отдела — Ачаров Борис Фёдорович</p>
              <a class="footer__contact-link text-body-small" href="tel:+78632738473">+7 (863) 273-84-73 (внутр. 2473)</a>
              <address class="text-body-small">г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-423</address>
              <a class="footer__contact-link text-body-small" href="mailto:spu-06.1@donstu.ru">spu-06.1@donstu.ru</a>
            </div>
          </div>
        </div>
        <div class="footer__foot">
          <p class="text-body-small footer__copyright">Донской государственный технический университет ©&nbsp;{{ currentYear }}</p>
          <a class="footer__paraweb" href="https://paraweb.me/" target="_blank" rel="noopener noreferrer">
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

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* ==================== Общие ==================== */
.footer {
  background-color: #0E468B;
  color: #ffffff;
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

.footer__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 65px;
}
.footer__logos{
  gap: 20px;
  display: flex;
  height: 34px;
  width: 320px;
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
  gap: 3.2rem;
  grid-template-columns: repeat(3, 1fr);
}

.footer__contact-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__contact-item > .text-body-small-bold {
  color: #ffffff;
  margin: 0;
}

.footer__person {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.footer__contact-item time {
  color: rgba(255, 255, 255, 0.6);
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
  color: rgba(255, 255, 255, 0.6);
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
  width: auto;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.footer__paraweb:hover img {
  opacity: 1;
}

/* =======================================================
   Tablet (744px – 1023px)
   ======================================================= */
@media (min-width: 744px) and (max-width: 1023px) {
  .footer__bottom {
    padding-top: 40px;
  }

  .footer__head {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }

  .footer__links {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .footer__contacts {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0 40px ;
  }

  .footer__contact-items {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* =======================================================
   Mobile (до 743px)
   ======================================================= */
@media (max-width: 743px) {
  .footer__bottom {
    padding-top: 32px;
  }

  .footer__head {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-bottom: 24px;
  }

  .footer__links {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .logo-icon--skif {
    width: 48px;
    height: 48px;
  }

  .logo-icon--dstu {
    height: 32px;
  }

  .footer__contacts {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-top: 24px;
  }

  .footer__tagline {
    width: 100%;
    height: auto;
  }

  .footer__tagline img {
    height: 28px;
    width: auto;
  }

  .footer__contact-items {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer__foot {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    margin-top: 24px;
    padding: 16px 0;
  }
}
</style>
