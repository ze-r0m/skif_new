<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-column">
        <img src="#" alt="Логотип ДГТУ" class="footer-logo" />
        <p>344003, г. Ростов-на-Дону, пл. Гагарина, 1</p>
        <p><strong>Приемная комиссия:</strong><br>+7 (863) 306-20-00</p>
        <p><strong>Email:</strong><br>info@donstu.ru</p>
      </div>

      <div class="footer-column">
        <h4>Абитуриенту</h4>
        <ul>
          <li><a href="#">Направления</a></li>
          <li><a href="#">Правила приема</a></li>
          <li><a href="#">Календарь абитуриента</a></li>
          <li><a href="#">Общежития</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Образование</h4>
        <ul>
          <li><a href="#">Институты и факультеты</a></li>
          <li><a href="#">Расписание</a></li>
          <li><a href="#">Дополнительное образование</a></li>
          <li><a href="#">Аспирантура</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Мы в соцсетях</h4>
        <div class="social-links">
          <a href="#" aria-label="VK">VK</a>
          <a href="#" aria-label="Telegram">TG</a>
          <a href="#" aria-label="Youtube">YT</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 1992–2025 Донской государственный технический университет</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Для этого компонента скрипты не требуются, так как он статичный
</script>

<style scoped>
.site-footer {
  background-color: #003366; /* Темно-синий фон */
  color: #e5e5e5;
  padding-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 60px;
}

.footer-logo {
  height: 40px;
  margin-bottom: 20px;
  filter: brightness(0) invert(1); /* Делаем логотип белым, если он был черным */
}

.footer-column h4 {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

.footer-column p {
  line-height: 1.7;
  font-size: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column a {
  color: #e5e5e5;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.social-links a {
  display: inline-block;
  margin-right: 15px;
  font-weight: bold;
}

.footer-bottom {
  border-top: 1px solid #004a8f;
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
  color: #a0b4c8;
}
</style>