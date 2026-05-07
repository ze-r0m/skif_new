# СКИФ — Портал УЦОТ ДГТУ

Лендинг-портал **Управления цифровых образовательных технологий (УЦОТ)** ДГТУ. Реализован на Vue 3 + Vite по дизайн-системе вуза.

## Просмотр

| Версия | Ссылка |
|--------|--------|
| v1 | https://ze-r0m.github.io/skif_new/ |
| v2 | https://ze-r0m.github.io/skif_new/v2/ |

## Что сейчас на сайте

Сайт состоит из четырёх блоков:

**Шапка** — верхняя панель со ссылками на подсайты СКИФ (ДО.СКИФ, СКИФ.ТЕСТ, СКИФ.Библиотека, СКИФ.СПЕЦ, СКИФ.Международный, ПРОФ.СКИФ), логотипы, навигация «О нас / Системы / Разработка курсов» и мобильное меню.

**Hero-баннер** — карточка с описанием УЦОТ: отдел координирует внедрение электронного обучения в ДГТУ, автоматизацию учёта успеваемости, формирование расписаний, создание электронных курсов. Кнопка «Узнать больше» ведёт на страницу УЦОТ.

**Карточки подсистем СКИФ** — шесть карточек:

| | Карточка | Описание | Ссылка |
|--|----------|----------|--------|
| 🟦 | **ДО СКИФ** | Дистанционное обучение и электронные курсы | [do.skif.donstu.ru](https://do.skif.donstu.ru) |
| ◼️ | **СКИФ ТЕСТ** | Массовое тестирование и аттестация | [skif.donstu.ru/test/](https://skif.donstu.ru/test/) |
| 🟥 | **СКИФ БИБЛИОТЕКА** | Учебные материалы для заочного обучения | [de.donstu.ru](https://de.donstu.ru/zaoch/organizations/1) |
| 🟩 | **СКИФ СПЕЦ** | Вступительные испытания, олимпиады, конкурсы | [skif.donstu.ru/spec/](https://skif.donstu.ru/spec/) |
| 🌍 | **СКИФ МЕЖДУНАРОДНЫЙ** | Курсы факультета «Международный» | [int.skif.donstu.ru](https://int.skif.donstu.ru) |
| ⬛ | **ПРОФ СКИФ** | Профессиональная переподготовка | [prof.skif.donstu.ru](https://prof.skif.donstu.ru) |



**Футер** — логотипы, ссылки на все подсистемы, три блока контактов отделов (УЦОТ, отдел дистанционного образования, отдел образовательной логистики) с телефонами, адресами и email, копирайт ДГТУ 2026.

## В разработке (закомментировано)

Следующие компоненты готовы, но пока не отображаются на странице:
- **HeroSlider** — слайдер с видеоинструкциями (создание тестов, импорт вопросов, студия записи)
- **CreatingCoursesSection** — таймлайн создания МОК (7 этапов: Идея → Подготовка → Заявка → Экспертиза → Апробация → Сертификация → Реализация)
- **TeamSection** — три карточки о направлениях работы УЦОТ
- **TheEpigraph** — декоративная цитата
- **GridDemo** — демо grid-системы

## Дизайн-система

Проект следует дизайн-системе ДГТУ (`design-system/`):
- **Шрифт:** GolosText (основной), Montserrat (дополнительный)
- **Сетка:** 12 / 8 / 2 колонки (Desktop / Tablet / Mobile)
- **Цвета:** Primary `#11519C`, Accent `#FDC51F`, Text `#38424F`
- Документация в `design-system/` (PDF/PNG макеты футера, сетки, типографики)

## Запуск

```bash
npm install
npm run dev          # dev-сервер :5173
npm run build        # продакшен-сборка
npm run build:v2     # сборка v2 (для деплоя в /v2)
npm run deploy       # сборка → GitHub Pages
```

## Структура

```
src/
├── assets/
│   ├── fonts/          # GolosText, Montserrat, Nekst
│   ├── sliderImg/      # картинки слайдера
│   ├── TimeLineImg/    # иконки этапов таймлайна
│   └── styles.css      # grid-система + типографика дизайн-системы
├── components/
│   ├── icons/          # 13 SVG-иконок (логотипы, бургер, стрелки)
│   ├── TheHeader.vue   # шапка с навигацией
│   ├── HeroSection.vue # hero-баннер
│   ├── ServicesSection # карточки подсистем
│   ├── TheFooter.vue   # футер с контактами
│   ├── ScrollToTop.vue # кнопка «наверх»
│   ├── MobileMenu.vue  # мобильное меню
│   ├── HeroSlider.vue  # слайдер (закомментирован)
│   ├── CreatingCoursesSection  # таймлайн курсов (закомментирован)
│   ├── TeamSection.vue         # направления работы (закомментирован)
│   ├── TheEpigraph.vue         # цитата (закомментирована)
│   └── GridDemo.vue            # демо сетки (закомментирован)
├── data/
│   ├── slides.js       # данные слайдера
│   └── rows.js         # этапы создания МОК
├── views/              # страницы (HomePage, AboutPage, CDOPage, OOLPage, ResourcePage, InstructionsPage)
├── router/             # роутер (удален при миграции на MPA)
├── App.vue             # корневой компонент с layout (header/footer)
├── main.js             # точка входа SPA (старый)
└── main-multipages.js  # точка входа MPA
```

## Мультистраничность (MPA)

Проект использует Vite с несколькими точками входа (multiple entry points) для реализации MPA-архитектуры. Каждая страница — отдельный HTML-файл, при переходе браузер загружает страницу полностью (full page reload).

### Структура URL

| Страница | URL | HTML |
|----------|-----|------|
| Главная | `/skif_new/v2/` | `dist/index.html` |
| Об управлении | `/skif_new/v2/about/` | `dist/about/index.html` |
| Отдел СДО | `/skif_new/v2/about/cdo/` | `dist/about/cdo.html` |
| Отдел ООЛ | `/skif_new/v2/about/ool/` | `dist/about/ool.html` |
| Сектор РООД | `/skif_new/v2/about/ool/rood/` | `dist/about/ool/rood.html` |
| Инструкции | `/skif_new/v2/instructions/` | `dist/instructions.html` |

### Как добавить новую страницу

1. **Создать Vue компонент** в `src/views/`
2. **Добавить entry в vite.config.v2.js** → `build.rollupOptions.input`:
   ```js
   build: {
     rollupOptions: {
       input: {
         mypage: 'mypage.html', // новый ключ и имя файла
       }
     }
   }
   ```
3. **Создать HTML файл** в корне проекта:
   ```html
   <!DOCTYPE html>
   <html lang="ru">
   <head>
     <title>Моя страница — СКИФ ДГТУ</title>
   </head>
   <body>
     <div id="app"></div>
     <script type="module" src="/src/main-multipages.js"></script>
   </body>
   </html>
   ```
4. **Добавить страницу в App.vue** → в объект `pages`:
   ```js
   const pages = {
     '': HomePage,
     'mypage': MyPageComponent, // добавить новую страницу
     // ...
   }
   ```
5. **Добавить ссылку в навигацию** — в `TheHeader.vue` и `MobileMenu.vue`

### Технические детали

- **Base URL:** `/skif_new/v2/` (настраивается в `vite.config.v2.js`)
- **Роутинг:** отсутствует, URL определяется по pathname в браузере
- **Layout:** единый App.vue (header + footer) для всех страниц
- **Сборка:** `npm run build:v2` генерирует отдельные HTML для каждой страницы

    qwen --resume c651127e-b03b-43c1-a821-229d08551660
    qwen --resume 905d6c86-823c-4e6e-8d77-08851b1e47bf 07.04.2026-08.04
    qwen --resume 2544e3d7-5911-4a75-bbdd-a66517075a43 09.04.2026
    qwen --resume 2544e3d7-5911-4a75-bbdd-a66517075a43 footer
