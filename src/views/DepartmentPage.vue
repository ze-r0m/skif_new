<template>
  <div class="page-department">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />
    </div>

    <section class="app-section _gutter-md">
      <div class="container">
        <div class="app-section__head">
          <h1 class="text-h1">Отдел сопровождения дистанционного образования</h1>
        </div>
      </div>
    </section>

    <section class="container app-section _center">
      <div class="grid">
        <div class="col-7">
          <div class="text-content">
            <p class="text-body">Отдел сопровождения дистанционного образования (ОСДО) координирует и сопровождает реализацию дистанционных образовательных программ в Донском государственном техническом университете.</p>
            <p class="text-body">Основные направления работы отдела:</p>
            <ul class="text-body">
              <li>Методическая поддержка преподавателей</li>
              <li>Техническое сопровождение электронных курсов</li>
              <li>Обучение работе с системой дистанционного обучения</li>
              <li>Контроль качества образовательных материалов</li>
            </ul>
          </div>
        </div>
        <div class="col-5">
          <div class="contact-card">
            <h3 class="text-h4">Контакты отдела</h3>
            <div class="contact-item">
              <span class="text-body-small contact-label">Телефон:</span>
              <a class="text-body contact-link" href="tel:88632738473">8 863 273 84 73</a>
            </div>
            <div class="contact-item">
              <span class="text-body-small contact-label">Email:</span>
              <a class="text-body contact-link" href="mailto:bacharov@donstu.ru">bacharov@donstu.ru</a>
            </div>
            <div class="contact-item">
              <span class="text-body-small contact-label">Адрес:</span>
              <address class="text-body">344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-423</address>
            </div>
            <div class="contact-item">
              <span class="text-body-small contact-label">Режим работы:</span>
              <time class="text-body">Пн. - Пт.: 8:30 - 17:00</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from "@/components/TheBreadcrumbs.vue";

const breadcrumbs = ref([
  { title: 'Главная', to: '/' },
  { title: 'Об управлении', to: '/about' },
  { title: 'Отдел дистанционного образования', to: null }
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

.contact-card {
  background: #11519C;
  border-radius: 32px;
  padding: 32px;
  color: #FFFFFF;
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

  .contact-card {
    margin-top: 24px;
  }
}
</style>