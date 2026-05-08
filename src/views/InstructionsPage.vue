<template>
  <div class="page-instructions">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="container app-section _center _gutter-md">
      <BannerCard
        title="Перечень инструкций по работе с сервисами платформы СКИФ"
        text="Возникли вопросы по составлению, проведению или настройке тестирования в системе СКИФ? Мы подготовили специальный обучающие инструкции, которые помогут эффективно работать с платформой."
        :image="mascotQue"
        :imageStyles="{ transform: 'translateX(0%) scale(1.4)', width: '35%' }"
        buttonText="Открыть инструкции"
        buttonHref="https://do.skif.donstu.ru/course/view.php?id=418"
      />

    </section>

    <section class="container app-section _center _gutter-md">
      <div class="app-section__head">
        <h1 class="text-h1">Видеоинструкции</h1>
      </div>
      <div class="app-section__content text-content">
        <p class="text-body" style="margin-top: 0">Наглядные обучающие ролики пошагово демонстрируют ключевые функции системы: от регистрации и входа в личный кабинет до составления тестов и проверки результатов, настройки параметров тестирования и анализа результатов. Видеоматериалы структурированы по темам, выберите необходимый их них и получите ответы на возникающие вами вопросы.</p>

        <div class="app-grid _columns-3-1">
<!--//TODO: вынести карточку в отдельный элемент, доработать нажатие и наведение на карточку, js скрипт и всплывающее окно с плеером-->
          <div class="media-card">
            <div class="media-card__media">
              <div class="media-card__video">
                <img src="@/assets/fasad.jpg" alt="инструкция1">

              </div>
              <div class="media-card__play">
                <button class="btn-secondary text-button media-card__play-btn   _contrast _outline" type="button" style="">
                  <span class="btn-secondary__icon _no-bg">
                    <IconPlay class="_icon-play"></IconPlay>
                  </span>
                </button>
              </div>

            </div>
            <h4 class="text-h4-desktop media-card__title" style="margin: 0">Видеоинструкция №1</h4>
          </div>


        </div>




      </div>
    </section>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import BannerCard from "@/components/cards/BannerCard.vue";
import documentsImg from '@/assets/documents.png';
import mascotQue from '@/assets/maskot_question.png'
import IconPlay from "@/components/icons/IconPlay.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Инструкции', to: null }
])
</script>

<style scoped>
.page-instructions {
  width: 100%;
}

.app-section {
  margin-bottom: 80px;
}

.app-section__head {
  margin-top: 0;
  margin-bottom: 40px;
}

.app-section__head h1 {
  margin: 0;
}

.app-grid {
  display: grid;
  flex-grow: 1;
  gap: 20px;
}

.app-grid._columns-3-1 {
  grid-template-columns: repeat(3, 1fr);
}

.media-card {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.media-card__media {
  border-radius: 32px;
  height: 300px;
  margin-bottom: 4px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.media-card._video .media-card__media {
  cursor: pointer;
  position: relative;
}
.media-card__video {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.media-card__play, .media-card__play:before {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.media-card__play {
  pointer-events: none;
}
.media-card__play, .media-card__play-btn {
  align-items: center;
  display: flex;
  justify-content: center;
}

.btn-secondary._outline._contrast {
  background-color: rgba(255, 255, 255, 0.20);;
  border-color: var(--divider-contrast-color);
  color: var(--text-contrast-color);
}
.btn-secondary._outline {
  border: 1px solid #D2DAE3;
  border-radius: 12px;
  color: var(--text-2-color);
  font-size: 1.4rem;
  font-weight: 500;
  gap: 8px;
  line-height: 20px;
  padding: 8px 16px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.media-card__play-btn {
  z-index: 2;
}

.btn-secondary._contrast .btn-secondary__icon._no-bg {
  background-color: transparent;
  color: var(--text-contrast-color);
}
.btn-secondary._outline .btn-secondary__icon {
  height: 20px;
  width: 20px;
}
.btn-secondary._outline._contrast svg {
  color: var(--text-contrast-color);
}

.btn-secondary._outline._contrast .btn-secondary__icon._no-bg {
  color: var(--text-contrast-color);
}

.media-card__media iframe, .media-card__media img, .media-card__media video {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
img, picture img {
  display: block;
}
img {
  border-style: none;
}
*, :after, :before {
  box-sizing: border-box;
  outline: none;
}
.btn-secondary__icon {
  align-items: center;
  background-color: #1370b9;
  border-radius: 8px;
  color: var(--text-contrast-color);
  display: flex;
  flex-shrink: 0;
  height: 24px;
  justify-content: center;
  transition: background-color .35s ease;
  width: 24px;
}

.media-card__play:before {
  background-color: rgba(0, 0, 0, .4);
  content: "";
}

.media-card__play, .media-card__play:before {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
*, :after, :before {
  box-sizing: border-box;
  outline: none;
}

.media-card__title {
  color: #38424F;
  transition: color .35s ease;
}

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }
}

@media (max-width: 743px) {
  .app-section {
    margin-bottom: 40px;
  }

  .app-section__head {
    margin-bottom: 24px;
  }
}
</style>