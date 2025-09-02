export const rows = [
    { title: "" }, // пустой первый элемент, если нужен для линии
    {
        title: "ИДЕЯ",
        text: [
            { type: "p", content: "Формирование идеи педагогического сценария МООК." },
            { type: "p", content: "Сведения о курсе:" },
            { type: "ul", items: ["Наименование", "Срок обучения", "Содержание курса", "Компетенции"] }
        ],
        image: new URL("@/assets/TimeLineImg/color-idea.png", import.meta.url).href
    },
    {
        title: "ПОДГОТОВКА",
        text: [
            { type: "p", content: "Подготовка электронных ресурсов по педагогическому сценарию МООК." },
            { type: "p", content: "Содержание курса:" },
            { type: "ul", items: ["Описание", "Лекционные и практические модули", "Презентации", "Видео", "Дополнения"] }
        ],
        image: new URL("@/assets/TimeLineImg/color-preparation.png", import.meta.url).href
    },
    {
        title: "ПОДАЧА ЗАЯВКИ",
        text: [
            { type: "ul", items: ["Подача электронной заявки на ДО.СКИФ и проектирование онлайн-курса"] }
        ],
        image: new URL("@/assets/TimeLineImg/color-submission.png", import.meta.url).href
    },
    {
        title: "ЭКСПЕРТИЗА",
        text: [
            { type: "ul", items: [
                    "Проведение экспертизы курса с привлечением независимых экспертов",
                    "Доработка курса по результатам экспертизы"
                ] }
        ],
        image: new URL("@/assets/TimeLineImg/color-expertise.png", import.meta.url).href
    },
    {
        title: "АПРОБАЦИЯ",
        text: [
            { type: "p", content: "Апробация и доработка курса:" },
            { type: "ul", items: [
                    "Проведение обучения с регистрацией замечаний и предложений",
                    "Внесение корректировок по результатам тестирования курса"
                ] }
        ],
        image: new URL("@/assets/TimeLineImg/color-testing.png", import.meta.url).href
    },
    {
        title: "СЕРТИФИКАЦИЯ",
        text: [
            { type: "ul", items: [
                    "Получение сертификата о разработке, размещении МООК на СКИФ и использование в учебном процессе"
                ] }
        ],
        image: new URL("@/assets/TimeLineImg/color-certification.png", import.meta.url).href
    },
    {
        title: "РЕАЛИЗАЦИЯ ОНЛАЙН-КУРСА",
        text: [
            { type: "ul", items: [
                    "Курс может быть использован при реализации образовательных программ ДГТУ и самообразования"
                ] }
        ],
        image: new URL("@/assets/TimeLineImg/color-realization.png", import.meta.url).href
    },
    { title: "" }
];