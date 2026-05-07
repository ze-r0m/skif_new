<template>
  <div class="page-department">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section text-content _center">
          <div class="grid">
            <div class="col-8">
              <div class="app-section__head">
                <h1 class="text-h1">Отдел сопровождения дистанционного образования</h1>
              </div>
              <div class="text-content">
                <p class="text-body" style="margin-top: 0;">Отдел СДО выполняет ряд ключевых функций, направленных на поддержку и развитие электронного обучения в ДГТУ. Он обеспечивает консультационную поддержку по использованию дистанционных технологий и внедрению электронного обучения, а также оказывает техническую и методическую помощь преподавателям в создании курсов электронного обучения, включая открытые онлайн-курсы.</p>
                <p class="text-body">Основные направления работы отдела:</p>
                <FeatureList :items="features"/>
                <p class="text-body">Отдел проводит техническую экспертизу контента и помогает кафедрам и авторам в разработке электронных учебно-методических изданий на портале электронного обучения ДГТУ.</p>
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

// TODO: при заливке на GH добавить '/skif_new/v2/' к to
const breadcrumbs = ref([
  { title: 'Главная', to: '/skif_new/v2/' },
  { title: 'Об управлении', to: '/skif_new/v2/about/' },
  { title: 'Отдел сопровождения дистанционного образования', to: null }
])

const features = [
  'консультирование по вопросам использования дистанционных технологий и реализации электронного обучения в ДГТУ;',
  'техническая и методическая поддержка преподавателей при разработке курсов электронного обучения, в том числе открытых онлайн-курсов, техническая экспертиза контента;',
  'методическая помощь кафедрам и авторам в создании электронных учебно-методических изданий на портале электронного обучения ДГТУ;',
  'осуществление аппаратно-программной поддержки портала электронного обучения, организация доступа пользователей к ресурсам портала с учетом политики разграничения прав;',
  'обеспечение работоспособности и техническое обслуживание компьютерного парка УЦОТ, внутренних сетей и программного обеспечения для реализации электронного обучения;',
  'техническая поддержка электронной системы обучения СКИФ ДГТУ.'
]

const contactData = {
  phones: [
    { number: '273-84-73 (24-73)', caption: 'Техническая поддержка СКИФ (кабинет 1-423)' },
    { number: '273-86-59 (24-59)', caption: 'Заочная форма обучения (кабинет 1-420)' },
  ],
  emails: ['spu-06.1@donstu.ru'],
  addresses: ['344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-423',],
  schedule: 'Пн-Пт 08:30 - 17:00 (обед с 12:30 по 13:00)'
}


const manager = {
  fullName: 'Ачаров Борис Федорович',
  avatar: new URL('@/assets/avatars/cdo/acharov.jpeg', import.meta.url).href,
  post: 'начальник отдела',
  additionalPost: '',
  phone: '+8 (863) 273-84-73',
  email: 'bacharov@donstu.ru',
  detailsLink: 'https://donstu.ru/employees/acharov-boris-fedorovich/'
}

const employees = ref([
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