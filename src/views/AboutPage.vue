<template>
  <div class="page-about">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="container app-section _center _gutter-md" id="block-about">
        <div class="app-section__head">
          <h1 class="text-h1">Об управлении</h1>
        </div>
        <div class="app-section__content text-content">
          <p class="text-body">Управление цифровых образовательных технологий Донского государственного технического университета обеспечивает системное внедрение и развитие современных цифровых решений в образовательный процесс вуза.</p>
          <p class="text-body">Внедрение цифровой среды учебного процесса — одна из ключевых задач Управления цифровых образовательных технологий.</p>
          <!--        <p class="text-body">Команда УЦОТ координирует разработку и внедрение электронного обучения в ДГТУ, обеспечивает технологический аудит проектов, аналитическое сопровождение учебного процесса. Мы интегрируем различные информационные системы университета для динамического управления образовательной средой, повышая эффективность работы всех подразделений и удовлетворенность студентов и преподавателей.</p>-->
          <p class="text-body">
            Деятельностью управления является автоматизация и цифровизация образовательной деятельности, внедрение в учебный процесс ДГТУ цифровых образовательных технологий, в том числе электронного обучения и дистанционных образовательных технологий, которые направлены на повышение эффективности профессионального обучения и образовательной деятельности ДГТУ, а так же обеспечение законности внедрения и реализации в ДГТУ электронного обучения.
          </p>
        </div>
    </section>

    <section class="container app-section _gutter-sm">
    <BulletListSection
      title="Основные направления деятельности:"
      :items="features"
    />
      </section>

    <section class="container app-section _gutter-sm">
      <div class="app-section__head">
        <h1 class="text-h1">Структура управления</h1>
      </div>
      <div class="app-section__content">
        <div class="app-grid _columns-1-1">
          <div class="app-grid _columns-2-1">
            <ServiceCard
              title="Отдел сопровождения дистанционного образования (СДО)"
              description="Координация сопровождение и техническая поддержка пользователей на портале электронного обучения СКИФ ДГТУ — LMS Moodle"
              link="/about/department"
              variant="gradient"
            />
            <ServiceCard
              title="Отдел сопровождения образовательной логистики (ООЛ)"
              description="Формирование расписания занятий по программам высшего образования на территории г. Ростова-на-Дону"
              link="/about/logistics"
              variant="primary-light"
            />
            <ServiceCard
              class="_span-1"
              title="Сектор ресурсного обеспечения образовательной деятельности"
              description="Сбор и анализ данных об оснащенности аудиторного фонда, требуемом оборудовании и программном обеспечении"
              link="/about/resource"
              variant="white"
            />
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
import ServiceCard from "@/components/ServiceCard.vue";
import ContactCard from "@/components/ContactCard.vue";
import ContactCardLarge from "@/components/ContactCardLarge.vue";
import BulletListSection from "@/components/BulletListSection.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Об управлении', to: null }
])

const features = ref([
  'Цифровые решения для организации образовательного процесса',
  'Оптимизация и формирование расписания ',
  'Эффективное использование аудиторного фонда',
  'Обеспечение учебного процесса актуальными программными решениями',
  'Создание и методическое сопровождение цифрового образовательного контента',
  'Разработка и администрирование систем тестирования и МООК-курсов',
  'Формирование системы методического обеспечения и сопровождения ДО',
  'Поддержка и обучение преподавателей работе с ЭИОС'
])

const manager = {
  fullName: 'Шлыкова Алла Ивановна',
  avatar: new URL('@/assets/avatars/shlykova.jpeg', import.meta.url).href ,
  post: 'начальник управления',
  additionalPost: 'доцент',
  phone: '+8 (863) 238-15-83',
  email: 'ashlykova@donstu.ru',
  detailsLink: 'https://donstu.ru/employees/shlykova-alla-ivanovna/'
}

const employees = ref([
  {
    fullName: 'Поркшеян Маркос Витальевич',
    avatar: new URL('@/assets/avatars/porksheyan.jpeg', import.meta.url).href,
    post: 'заместитель начальника',
    detailsLink: 'https://donstu.ru/employees/porksheyan-markos-vitalevich/'
  },
  {
    fullName: 'Степанян Сурен Давидович',
    avatar: new URL('@/assets/avatars/stepanyan.jpeg', import.meta.url).href,
    post: 'ведущий эксперт',
    detailsLink: 'https://donstu.ru/employees/stepanyan-suren-davidovich/'
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

.app-grid {
  display: grid;
  gap: 20px;
}

._columns-1-1 {
  grid-template-columns: 1fr;
}

._columns-2-1 {
  grid-template-columns: repeat(2, 1fr);
}

._span-1 {
  grid-column: 2 / 3;
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

.text-content ul {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
}

.text-content ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
}

.text-content ul li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #11519C;
}

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }

  .employees-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

}

@media (max-width: 743px) {
  .app-section {
    margin-bottom: 40px;
  }

  .app-section__head {
    margin-bottom: 24px;
  }

  ._columns-2-1 {

    display: flex;
    flex-direction: column;
  }
}
</style>