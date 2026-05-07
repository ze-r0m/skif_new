<template>
  <div class="page-resource">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section text-content _center">
          <div class="grid">
            <div class="col-8">
              <div class="app-section__head">
                <h1 class="text-h1">Сектор ресурсного обеспечения образовательной деятельности</h1>
              </div>
              <div class="text-content">
                <p class="text-body" style="margin-top: 0;">Сектор ресурсного обеспечения образовательной деятельности (СРООД) отвечает за материально‑техническую и организационную поддержку учебного процесса в университете.</p>
                <p class="text-body">Основные направления работы сектора:</p>
                <FeatureList :items="features"/>
              </div>
            </div>
            <aside class="col-4">
              <div class="inner-wrapper-sticky">
                <ContactCardNoImage
                    :phones="contactData.phones"
                    :emails="contactData.emails"
                    :addresses="contactData.addresses"
                    :schedule="contactData.schedule"
                />
              </div>
            </aside>
          </div>
        </div>

      </div>
    </section>

    <section class="container app-section _gutter-sm">
      <div class="app-section__head">
        <h1 class="text-h1">Сотрудники</h1>
      </div>
      <div class="app-section__content">
        <div class="employees-section">
          <ContactCardLarge
            :fullName="manager.fullName"
            :avatar="manager.avatar"
            :post="manager.post"
            :additionalPost="manager.additionalPost"
            :phone="manager.phone"
            :email="manager.email"
            :detailsLink="manager.detailsLink"
          />
          <div class="employees-grid">
            <ContactCard
              v-for="employee in employees"
              :key="employee.fullName"
              :fullName="employee.fullName"
              :avatar="employee.avatar"
              :post="employee.post"
              :detailsLink="employee.detailsLink"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";
import ContactCard from "@/components/cards/ContactCard.vue";
import ContactCardLarge from "@/components/cards/ContactCardLarge.vue";
import FeatureList from "@/components/FeatureList.vue";
import ContactCardNoImage from "@/components/cards/ContactCardNoImage.vue";

// <!-- TODO: для деплоя убрать '/skif_new/v2/' из link (приписка используется для gh)-->
const breadcrumbs = ref([
  { title: 'Главная', to: '/skif_new/v2/' },
  { title: 'Об управлении', to: '/skif_new/v2/about/' },
  { title: 'Сектор ресурсного обеспечения', to: null }
])

const features = [
  'формирование предложений по модернизации аудиторного фонда университета;',
  'оптимизация расписания и графика использования аудиторного фонда университета;',
  'формирование и актуализация сведений об аудиторном фонде университета и его материально-техническом обеспечении;',
  'формирование аналитических отчетов в рамках деятельности сектора.'
]

const contactData = {
  phones: [
    { number: '273-86-70 (26-70)', caption: 'Сектор РООД, Почасовка (кабинет 1-418)'},

  ],
  emails: ['spu-06.1@donstu.ru'],
  addresses: ['344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-418',],
  schedule: 'Пн-Пт 08:30 - 17:00 (обед с 12:30 по 13:00)'
}

const manager = {
  fullName: 'Недоступ Евгений Александрович',
  avatar: new URL('@/assets/avatars/resourse/nedostup.jpeg', import.meta.url).href,
  post: 'заведующий сектором',
  additionalPost: 'преподаватель',
  phone: '+8 (863) 273-84-41',
  email: 'resource@donstu.ru',
  detailsLink: 'https://donstu.ru/employees/nedostup-evgeniy-aleksandrovich/'
}

const employees = ref([
  {
    fullName: 'Великдань Дарья Алексеевна',
    avatar: new URL('@/assets/avatars/resourse/velikdan.jpeg', import.meta.url).href,
    post: 'аналитик',
    detailsLink: 'https://donstu.ru/employees/velikdan-darya-alekseevna/'
  },
  // {
  //   fullName: 'Иванов Иван Иванович',
  //   avatar: '',
  //   post: 'Специалист',
  //   detailsLink: '/employees/ivanov-ivan/'
  // },

])
</script>

<style scoped>
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

.employees-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.employees-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid{
  gap: 88px;
}

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }

  .employees-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid {
    display: flex;
    flex-direction: column;
  }

  .grid > .col-8 { order: 2; }
  .grid > .col-4 { order: 1; }

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