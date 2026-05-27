<template>
  <section class="hero-section">
    <div class="container">
      <BannerCard
        variant="primary"
        title="Управление цифровых образовательных технологий"
        text="Управление цифровых образовательных технологий координирует внедрение электронного обучения в ДГТУ, обеспечивая на базе единой информационной системы автоматизацию планирования, контроль успеваемости и аналитическое сопровождение учебного процесса. Деятельность управления направлена на эффективное использование аудиторного фонда и ресурсов университета, включая формирование расписания и прогнозирование загрузки помещений, а также на создание современных электронных курсов и программных решений для повышения качества образования."
        :image="edu_banner"
        buttonText="Узнать больше"
        buttonVariant="light"
        buttonHref="https://donstu.ru/university/struktura/priyemnaya-prorektora-po-strat-i-tsifrovomu-razvitiyu/upravleniye-tsifrovykh-obrazovatelnykh-tekhnologiy/"
        :imageStyles="{ transform: 'translateY(5%) scale(1)', width: '35%', filter: 'opacity(0.6)'}"
      />
    </div>
  </section>
</template>

<script setup>
import BannerCard from '@/components/cards/BannerCard.vue'
import edu_banner from '@/assets/edu_banner.png'
</script>

<style scoped>
.hero-section {
  margin-top: 0;
  padding-bottom: 0;
}
</style>