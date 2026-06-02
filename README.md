# СКИФ — Портал УЦОТ ДГТУ

Лендинг-портал **Управления цифровых образовательных технологий (УЦОТ)** Донского государственного технического университета.

Дочерний сайт головного портала ДГТУ ([donstu.ru](https://donstu.ru/)).

| Версия | Ссылка |
|--------|--------|
| v1 | https://ze-r0m.github.io/skif_new/ |
| v2 | https://ze-r0m.github.io/skif_new/v2/ |

## Технологии

- **Фреймворк:** Vue 3 (Composition API, `<script setup>`) + Vite 7
- **Язык:** JavaScript (без TypeScript)
- **Архитектура:** Multi-Page Application (MPA) — без SPA-роутера
- **Анимации:** GSAP + Lenis + IntersectionObserver
- **Зависимости:** `vue`, `gsap`, `lenis`; dev: `vite`, `@vitejs/plugin-vue`, `gh-pages`

## Страницы

| URL | Компонент | Содержание |
|-----|-----------|------------|
| `/` | `HomePage` | Hero-баннер УЦОТ, 6 карточек подсистем СКИФ (ДО.СКИФ, СКИФ.ТЕСТ, СКИФ.Библиотека, СКИФ.СПЕЦ, СКИФ.Международный, ПРОФ.СКИФ) |
| `/about/` | `AboutPage` | Об управлении: направления деятельности, сотрудники УЦОТ, контакты |
| `/about/cdo/` | `CDOPage` | Отдел центра дистанционного обучения: информация, сотрудники |
| `/about/ool/` | `OOLPage` | Отдел образовательной логистики: информация, сотрудники |
| `/about/rood/` | `ResourcePage` | Сектор ресурсного обеспечения: информация, сотрудники |
| `/instructions/` | `InstructionsPage` | Инструкции и памятки |

Все страницы используют общий layout: `TheHeader` → `<main>` → `TheFooter`.

## Архитектура MPA

Проект использует Vite с несколькими точками входа. Каждая страница — отдельный HTML-файл с полной перезагрузкой при переходе.

**Роутинг** — отсутствует. `App.vue` определяет компонент страницы по `window.location.pathname` через `computed`, обёрнутый в `ref` и обновляемый через `popstate` listener. Это делает кнопки браузера «Назад»/«Вперёд» рабочими, несмотря на отсутствие SPA-роутера.

**Base URL:** `/skif_new/v2/` (настраивается в `vite.config.v2.js` через `base`).

### Добавить новую страницу

1. Создать `src/views/MyPage.vue`
2. Создать `my-page/index.html` в корне проекта с точкой входа `src/main-multipages.js`
3. Добавить entry в `vite.config.v2.js` → `build.rollupOptions.input`
4. Зарегистрировать в `App.vue` → объект `pages`
5. Добавить ссылку в `TheHeader.vue` / `MobileMenu.vue`

## Дизайн-система

Документация — `design-system/` (PDF/PNG макеты), сводка сетки — `GRID_SYSTEM_DOCS.md`.

**Шрифт:** GolosText (Regular 400, Medium 500, SemiBold 600) — 3 начертания, ~204 KB суммарно.

**Сетка:**

| Брейкпоинт | Экран | Колонки | Container | Padding | Gap |
|------------|-------|---------|-----------|---------|-----|
| Desktop | ≥1024px | 12 | 1328px | 56px | 20px |
| Tablet | 768–1023px | 8 | 680px | 32px | 20px |
| Mobile | ≤767px | 2 | — | 12px | 12px |

**Цвета:** 15 CSS-переменных в `:root` (`--primary-color: #11519C`, `--accent-color-yellow: #FDC51F`, `--text-color: #38424F` и др.) — полный набор в `src/assets/styles.css`.

https://www.figma.com/design/s84wRIcJWEjrgwYVA7ysdz/ДГТУ-—-Дизайн-система--Client-?node-id=4027-97345&t=QtVReLpV8OUnVtam-0

## Анимации

Связка **GSAP + Lenis + IntersectionObserver** (аналогично donstu.ru). ScrollTrigger не используется.

- **Lenis** — плавный скролл (duration: 1.2, easing с затуханием)
- **IntersectionObserver** (`rootMargin: '0px 0px 200px 0px'`) — триггер анимаций при входе в область видимости
- **GSAP** — 6 типов анимаций (`fade`, `slide`, `title`, `text`, `fill`, `fill-default`), вызываемых через `[data-animate]` атрибуты

Каждый анимируемый элемент получает CSS initial state в `src/assets/animations.css` (прозрачность, смещение) — JS ставит inline-стили через GSAP, конфликта нет, моргание исключено.

Механика:
1. Элемент с `[data-animate]` рендерится в CSS initial state (невидим/смещён)
2. IntersectionObserver засекает вход элемента в область видимости
3. GSAP проигрывает анимацию до финального состояния (inline-стили)
4. После завершения флаг `_done` блокирует повторный запуск

Очистка при unmount: `destroyLenis()` disconnects observer, removes gsap ticker, removes lenis scroll listener, отключает lagSmoothing.

`fixStuck` — защита от «залипания» невидимых элементов: проверяет через 3 секунды, стартовала ли анимация; если нет — проигрывает принудительно.

## Запуск и сборка

```bash
npm install
npm run dev              # dev-сервер :5173
npm run build:v2         # продакшен-сборка v2 (основная)
npm run build            # сборка v1 (только для деплоя в корень)
npm run deploy:v2        # сборка v2 → GitHub Pages в /v2
npm run deploy           # сборка v1 → GitHub Pages в корень
```

Основная сборка — `npm run build:v2`. Команда `npm run build` (без флага) собирает v1 для корня сайта.

## Структура проекта

```
skif_new/
├── index.html                        # точка входа SPA (для v1)
├── about/index.html                  # HTML-страницы MPA (v2)
├── instructions/index.html
├── vite.config.js                    # конфиг v1
├── vite.config.v2.js                 # конфиг v2 (MPA, base /skif_new/v2/)
├── package.json
├── design-system/                    # макеты дизайн-системы (PDF, PNG)
├── GRID_SYSTEM_DOCS.md               # документация сетки
├── public/                           # статика (favicon и т.д.)
├── dist/                             # сборка
└── src/
    ├── main-multipages.js            # точка входа MPA
    ├── App.vue                       # layout (header + main + footer + scroll-to-top)
    ├── config.js                     # BASE_URL
    ├── assets/
    │   ├── styles.css                # CSS-переменные, сетка, типографика, утилиты
    │   ├── animations.css            # CSS initial states для [data-animate]
    │   ├── fonts/golos/              # GolosText Regular, Medium, SemiBold
    │   ├── avatars/                  # фото сотрудников
    │   └── preview_instuctions/      # превью инструкций
    ├── components/
    │   ├── TheHeader.vue             # шапка + мобильное меню
    │   ├── TheFooter.vue             # футер с контактами и ссылками
    │   ├── HeroSection.vue           # hero-баннер на главной
    │   ├── ServicesSection.vue       # 6 карточек подсистем
    │   ├── MobileMenu.vue            # выезжающее мобильное меню
    │   ├── MainButton.vue            # кастомная кнопка (Options API)
    │   ├── ScrollToTop.vue           # кнопка «наверх»
    │   ├── VideoPopup.vue            # модальное окно с видео
    │   ├── TheBreadcrumbs.vue        # хлебные крошки
    │   ├── DepartmentLayout.vue      # layout страницы отдела
    │   ├── EmployeesSection.vue      # блок сотрудников отдела
    │   ├── BulletListSection.vue     # секция с маркированным списком
    │   ├── FeatureList.vue           # список возможностей/особенностей
    │   ├── cards/
    │   │   ├── ContactCard.vue       # карточка контакта
    │   │   └── ContactCardLarge.vue  # большая карточка контакта
    │   └── icons/                    # SVG-иконки (логотипы, бургер, стрелки)
    ├── composables/
    │   └── useAnimations.js          # GSAP + Lenis + IntersectionObserver
    ├── data/
    │   ├── navigation.js             # URL всех подсистем и сервисов
    │   └── departments.js            # данные отделов (сотрудники, контакты, features)
    └── views/
        ├── HomePage.vue              # главная
        ├── AboutPage.vue             # об управлении
        ├── CDOPage.vue               # отдел ЦДО
        ├── OOLPage.vue               # отдел ООЛ
        ├── ResourcePage.vue          # сектор РООД
        └── InstructionsPage.vue      # инструкции
```

## Деплой на GitHub Pages

```bash
# v1 — в корень сайта
npm run deploy

# v2 — в поддиректорию /v2/
npm run deploy:v2
```

Обе команды используют `gh-pages`. Для v2 флаг `--dest v2` размещает собранные файлы в подпапке `v2/` ветки `gh-pages`.

## Подсистемы СКИФ

| Сервис | URL |
|--------|-----|
|🟦 ДО.СКИФ | https://do.skif.donstu.ru/ |
|◼️ СКИФ.ТЕСТ | https://skif.donstu.ru/test/ |
|🟥 СКИФ.Библиотека | https://de.donstu.ru/zaoch/organizations/1 |
|🟩 СКИФ.СПЕЦ | https://skif.donstu.ru/spec/ |
|🌍 СКИФ.Международный | https://int.skif.donstu.ru/ |
|⬛ ПРОФ.СКИФ | https://prof.skif.donstu.ru/ |

Ссылки централизованы в `src/data/navigation.js`.
