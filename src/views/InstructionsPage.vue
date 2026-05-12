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
          <MediaCard
            title="Запрос на создание курса&nbsp;&mdash;&nbsp;заполнение карточки дисциплины"
            :image="previewInstr1"
            videoUrl="https://do.skif.donstu.ru/pluginfile.php/347801/mod_resource/content/7/2023-03-14%2012-01-57.mp4"
            @open="openVideo"
          />
          <MediaCard
              title="Работа в режиме конструктора&nbsp;&mdash;&nbsp;создание тестовых вопросов"
              :image="previewInstr2"
              videoUrl="https://do.skif.donstu.ru/pluginfile.php/347802/mod_resource/content/2/2023-03-14%2013-33-34.mp4"
              @open="openVideo"
          />
          <MediaCard
              title="Импорт заданий в текстовой форме&nbsp;&mdash;&nbsp;работа с текстовым файлом"
              :image="previewInstr3"
              videoUrl="https://do.skif.donstu.ru/pluginfile.php/472002/mod_resource/content/2/Инструкция_по_созданию_курса_на_скиф_тест.mp4"
              @open="openVideo"
          />
        </div>
      </div>
    </section>

    <VideoPopup
      :videoUrl="currentVideoUrl"
      :isOpen="isPopupOpen"
      @close="closePopup"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import BannerCard from "@/components/cards/BannerCard.vue";
import MediaCard from "@/components/cards/MediaCard.vue";
import VideoPopup from "@/components/VideoPopup.vue";
import mascotQue from '@/assets/maskot_question.png'
import previewInstr1 from '@/assets/preview_instuctions/pre_vid_instr1.png'
import previewInstr2 from '@/assets/preview_instuctions/pre_vid_instr2.png'
import previewInstr3 from '@/assets/preview_instuctions/pre_vid_instr3.png'

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Инструкции', to: null }
])

const isPopupOpen = ref(false)
const currentVideoUrl = ref('')

const openVideo = (url) => {
  currentVideoUrl.value = url
  isPopupOpen.value = true
}

const closePopup = () => {
  isPopupOpen.value = false
  currentVideoUrl.value = ''
}
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

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }
  .app-grid._columns-3-1{
    grid-template-columns: 1fr;
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