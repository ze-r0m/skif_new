<template>
  <section class="epigraph-section">
    <div class="container">
      <p class="epigraph-text">
        <span class="epigraph-icon">❝</span>
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* =======================================================
   Стили (Mobile-first)
   ======================================================= */
.epigraph-section {
  padding: 40px 0;
  background-color: #f0f4f7;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  background: linear-gradient(215deg, #0E468B 0%, #1370B9 100%, #1370B9 100%);
  border-radius: 3.2rem;
  padding: 50px 30px;
}

.epigraph-text {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.4rem;
  margin: 0;
}

.epigraph-icon {
  font-size: 2rem;
  flex-shrink: 0;
  opacity: 0.8;
  fill: #FFFFFF;
}

/* ====== Для планшетов ====== */
@media (min-width: 768px) {
  .epigraph-text {
    font-size: 1.6rem;
    line-height: 3rem;
  }

  .epigraph-icon {
    font-size: 2.4rem;
  }

  .container {
    padding: 60px 50px;
  }
}

/* ====== Для десктопа ====== */
@media (min-width: 1200px) {
  .epigraph-text {
    font-size: 1.8rem;
    line-height: 3.8rem;
  }

  .epigraph-icon {
    font-size: 2.8rem;
  }

  .container {
    padding: 70px 90px 63px 90px;
  }
}
</style>
