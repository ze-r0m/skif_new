<template>
  <section class="grid-demo">
    <div class="container">
      <h2 class="section-title text-center">Демонстрация Grid-системы</h2>
      
      <!-- Базовая сетка 12 колонок -->
      <div class="grid-demo-section">
        <h3>Базовая 12-колоночная сетка</h3>
        <div class="grid grid-gap-20">
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
          <div class="col-1 grid-item">1</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-2 grid-item">2</div>
          <div class="col-2 grid-item">2</div>
          <div class="col-2 grid-item">2</div>
          <div class="col-2 grid-item">2</div>
          <div class="col-2 grid-item">2</div>
          <div class="col-2 grid-item">2</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-3 grid-item">3</div>
          <div class="col-3 grid-item">3</div>
          <div class="col-3 grid-item">3</div>
          <div class="col-3 grid-item">3</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-4 grid-item">4</div>
          <div class="col-4 grid-item">4</div>
          <div class="col-4 grid-item">4</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-6 grid-item">6</div>
          <div class="col-6 grid-item">6</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-12 grid-item">12</div>
        </div>
      </div>
      
      <!-- Адаптивная сетка -->
      <div class="grid-demo-section">
        <h3>Адаптивная сетка</h3>
        <div class="grid grid-gap-20">
          <div class="col-12 col-md-6 col-sm-12 grid-item">12/6/12</div>
          <div class="col-12 col-md-6 col-sm-12 grid-item">12/6/12</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-4 col-md-6 col-sm-12 grid-item">4/6/12</div>
          <div class="col-4 col-md-6 col-sm-12 grid-item">4/6/12</div>
          <div class="col-4 col-md-12 col-sm-12 grid-item">4/12/12</div>
        </div>
      </div>
      
      <!-- Сетка с отступами -->
      <div class="grid-demo-section">
        <h3>Сетка с отступами</h3>
        <div class="grid grid-gap-20">
          <div class="col-3 grid-item">3</div>
          <div class="col-3 offset-3 grid-item">3 + offset-3</div>
          <div class="col-3 grid-item">3</div>
        </div>
        
        <div class="grid grid-gap-20">
          <div class="col-4 offset-4 grid-item">4 + offset-4</div>
        </div>
      </div>
      
      <!-- Различные промежутки -->
      <div class="grid-demo-section">
        <h3>Различные промежутки</h3>
        <div class="grid grid-gap-20">
          <div class="col-4 grid-item">Gap 20px</div>
          <div class="col-4 grid-item">Gap 20px</div>
          <div class="col-4 grid-item">Gap 20px</div>
        </div>
        
        <div class="grid grid-gap-56">
          <div class="col-6 grid-item">Gap 56px</div>
          <div class="col-6 grid-item">Gap 56px</div>
        </div>
        
        <div class="grid grid-gap-92">
          <div class="col-12 grid-item">Gap 92px</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Демонстрационный компонент для grid-системы
</script>

<style scoped>
.grid-demo {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.section-title {
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  color: #38424F;
}

.grid-demo-section {
  margin-bottom: 60px;
}

.grid-demo-section h3 {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  color: #38424F;
}

.grid-item {
  background: linear-gradient(135deg, #11519C 0%, #288AD8 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Дополнительные стили для демонстрации */
.grid-item:nth-child(2n) {
  background: linear-gradient(135deg, #288AD8 0%, #11519C 100%);
}

.grid-item:nth-child(3n) {
  background: linear-gradient(135deg, #0E468B 0%, #1370B9 100%);
}
</style>