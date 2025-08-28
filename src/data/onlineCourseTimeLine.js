export const steps = [
    {
        id: "idea",
        title: "ИДЕЯ",
        description: `
      <p>Формирование идеи педагогического сценария МООК.</p>
      <p><strong>Содержание о курсе:</strong></p>
      <ul>
        <li>Наименование</li>
        <li>Срок обучения</li>
        <li>Содержание курса</li>
        <li>Компетенции</li>
      </ul>
    `,
        image: new URL("@/assets/TimeLineImg/color-idea.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-idea.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "preparation",
        title: "ПОДГОТОВКА",
        description: `
      <p>Подготовка электронных ресурсов по педагогическому сценарию МООК.</p>
      <ul>
        <li>Описание</li>
        <li>Лекционные и практические модули</li>
        <li>Презентации</li>
        <li>Видео</li>
        <li>Дополнения</li>
      </ul>
    `,
        image: new URL("@/assets/TimeLineImg/color-preparation.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-preparation.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "submission",
        title: "ПОДАЧА ЗАЯВКИ",
        description: `<p>Подача электронной заявки на ДО, СНИФ и проектирование онлайн-курса</p>`,
        image: new URL("@/assets/TimeLineImg/color-submission.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-submission.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "expertise",
        title: "ЭКСПЕРТИЗА",
        description: `
      <ul>
        <li>Проведение экспертизы курса с привлечением независимых экспертов</li>
        <li>Доработка курса по результатам экспертизы</li>
      </ul>
    `,
        image: new URL("@/assets/TimeLineImg/color-expertise.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-expertise.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "testing",
        title: "АПРОБАЦИЯ",
        description: `
      <p>Апробация и доработка курса:</p>
      <ul>
        <li>Проведение обучения с регистрацией замечаний и предложений</li>
        <li>Внесение корректировок по результатам тестирования курса</li>
      </ul>
    `,
        image: new URL("@/assets/TimeLineImg/color-testing.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-testing.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "certification",
        title: "СЕРТИФИКАЦИЯ",
        description: `<p>Получение сертификата о разработке, размещении МООК на СНИФ и использование в учебном процессе</p>`,
        image: new URL("@/assets/TimeLineImg/color-certification.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-certification.png", import.meta.url).href,
        isVisible: false,
    },
    {
        id: "realization",
        title: "РЕАЛИЗАЦИЯ ОНЛАЙН-КУРСА",
        description: `<p>Курс может быть использован при реализации образовательных программ ДГТУ и самообразования</p>`,
        image: new URL("@/assets/TimeLineImg/color-realization.png", import.meta.url).href,
        bw_image: new URL("@/assets/TimeLineImg/bw-realization.png", import.meta.url).href,
        isVisible: false,
    },
];
