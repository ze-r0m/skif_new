<template>
  <div class="page-logistics">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section__head">
          <h1 class="text-h1">Отдел сопровождения образовательной логистики</h1>
        </div>
        <div class="app-section text-content _center">
          <div class="grid">
            <div class="col-7">
              <div class="text-content">
                <p class="text-body" style="margin-top: 0">Отдел сопровождения образовательной логистики (ОСОЛ) обеспечивает планирование, организацию и координацию учебного процесса в Донском государственном техническом университете.</p>
                <p class="text-body">Основные направления работы отдела:</p>
                <ul class="text-body">
                  <li>Формирование расписания учебных занятий</li>
                  <li>Координация учебных нагрузок</li>
                  <li>Планирование академических календарей</li>
                  <li>Управление аудиторным фондом</li>
                </ul>
                <p class="text-body">В структуре отдела также функционирует сектор, курирующий вопросы заочного обучения.</p>
              </div>
            </div>
            <div class="col-5">
              <div class="contact-card-no-image">
                <h3 class="text-h4">Контакты отдела</h3>
                <div class="contact-item">
                  <span class="text-body-small contact-label">Телефон:</span>
                  <a class="text-body contact-link" href="tel:88632738441">8 863 273 84 41</a>
                </div>
                <div class="contact-item">
                  <span class="text-body-small contact-label">Email:</span>
                  <a class="text-body contact-link" href="mailto:ognedina@donstu.ru">ognedina@donstu.ru</a>
                </div>
                <div class="contact-item">
                  <span class="text-body-small contact-label">Адрес:</span>
                  <address class="text-body">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420</address>
                </div>
                <div class="contact-item">
                  <span class="text-body-small contact-label">Режим работы:</span>
                  <time class="text-body">Пн. - Пт.: 8:30 - 17:00</time>
                </div>
              </div>
            </div>
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
import ContactCard from "@/components/ContactCard.vue";
import ContactCardLarge from "@/components/ContactCardLarge.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Об управлении', to: '/about' },
  { title: 'Отдел образовательной логистики', to: null }
])

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

.contact-card h3 {
  color: #FFFFFF;
  margin: 0 0 24px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-label {
  color: rgba(255, 255, 255, 0.7);
}

.contact-link {
  color: #FFFFFF;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

.contact-item address {
  font-style: normal;
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

@media (max-width: 1023px) {
  .app-section {
    margin-bottom: 60px;
  }
  .employees-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 743px) {
  .app-section {
    margin-bottom: 40px;
  }

  .app-section__head {
    margin-bottom: 24px;
  }

  .contact-card {
    margin-top: 24px;
  }
}
</style>