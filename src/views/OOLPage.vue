<template>
  <div class="page-logistics">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section text-content _center">
          <div class="grid">
            <div class="col-8">
              <div class="app-section__head">
                <h1 class="text-h1">Отдел сопровождения образовательной логистики</h1>
              </div>
              <div class="text-content">
                <p class="text-body" style="margin-top: 0;">ООЛ занимается сбором исходной информации, необходимой для создания проекта расписания учебных занятий. Отвечает за разработку и составление расписания для различных учебных групп, включая распределение учебных занятий и промежуточных аттестаций.</p>
                <p class="text-body">Основные направления работы отдела:</p>
                <FeatureList :items="features"/>
                <p class="text-body"> При внедрении образовательных траекторий отдел формирует расписание для обучающихся и направлений профессионального роста, обеспечивая логическую последовательность и взаимосвязи между различными модулями в расписании.</p>
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
import ContactCardNoImage from "@/components/cards/ContactCardNoImage.vue";
import FeatureList from "@/components/FeatureList.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Об управлении', to: '/about' },
  { title: 'Отдел образовательной логистики', to: null }
])

const features = [
  'сбор исходной информации для построения проекта расписания;',
  'разработка и формирование для учебных групп расписания учебных занятий обучающихся;',
  'разработка и формирование для учебных групп расписания промежуточной аттестации обучающихся;',
  'формирование расписания обучающихся и направлении профессионального роста при внедрении образовательных траекторий;',
  'реализация взаимосвязей встреч между модулями в расписании;',
  'оптимизация расписания и графика использования аудиторного фонда университета;',
  'формирование отчетных форм по разработанному расписанию;',
  'формирование отчета о недостатках в системе составления расписания и реализация мероприятий по оптимизации учебного расписания при внедрении индивидуальных образовательных траекторий;',
  'участие в разработке годового плана УЦОТ в области оптимизации расписания и учебного аудиторного фонда.',
]

const contactData = {
  phones: [
    { number: '273-84-41 (24-41)', caption: 'Расписание ПИШ, Т-университет (кабинет 1-420)' },
    { number: '273-83-82 (23-82)', caption: 'Классическое расписание (кабинет 1-422)' },
    { number: '201-90-58 (40-58)', caption: 'Классическое расписание (кабинет 21-321а)' }
  ],
  emails: ['spu-06.1@donstu.ru'],
  addresses: [
    '344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420',
    '344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-422',
    '344022, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 21-321а',
  ],
  schedule: 'Пн-Пт 08:30 - 17:00 (обед с 12:30 по 13:00)'
}

const manager = {
  fullName: 'Гнедина Ольга Александровна',
  avatar: new URL('@/assets/avatars/ool/gnedina.jpeg', import.meta.url).href,
  post: 'начальник отдела',
  additionalPost: 'старший преподаватель',
  phone: '+8 (863) 273-84-41',
  email: 'ognedina@donstu.ru',
  detailsLink: 'https://donstu.ru/employees/gnedina-olga-aleksandrovna/'
}

const employees = ref([
  {
    fullName: 'Жевагина Аза Юрьевна',
    avatar: new URL('@/assets/avatars/ool/zhevagina.jpg', import.meta.url).href,
    post: 'ведущий документовед',
    detailsLink: 'https://donstu.ru/employees/zhevagina-aza-yurevna/'
  },
  {
    fullName: 'Коханюк Наталья Алексеевна',
    avatar: new URL('@/assets/avatars/ool/kohaniyk.jpg', import.meta.url).href,
    post: 'ведущий документовед',
    detailsLink: 'https://donstu.ru/employees/kokhanyuk-natalya-alekseevna/'
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
    gap: 0;
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