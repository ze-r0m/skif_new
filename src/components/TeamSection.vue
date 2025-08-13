<template>
  <section class="team-section">
    <div class="container team-container">
      <div class="team-header-grid">
        <div class="team-title-column">
          <h2 class="team-title">Команда УЦОТ</h2>
          <p class="team-description-short">
            <strong>
              Мы создаем онлайн программы на основе передовых дистанционных технологий и способствуем продвижению университета на глобальном рынке образовательных услуг
            </strong>
          </p>
        </div>
        <div class="team-description-column">
          <p class="team-description-long">
            Команда Института координирует развитие онлайн-обучения и дистанционных образовательных технологий в Донском Государственном Техническом Университете,
            обеспечивает технологический аудит, организационное, аналитическое сопровождение проектов в онлайн-обучении на российских и международных образовательных платформах,
            распространяет лучшие практики разработки содержания, организации и сопровождения онлайн-обучения
          </p>
        </div>
      </div>

      <div class="team-cards-grid">
        <div class="team-card team-card-1">
          <div class="card-number">1</div>
          <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          <p class="card-text"><strong>задачи управления....</strong> <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="team-card team-card-2">
          <div class="card-number">2</div>
          <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="team-card team-card-3">
          <div class="card-number">3</div>
          <h3 class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 80px 0;
  background-color: #fff; /* Фон секции */
}

.team-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.team-header-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.team-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.team-description-short {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.team-description-long {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.team-cards-grid {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.team-card {
  flex: 1; /* Карточки занимают равное пространство */
  background-color: #f0f4f7; /* Цвет фона карточек */
  border-radius: 10px;
  padding: 30px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  background-color: #e6f0f5;
}

.card-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #004a99;
  opacity: 0.2;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #004a99;
  margin-top: 15px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}
</style>