<template>
  <div class="news-card">
    <img :src="newsItem.imageUrl" alt="Фото новости" class="card-image" />
    <div class="card-content">
      <span class="card-date">{{ newsItem.date }}</span>
      <h3 class="card-title">{{ newsItem.title }}</h3>
      <p class="card-excerpt">{{ newsItem.excerpt }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.news-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 20px;
}
.card-date {
  font-size: 14px;
  color: #888;
}
.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #004a8f;
  margin: 10px 0;
}
.card-excerpt {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}
</style>