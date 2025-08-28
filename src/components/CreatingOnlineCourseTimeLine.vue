<template>
  <div class="container">
    <section class="timeline">
      <div
          v-for="(step, index) in steps"
          :key="step.id"
          :data-step-id="step.id"
          class="timeline-item"
          :class="[{ 'is-visible': step.isVisible }, index % 2 === 0 ? 'left' : 'right']"
      >
        <!-- Ромбик на линии -->
        <div class="timeline-diamond"></div>

        <!-- Контент -->
        <div class="timeline-content">
          <div class="timeline-title-container">
            <div class="timeline-title-diamond"></div>
            <h3 class="timeline-title">{{ step.title }}</h3>
          </div>
          <div class="timeline-description" v-html="step.description"></div>
        </div>

        <!-- Иконка -->
        <div class="timeline-image">
          <img :src="step.isVisible ? step.image : step.bw_image" :alt="step.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { steps } from "@/data/onlineCourseTimeLine.js";

export default {
  name: "Timeline",
  data() {
    return {
      steps,
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const stepId = entry.target.dataset.stepId;
            const stepIndex = this.steps.findIndex((s) => s.id === stepId);

            if (entry.isIntersecting) {
              this.steps[stepIndex].isVisible = true;
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.9 }
    );

    this.$nextTick(() => {
      document.querySelectorAll(".timeline-item").forEach((item) => {
        this.observer.observe(item);
      });
    });
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  },
};
</script>


<style scoped>
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.timeline {
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1300px;
}

/* Центральная вертикальная линия */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: #000;
  transform: translateX(-50%);
}

/* Элемент таймлайна */
.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.timeline-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Центральный ромб на линии */
.timeline-diamond {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%) rotate(45deg);
  width: 18px;
  height: 18px;
  background: #000;
  z-index: 2;
  border: 2px solid #fff;
}

/* Линия от центрального ромба к ромбу заголовка */
.timeline-item.left .timeline-diamond::after,
.timeline-item.right .timeline-diamond::after {
  content: "";
  position: absolute;
  top: 50%;
  height: 2px;
  background: #000;
  transform: translateY(-50%);
}

.timeline-item.left .timeline-diamond::after {
  right: 100%;
  width: calc(50% - 30px); /* подбираем расстояние до ромба заголовка */
}

.timeline-item.right .timeline-diamond::after {
  left: 100%;
  width: calc(50% - 30px);
}

/* Ромбик возле заголовка */
.timeline-title-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-title-diamond {
  width: 12px;
  height: 12px;
  background: #000;
  transform: rotate(45deg);
  flex-shrink: 0;
  margin-right: 10px;
}

/* Контент таймлайна */
.timeline-content {
  width: 40%;
  padding: 20px;
}

.timeline-title {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0;
}

.timeline-description {
  color: #444;
}

.timeline-description ul {
  padding-left: 20px;
  margin: 0;
}

/* Картинка */
.timeline-image {
  width: 15%;
  text-align: center;
}

.timeline-image img {
  width: 80px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.6s ease-out;
}

.timeline-item.is-visible .timeline-image img {
  filter: grayscale(0%);
}

/* Позиционирование левого и правого блоков */
.timeline-item.left .timeline-content {
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.timeline-item.left .timeline-image {
  order: 2;
}

.timeline-item.right .timeline-content {
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.timeline-item.right .timeline-image {
  order: 1;
}

/* Адаптив для мобильных */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 80px;
  }

  .timeline-diamond {
    left: 20px;
    transform: rotate(45deg);
  }

  .timeline-diamond::after {
    display: none;
  }

  .timeline-content,
  .timeline-image {
    width: 100%;
    text-align: left;
    margin-left: 40px;
  }

  .timeline-title-container {
    left: 0;
    transform: none;
  }
}

</style>
