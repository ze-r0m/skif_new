<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-column">
        <div class="footer-logos">
          <a href="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/" target="_blank" rel="noopener noreferrer">
            <IconUcotSquare class="logo-skif-square" />
          </a>

          <a href="https://skif.donstu.ru/" target="_blank" rel="noopener noreferrer">
            <IconSkifSquare class="logo-skif-square" />
          </a>

          <a href="https://donstu.ru/" target="_blank" rel="noopener noreferrer" >
            <IconDstu95 class="logo-dstu"  />
          </a>
        </div>
        <p><strong>Начальник Управления цифровых образовательных технологий:</strong></p>
        <p><strong>Шлыкова Алла Ивановна</strong><br>+7 (863) 238-15-83 (внутр. 3583)</p>
        <p>г. Ростов-на-Дону, пл. Гагарина, 1,<br>ауд 1-420а</p>



      </div>

      <div class="footer-column">
        <h4><strong>Отдел сопровождения дистанционного образования</strong></h4>
        <p><strong>Начальник Отдела сопровождения дистанционного образования:</strong></p>
        <p>Ачаров Борис Фёдорович<br>+7 (863) 273-84-73 (внутр. 2473)</p>
        <p>г. Ростов-на-Дону, пл. Гагарина, 1,<br>ауд 1-423</p>

        <p><strong>Email:</strong><br>spu-06.1@donstu.ru</p>

      </div>

      <div class="footer-column">
        <h4><strong>Сервисы СКИФ</strong></h4>
        <ul>
          <li><a href="#">ДО.СКИФ</a></li>
          <li><a href="#">СКИФ.ТЕСТ</a></li>
          <li><a href="#">СКИФ.Библиотека</a></li>
          <li><a href="#">СКИФ.Заочный</a></li>
          <li><a href="#">СКИФ.СПЕЦ</a></li>
          <li><a href="#">СКИФ.Международный</a></li>
        </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2025  </p>
        <p>Управление Цифровых Образовательных Технологий</p>
        <p>Донской государственный технический университет</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Для этого компонента скрипты не требуются, так как он статичный
import IconSkifSquare from "@/components/icons/IconSkifSquare.vue";
import IconDstu95 from "@/components/icons/IconDstu95.vue";
import IconUcotSquare from "@/components/icons/IconUcotSquare.vue";
</script>

<style scoped>
.site-footer {
  background-color: #0E468B; /* Темно-синий фон */
  color: #e5e5e5;
  padding-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 60px;
}


.footer-logos {
  align-items: center;
  gap: 30px;
}

.logo-skif-square {
  height: 90px;
  width: 90px;
}

.logo-dstu {
  height: 50px;
  width: auto;
  fill: #f4f4f4;
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
  border-top: 1px solid #1370B9;
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
  color: #a0b4c8;
}
</style>