<template>
  <ul class="feature-list" data-animate-group data-animate-stagger="0.08">
    <li v-for="(item, index) in items" :key="index" class="text-body" data-animate="slide" data-animate-slide-direction="bottom">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0 0 0;
  padding: 0;
}

.feature-list li {
  position: relative;
  padding: 0 0 0 48px;
}

.feature-list li::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill='%231370B9' d='M15 13.608v-3.209C15 9.403 14.548 9 13.426 9h-2.852C9.452 9 9 9.403 9 10.4v3.2c0 1.004.452 1.4 1.574 1.4h2.852c1.122.007 1.574-.396 1.574-1.392Z'/%3E%3C/svg%3E");
  background-position: 0 50%;
  background-repeat: no-repeat;
  content: "";
  display: block;
  height: 20px;
  width: 40px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
