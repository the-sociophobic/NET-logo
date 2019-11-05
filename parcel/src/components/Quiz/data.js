const questions = [
  {
    question: "В свободное время, вы",
    options: [
      {
        answer: "Думаю о вечных вопросах человечества",
        names: ["брук", ],
      },
      {
        answer: "Пью пиво с бургерами",
        names: ["эспиноса", ],
      },
      {
        answer: "Беспокоюсь о проблемах эмиграции и глобальном потеплении",
        names: ["митчелл", ],
      },
      {
        answer: "Размышляю, как уменьшить количество насилия и зла в этой вселенной",
        names: ["мило рау", ],
      },
      {
        answer: "Хочу, чтобы мое искусство было понятно всем, а не только интеллектуалам и занудам",
        names: ["димчев", ],
      },
      {
        answer: "Я фем-активист_ка",
        names: ["лиделл", ],
      },
      {
        answer: "Думаю о том, какой я великий",
        names: ["юхананов", ],
      },
      {
        answer: "В свободное время — я панк",
        names: [],
      },
    ]
  },
  {
    question: "Что вас больше всего бесит в этом мире?",
    options: [
      {
        answer: "Когда другие люди меня не слушаются и не повинуются мне беспрекословно",
        names: [],
      },
      {
        answer: "Если люди не принимают мою сущность и мои принципы",
        names: [],
      },
      {
        answer: "Бесит, когда люди плохо формулируют свои мысли",
        names: [],
      },
      {
        answer: "Когда люди вторгаются в мое личное пространство слишком настойчиво",
        names: [],
      },
      {
        answer: "Я ненавижу несправедливость",
        names: [],
      },
      {
        answer: "Когда вокруг слишком много вещей и лишних предметов — это просто ужасно",
        names: [],
      },
      {
        answer: "Меня вообще все бесит",
        names: [],
      },
    ]
  },
  {
    question: "Если бы вы поставили спектакль или перформанс — сколько времени он бы шел?",
    options: [
      {
        answer: "Главное процесс — поэтому, как можно дольше. Лучше сделать что-нибудь в нескольких частях, а еще лучше — растянуть показ этих частей на неделю, на месяц, на год",
        names: [],
      },
      {
        answer: "Категории времени и пространства — то, что я всегда ставлю под сомнение",
        names: [],
      },
      {
        answer: "Главное — полное зрительское погружение, поэтому — четыре часа минимум, а дальше — как пойдет",
        names: ["сигна", ],
      },
      {
        answer: "Время — это последнее, о чем я думаю",
        names: [],
      },
      {
        answer: "Два-три часа — мне хватит",
        names: [],
      },
    ]
  },
  {
    question: "Как дела с актерами?",
    options: [
      {
        answer: "Актер — чудесный, мудрейший, святой ребенок; его надо любить и ни в коем случае не обижать; актер ничего не должен.",
        names: ["юхананов", ],
      },
      {
        answer: "Перед спектаклями и во время актеры будут тренироваться на велотренажере — это мой секрет идеального спектакля",
        names: ["митчелл", ],
      },
      {
        answer: "При подготовке спектакля заставлю их жить в одном месте. Должно быть максимальное погружение",
        names: ["сигна", ],
      },
      {
        answer: "Я все могу сам: я и художник, и перформер, и танцор, и хореограф, и петь умею — мне никто не нужен",
        names: ["димчев", ],
      },
      {
        answer: "Я за театр без актеров",
        names: ["эспиноса", ],
      },
    ]
  },
  {
    question: "Что лучше — театр или кино?",
    options: [
      {
        answer: "у меня сравнения типа «лучше/хуже» не работают",
        names: [],
      },
      {
        answer: "однозначно театр",
        names: [],
      },
      {
        answer: "однозначно кино",
        names: [],
      },
      {
        answer: "театр, но с объемными видеопроекциями на сцене",
        names: [],
      },
      {
        answer: "кино, но про театр",
        names: [],
      },
    ]
  },
]

const names = [
  {
    name: "брук",
    fullName: "Питер Брук",
    points: [
      "Если вы Питер Брук, скорее всего вы мыслите основательными концепциями. Пользуйтесь этими способностями и становитесь живым классиком.",
      "Грамотно распределяйте свое время. Тратить десять лет желательно только на реализацию гениальных идей. С не очень гениальными — лучше не затягивать. Пользуйтесь ежедневником или менеджерами задач, чтобы планировать свою жизнь.",
      "Чаще читайте произведения, которые считаются классикой. Возможно именно они помогут вам придумать что-то гениальное. В особенности Шекспира и Чехова.",
    ],
    ticketLink: "https://netfest.ru/brook/",
  },
  {
    name: "эспиноса",
    fullName: "Давид Эспиноса",
    points: [
      "Если вы Давид Эспиноса — вероятнее всего вам очень хорошо: вы любите Испанию, милые вещи и вкусную еду. Просто вспоминайте о том, что у вас всё есть — почаще.",
      "Думайте о своем внутреннем ребенке — слушайте то, о чем он вам говорит и играйте в игрушки.",
      "Всемирные вопросы человечества у вас вряд ли получится разрешить, но знать историю — всегда важно и полезно. Займитесь этим вопросом.",
    ],
    ticketLink: "https://netfest.ru/espinosa/",
  },
  {
    name: "митчелл",
    fullName: "Кэти Митчелл",
    points: [
      "Если вы Кэти Митчелл, значит вы очень любите восточно-европейский театр, Пину Бауш и русский кинематограф — например, Тарковского. Если вы не знали об этой любви — займитесь ресерчем.",
      "Купите домашний проектор, скорее всего, видеопроекции — это ваша слабость.",
      "Проблемы современного общества — миграция, глобальное потепление и избыток мировой агрессии то, что вас волнует. Постарайтесь сделать вашу жизнь экологичной и открытой к другим людям.",
    ],
    ticketLink: "https://netfest.ru/mitchell/",
  },
  {
    name: "мило рау",
    fullName: "Мило Рау",
    points: [
      "Если вы Мило Рау, то вам нельзя находиться в России. Скорее берите билеты куда угодно и уезжайте. Срочно.",
      "Вероятно, вас очень волнуют различные неразрешимые политические вопросы. Постарайтесь перестать об этом разговаривать и начните как-то это сублимировать — поставьте спектакль, в конце концов.",
      {
        label: "Возможно, у вас есть склонность к различным видам манифестирования. Почаще записывайте свои мысли и составляйте собственные манифесты.",
        link: {
          label: "(Манифест Гента)",
          to: "https://vk.com/wall-32694718_611"
        }
      },
    ],
    ticketLink: "https://netfest.ru/rau/",
  },
  {
    name: "димчев",
    fullName: "Иво Димчев",
    points: [
      "Если вы Иво Димчев — скорее всего вы были очень талантливым ребенком. Вы умеете и петь, и танцевать, и ставить хореографию, и перформермером можете быть, и художником. Не зарывайте свой талант в землю.",
      "Попытайте удачу в различных телевизионных шоу. Возможно, именно вам там повезет. (вставить ссылку на выступление Иво Димчева на Икс-факторе)",
      "Не бойтесь говорить и делать то, что считаете нужным. Отстаивайте свои принципы, убеждения и себя самих.",
    ],
    ticketLink: "https://netfest.ru/dimchev/",
    promocode: {
      code: "SELFIEPROMO",
      label: "ПРОМОКОД НА 50% СКИДКУ"
    }
  },
  {
    name: "лиделл",
    fullName: "Анхелика Лидделл",
    points: [
      "Если вы Анхелика Лидделл, вы наверняка можете назвать себя иконой феминизма. Если нет — углубитесь в эту тему. Изучите ее, возможно, вы откроете нового_ую себя.",
      "Читайте новостные сводки и современную драматургию. Возможно, что-то из этого вдохновит вас на создание собственного спектакля/книги/перформанса/статьи или хотя бы поста в инстаграме, но талантливого.",
      "Не ограничивайте себя рамками и границами. Помните, вы художник и вы так видите.",
    ],
    ticketLink: "https://netfest.ru/liddell/",
  },
  {
    name: "юхананов",
    fullName: "Борис Юхананов",
    points: [
      "Если вы Борис Юхананов, вам наверняка есть, что рассказать. Вы много чего сделали за свою жизнь, а ваш богатый опыт позволяет вам быть компетентным во многих вопросах. Говорите и не останавливайтесь.",
      "Почаще думайте о том, что вы квант, который может стать волной и становитесь ей.",
      "Постарайтесь не заблудиться в облаках вашего мистического тумана. Метафоры — это явно ваш конек.",
    ],
    ticketLink: "https://netfest.ru/yukhananov/",
  },
  {
    name: "сигна",
    fullName: "SIGNA",
    points: [
      "Если вы SIGNA — скорее всего вы н и к о г д а ничего никому не рассказываете. Вы не фотографируетесь, не любите снимать видео, не любите, когда за вами наблюдают. Наш совет — успокойтесь. Всем всё равно.",
      "Вероятно, ваш дом — это склад мебели, различных предметов декора и одежды. Не держитесь за вещи. Вещи — это ничто. Ссылочку на книгу Мари Кондо — “Магическая уборка” прилагаем.",
      "Постарайтесь нажить наследство до того момента, как начнете умирать. Помните, рано или поздно это произойдет, поэтому иногда и курабье после шести можно, и с парашютом прыгнуть раз в жизни не помешает.",
    ],
    ticketLink: "https://netfest.ru/signa/",
  },
]


export {
  questions,
  names,
}