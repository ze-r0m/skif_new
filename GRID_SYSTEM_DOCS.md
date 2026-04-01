# Grid-система проекта СКИФ

## Параметры дизайн-системы

| Брейкпоинт | Размер экрана | Колонки | Container | Padding | Gap |
|------------|---------------|---------|-----------|---------|-----|
| Desktop    | 1440×900      | 12      | 1328px    | 56px    | 20px |
| Tablet     | 744×1133      | 8       | 680px     | 32px    | 20px |
| Mobile     | 375×812       | 2       | 351px     | 12px    | 12px |

## Базовые классы

### Контейнер
```html
<div class="container">
  <!-- содержимое -->
</div>
```

### Grid-контейнер
```html
<div class="grid">
  <!-- колонки -->
</div>
```

### Колонки (Desktop - 12 колонок)
```html
<div class="col-1">1 колонка</div>
<div class="col-2">2 колонки</div>
<div class="col-3">3 колонки</div>
<div class="col-4">4 колонки</div>
<div class="col-5">5 колонок</div>
<div class="col-6">6 колонок</div>
<div class="col-7">7 колонок</div>
<div class="col-8">8 колонок</div>
<div class="col-9">9 колонок</div>
<div class="col-10">10 колонок</div>
<div class="col-11">11 колонок</div>
<div class="col-12">12 колонок (полная ширина)</div>
```

### Колонки (Tablet - 8 колонок)
```html
<div class="col-md-1">1 колонка на планшете</div>
<div class="col-md-2">2 колонки на планшете</div>
<!-- ... и так далее до col-md-8 -->
```

### Колонки (Mobile - 2 колонки)
```html
<div class="col-sm-1">1 колонка на мобильных</div>
<div class="col-sm-2">2 колонки на мобильных (полная ширина)</div>
```

## Промежутки (gaps)

```html
<div class="grid grid-gap-12"> <!-- 12px (mobile) -->
<div class="grid grid-gap-20"> <!-- 20px (default, desktop/tablet) -->
<div class="grid grid-gap-56"> <!-- 56px -->
<div class="grid grid-gap-92"> <!-- 92px -->
```

## Адаптивность

### Пример адаптивной сетки
```html
<div class="grid">
  <div class="col-4 col-md-4 col-sm-2">Контент</div>
  <div class="col-4 col-md-4 col-sm-2">Контент</div>
  <div class="col-4 col-md-4 col-sm-2">Контент</div>
</div>
```

**Поведение:**
- **Desktop:** 3 колонки по 4/12 каждая
- **Tablet:** 3 колонки по 4/8 каждая
- **Mobile:** 3 блока на всю ширину (2/2)

## Отступы (offsets)

### Desktop (12 колонок)
```html
<div class="col-3 offset-3">3 колонки с отступом в 3 колонки</div>
<div class="col-4 offset-4">4 колонки с отступом в 4 колонки</div>
<div class="col-6 offset-6">6 колонок с отступом в 6 колонок</div>
```

### Tablet (8 колонок)
```html
<div class="col-md-2 offset-md-2">2 колонки с отступом 2</div>
<div class="col-md-4 offset-md-2">4 колонки с отступом 2</div>
```

### Mobile (2 колонки)
```html
<div class="col-sm-1 offset-sm-1">1 колонка с отступом 1</div>
```

## Вспомогательные классы

### Выравнивание текста
```html
<div class="text-left">Текст слева</div>
<div class="text-center">Текст по центру</div>
<div class="text-right">Текст справа</div>
```

### Выравнивание по justify
```html
<div class="justify-start">Контент слева</div>
<div class="justify-center">Контент по центру</div>
<div class="justify-end">Контент справа</div>
<div class="justify-between">Контент с распределением</div>
```

### Выравнивание по align
```html
<div class="align-start">Выравнивание сверху</div>
<div class="align-center">Выравнивание по центру</div>
<div class="align-end">Выравнивание снизу</div>
```

### Display классы
```html
<div class="d-flex">display: flex</div>
<div class="d-grid">display: grid</div>
<div class="d-block">display: block</div>
<div class="d-inline">display: inline</div>
<div class="d-none">display: none</div>
```

## Примеры использования

### Базовая сетка (Desktop)
```html
<div class="container">
  <div class="grid grid-gap-20">
    <div class="col-4">Левая колонка (4/12)</div>
    <div class="col-8">Правая колонка (8/12)</div>
  </div>
</div>
```

### Карточки с равными промежутками
```html
<div class="container">
  <div class="grid grid-gap-56">
    <div class="col-4">Карточка 1</div>
    <div class="col-4">Карточка 2</div>
    <div class="col-4">Карточка 3</div>
  </div>
</div>
```

### Адаптивная секция
```html
<div class="container">
  <div class="grid grid-gap-20">
    <div class="col-3 col-md-4 col-sm-2">Блок 1</div>
    <div class="col-3 col-md-4 col-sm-2">Блок 2</div>
    <div class="col-3 col-md-4 col-sm-2">Блок 3</div>
    <div class="col-3 col-md-4 col-sm-2">Блок 4</div>
  </div>
</div>
```

### Сетка с отступом по центру
```html
<div class="container">
  <div class="grid grid-gap-20">
    <div class="col-8 offset-2">Контент по центру (8 колонок + отступ 2)</div>
  </div>
</div>
```

## Media Queries

```css
/* Tablet: до 1024px */
@media (max-width: 1024px) {
  /* 8-колоночная сетка */
}

/* Mobile: до 768px */
@media (max-width: 768px) {
  /* 2-колоночная сетка */
}
```

## Рекомендации

1. **Всегда используйте `container`** для ограничения ширины контента
2. **Всегда оборачивайте колонки в `grid`** контейнер
3. **Сумма колонок должна равняться:**
   - 12 на desktop
   - 8 на tablet
   - 2 на mobile
4. **Используйте адаптивные классы** `col-md-*` и `col-sm-*` для корректного отображения
5. **По умолчанию на mobile колонки складываются** (span 2), если не указано иное

## Цветовая схема для разработки

Для визуализации сетки в разработке:
- Основной цвет: `#11519C` (синий)
- Акцентный цвет: `#288AD8` (голубой)
- Текст: `#38424F` (темно-серый)
