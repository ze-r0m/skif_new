export const CONTACT_EMAIL = 'spu-06.1@donstu.ru'
export const SCHEDULE = 'Пн-Пт 08:30 - 17:00 (обед с 12:30 по 13:00)'

export const about = {
  manager: {
    fullName: 'Шлыкова Алла Ивановна',
    avatar: new URL('@/assets/avatars/shlykova.jpeg', import.meta.url).href,
    post: 'начальник управления',
    additionalPost: 'доцент',
    phone: '+8 (863) 238-15-83',
    email: 'ashlykova@donstu.ru',
    detailsLink: 'https://donstu.ru/employees/shlykova-alla-ivanovna/'
  },
  employees: [
    {
      fullName: 'Поркшеян Маркос Витальевич',
      avatar: new URL('@/assets/avatars/porksheyan.jpeg', import.meta.url).href,
      post: 'заместитель начальника',
      detailsLink: 'https://donstu.ru/employees/porksheyan-markos-vitalevich/'
    },
    {
      fullName: 'Степанян Сурен Давидович',
      avatar: new URL('@/assets/avatars/stepanyan.jpeg', import.meta.url).href,
      post: 'ведущий эксперт',
      detailsLink: 'https://donstu.ru/employees/stepanyan-suren-davidovich/'
    },
    // {
    //   fullName: 'Иванов Иван Иванович',
    //   avatar: '',
    //   post: 'Специалист',
    //   detailsLink: '/employees/ivanov-ivan/'
    // },
  ]
}

export const cdo = {
  features: [
    'консультирование по вопросам использования дистанционных технологий и реализации электронного обучения в ДГТУ;',
    'техническая и методическая поддержка преподавателей при разработке курсов электронного обучения, в том числе открытых онлайн-курсов, техническая экспертиза контента;',
    'методическая помощь кафедрам и авторам в создании электронных учебно-методических изданий на портале электронного обучения ДГТУ;',
    'осуществление аппаратно-программной поддержки портала электронного обучения, организация доступа пользователей к ресурсам портала с учетом политики разграничения прав;',
    'обеспечение работоспособности и техническое обслуживание компьютерного парка УЦОТ, внутренних сетей и программного обеспечения для реализации электронного обучения;',
    'техническая поддержка электронной системы обучения СКИФ ДГТУ.'
  ],
  contactData: {
    phones: [
      { number: '273-84-73 (24-73)', caption: 'Техническая поддержка СКИФ (кабинет 1-423)' },
      { number: '273-86-59 (24-59)', caption: 'Заочная форма обучения (кабинет 1-420)' },
    ],
    emails: [CONTACT_EMAIL],
    addresses: ['344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-423'],
    schedule: SCHEDULE
  },
  manager: {
    fullName: 'Ачаров Борис Федорович',
    avatar: new URL('@/assets/avatars/cdo/acharov.jpeg', import.meta.url).href,
    post: 'начальник отдела',
    additionalPost: '',
    phone: '+8 (863) 273-84-73',
    email: 'bacharov@donstu.ru',
    detailsLink: 'https://donstu.ru/employees/acharov-boris-fedorovich/'
  },
  employees: [
    // {
    //   fullName: 'Иванов Иван Иванович',
    //   avatar: '',
    //   post: 'Специалист',
    //   detailsLink: '/employees/ivanov-ivan/'
    // },
  ]
}

export const ool = {
  features: [
    'сбор исходной информации для построения проекта расписания;',
    'разработка и формирование для учебных групп расписания учебных занятий обучающихся;',
    'разработка и формирование для учебных групп расписания промежуточной аттестации обучающихся;',
    'формирование расписания обучающихся и направлении профессионального роста при внедрении образовательных траекторий;',
    'реализация взаимосвязей встреч между модулями в расписании;',
    'оптимизация расписания и графика использования аудиторного фонда университета;',
    'формирование отчетных форм по разработанному расписанию;',
    'формирование отчета о недостатках в системе составления расписания и реализация мероприятий по оптимизации учебного расписания при внедрении индивидуальных образовательных траекторий;',
    'участие в разработке годового плана УЦОТ в области оптимизации расписания и учебного аудиторного фонда.'
  ],
  contactData: {
    phones: [
      { number: '273-84-41 (24-41)', caption: 'Расписание ПИШ, Т-университет (кабинет 1-420)' },
      { number: '273-83-82 (23-82)', caption: 'Классическое расписание (кабинет 1-422)' },
      { number: '201-90-58 (40-58)', caption: 'Классическое расписание (кабинет 21-321а)' }
    ],
    emails: [CONTACT_EMAIL],
    addresses: [
      '344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-420',
      '344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-422',
      '344022, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 21-321а',
    ],
    schedule: SCHEDULE
  },
  manager: {
    fullName: 'Гнедина Ольга Александровна',
    avatar: new URL('@/assets/avatars/ool/gnedina.jpeg', import.meta.url).href,
    post: 'начальник отдела',
    additionalPost: 'старший преподаватель',
    phone: '+8 (863) 273-84-41',
    email: 'ognedina@donstu.ru',
    detailsLink: 'https://donstu.ru/employees/gnedina-olga-aleksandrovna/'
  },
  employees: [
    {
      fullName: 'Жевагина Аза Юрьевна',
      avatar: new URL('@/assets/avatars/ool/zhevagina.jpg', import.meta.url).href,
      post: 'ведущий документовед',
      detailsLink: 'https://donstu.ru/employees/zhevagina-aza-yurevna/'
    },
    {
      fullName: 'Коханюк Наталья Алексеевна',
      avatar: new URL('@/assets/avatars/ool/kohaniyk.jpg', import.meta.url).href,
      post: 'ведущий документовед',
      detailsLink: 'https://donstu.ru/employees/kokhanyuk-natalya-alekseevna/'
    },
    // {
    //   fullName: 'Иванов Иван Иванович',
    //   avatar: '',
    //   post: 'Специалист',
    //   detailsLink: '/employees/ivanov-ivan/'
    // },
  ]
}

export const resource = {
  features: [
    'формирование предложений по модернизации аудиторного фонда университета;',
    'оптимизация расписания и графика использования аудиторного фонда университета;',
    'формирование и актуализация сведений об аудиторном фонде университета и его материально-техническом обеспечении;',
    'формирование аналитических отчетов в рамках деятельности сектора.'
  ],
  contactData: {
    phones: [
      { number: '273-86-70 (26-70)', caption: 'Сектор РООД, Почасовка (кабинет 1-418)' },
    ],
    emails: [CONTACT_EMAIL],
    addresses: ['344003, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 1-418'],
    schedule: SCHEDULE
  },
  manager: {
    fullName: 'Недоступ Евгений Александрович',
    avatar: new URL('@/assets/avatars/resourse/nedostup.jpeg', import.meta.url).href,
    post: 'заведующий сектором',
    additionalPost: 'преподаватель',
    phone: '+8 (863) 273-84-41',
    email: 'resource@donstu.ru',
    detailsLink: 'https://donstu.ru/employees/nedostup-evgeniy-aleksandrovich/'
  },
  employees: [
    {
      fullName: 'Великдань Дарья Алексеевна',
      avatar: new URL('@/assets/avatars/resourse/velikdan.jpeg', import.meta.url).href,
      post: 'аналитик',
      detailsLink: 'https://donstu.ru/employees/velikdan-darya-alekseevna/'
    },
    // {
    //   fullName: 'Иванов Иван Иванович',
    //   avatar: '',
    //   post: 'Специалист',
    //   detailsLink: '/employees/ivanov-ivan/'
    // },
  ]
}
