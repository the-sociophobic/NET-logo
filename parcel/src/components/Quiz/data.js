import React from 'react'


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
    nameEng: "brook",
    fullName: "Питер Брук",
    video: "brook",
    ogImage: "https://sun9-43.userapi.com/c858320/v858320417/d7e58/hVXz5W3vIgg.jpg",
    ogImage2: "https://sun9-71.userapi.com/c858216/v858216752/d9d98/q0Lm4F1QN98.jpg",
    points: [
      "Если вы Питер Брук, скорее всего вы мыслите основательными концепциями. Пользуйтесь этими способностями и становитесь живым классиком.",
      "Грамотно распределяйте свое время. Тратить десять лет желательно только на реализацию гениальных идей. С не очень гениальными — лучше не затягивать. Пользуйтесь ежедневником или менеджерами задач, чтобы планировать свою жизнь.",
      "Чаще читайте произведения, которые считаются классикой. Возможно именно они помогут вам придумать что-то гениальное. В особенности Шекспира и Чехова.",
    ],
    ticketLink: "https://netfest.ru/brook/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-brook" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-brook&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-brook"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-brook&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-brook"
  },
  {
    name: "эспиноса",
    nameEng: "espinoza",
    fullName: "Давид Эспиноса",
    video: "espinoza",
    ogImage: "https://sun9-15.userapi.com/c858320/v858320417/d7e6a/Q4P60RScy4U.jpg",
    ogImage2: "https://sun9-4.userapi.com/c858216/v858216752/d9daa/wEZvryiRMe0.jpg",
    points: [
      "Если вы Давид Эспиноса — вероятнее всего вам очень хорошо: вы любите Испанию, милые вещи и вкусную еду. Просто вспоминайте о том, что у вас всё есть — почаще.",
      "Думайте о своем внутреннем ребенке — слушайте то, о чем он вам говорит и играйте в игрушки.",
      "Всемирные вопросы человечества у вас вряд ли получится разрешить, но знать историю — всегда важно и полезно. Займитесь этим вопросом.",
    ],
    ticketLink: "https://netfest.ru/espinosa/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-espinoza" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-espinoza&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-espinoza"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-espinoza&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-espinoza",
  },
  {
    name: "митчелл",
    nameEng: "mitchel",
    fullName: "Кэти Митчелл",
    video: "mitchel",
    ogImage: "https://sun9-3.userapi.com/c858320/v858320417/d7e7c/QhQlvJ2Irw8.jpg",
    ogImage2: "https://sun9-36.userapi.com/c858216/v858216752/d9dbc/jOaoRFd-EKc.jpg",
    points: [
      "Если вы Кэти Митчелл, значит вы очень любите восточно-европейский театр, Пину Бауш и русский кинематограф — например, Тарковского. Если вы не знали об этой любви — займитесь ресерчем.",
      "Купите домашний проектор, скорее всего, видеопроекции — это ваша слабость.",
      "Проблемы современного общества — миграция, глобальное потепление и избыток мировой агрессии то, что вас волнует. Постарайтесь сделать вашу жизнь экологичной и открытой к другим людям.",
    ],
    ticketLink: "https://netfest.ru/mitchell/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-mitchel" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-mitchel&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-mitchel"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-mitchel&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-mitchel",
  },
  {
    name: "мило рау",
    nameEng: "rau",
    fullName: "Мило Рау",
    video: "rau",
    ogImage: "https://sun9-71.userapi.com/c858320/v858320417/d7e85/Q22ClboyytQ.jpg",
    ogImage2: "https://sun9-7.userapi.com/c858216/v858216752/d9dc5/-OwPqrAcAZ8.jpg",
    points: [
      "Если вы Мило Рау, то вам нельзя находиться в России. Скорее берите билеты куда угодно и уезжайте. Срочно.",
      "Вероятно, вас очень волнуют различные неразрешимые политические вопросы. Постарайтесь перестать об этом разговаривать и начните как-то это сублимировать — поставьте спектакль, в конце концов.",
      {
        label: "Возможно, у вас есть склонность к различным видам манифестирования. Почаще записывайте свои мысли и составляйте ",
        link: {
          label: "собственные манифесты",
          to: "https://vk.com/wall-32694718_611"
        },
        after: "."
      },
    ],
    ticketLink: "https://netfest.ru/rau/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-rau" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-rau&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-rau"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-rau&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-rau",
  },
  {
    name: "димчев",
    nameEng: "dimchev",
    fullName: "Иво Димчев",
    video: "dimchev",
    ogImage: "https://sun9-18.userapi.com/c858320/v858320417/d7e61/lZy0yNaz9Po.jpg",
    ogImage2: "https://sun9-33.userapi.com/c858216/v858216752/d9da1/jGoHyzChMLY.jpg",
    points: [
      "Если вы Иво Димчев — скорее всего вы были очень талантливым ребенком. Вы умеете и петь, и танцевать, и ставить хореографию, и перформермером можете быть, и художником. Не зарывайте свой талант в землю.",
      {
        label: "Попытайте удачу в различных телевизионных шоу. Возможно, именно вам там ",
        link: {
          label: "повезет",
          to: "https://www.youtube.com/watch?v=HVzpL9ghhNE"
        },
        after: "."
      },
      "Не бойтесь говорить и делать то, что считаете нужным. Отстаивайте свои принципы, убеждения и себя самих.",
    ],
    ticketLink: "https://netfest.ru/dimchev/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-dimchev" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-dimchev&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-dimchev"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-dimchev&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-dimchev",
    promocode: {
      code: "SELFIEPROMO",
      label: "ПРОМОКОД НА 50% СКИДКУ"
    }
  },
  {
    name: "лиделл",
    nameEng: "liddel",
    fullName: "Анхелика Лидделл",
    video: "liddel",
    ogImage: "https://sun9-63.userapi.com/c858320/v858320417/d7e73/TfoFahxtgMw.jpg",
    ogImage2: "https://sun9-66.userapi.com/c858216/v858216752/d9db3/fH2-5VLI1so.jpg",
    points: [
      "Если вы Анхелика Лидделл, вы наверняка можете назвать себя иконой феминизма. Если нет — углубитесь в эту тему. Изучите ее, возможно, вы откроете нового_ую себя.",
      "Читайте новостные сводки и современную драматургию. Возможно, что-то из этого вдохновит вас на создание собственного спектакля/книги/перформанса/статьи или хотя бы поста в инстаграме, но талантливого.",
      "Не ограничивайте себя рамками и границами. Помните, вы художник и вы так видите.",
    ],
    ticketLink: "https://netfest.ru/liddell/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-liddel" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-liddel&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-liddel"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-liddel&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-liddel",
  },
  {
    name: "юхананов",
    nameEng: "ukhanov",
    fullName: "Борис Юхананов",
    video: "ukhanov",
    ogImage: "https://sun9-1.userapi.com/c858320/v858320417/d7e97/jvDVNCFTNqQ.jpg",
    ogImage2: "https://sun9-54.userapi.com/c858216/v858216752/d9dd7/UwAIAGk_WAI.jpg",
    points: [
      "Если вы Борис Юхананов, вам наверняка есть, что рассказать. Вы много чего сделали за свою жизнь, а ваш богатый опыт позволяет вам быть компетентным во многих вопросах. Говорите и не останавливайтесь.",
      "Почаще думайте о том, что вы квант, который может стать волной и становитесь ей.",
      "Постарайтесь не заблудиться в облаках вашего мистического тумана. Метафоры — это явно ваш конек.",
    ],
    ticketLink: "https://netfest.ru/yukhananov/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-ukhanov" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-ukhanov&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-ukhanov"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-ukhanov&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-ukhanov",
  },
  {
    name: "сигна",
    nameEng: "signa",
    fullName: "SIGNA",
    video: "signa",
    ogImage: "https://sun9-2.userapi.com/c858320/v858320417/d7e8e/VQ8XgB7jHmA.jpg",
    ogImage2: "https://sun9-15.userapi.com/c858216/v858216752/d9dce/3lTs29j0z5Y.jpg",
    points: [
      "Если вы SIGNA — скорее всего вы н и к о г д а ничего никому не рассказываете. Вы не фотографируетесь, не любите снимать видео, не любите, когда за вами наблюдают. Наш совет — успокойтесь. Всем всё равно.",
      "Вероятно, ваш дом — это склад мебели, различных предметов декора и одежды. Не держитесь за вещи. Вещи — это ничто. Ссылочку на книгу Мари Кондо — “Магическая уборка” прилагаем.",
      "Постарайтесь нажить наследство до того момента, как начнете умирать. Помните, рано или поздно это произойдет, поэтому иногда и курабье после шести можно, и с парашютом прыгнуть раз в жизни не помешает.",
    ],
    ticketLink: "https://netfest.ru/signa/",
    fb: <div className="fb-share-button" data-href="https://netfest.ru/i-am-signa" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnetfest.ru%2Fi-am-signa&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>,
    vk: () => VK.Share.button({url: "https://netfest.ru/i-am-signa"},{type: "round_nocount", text: "Share"}),
    fb2: "/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fnetfest.ru%2Fi-am-signa&display=popup&ref=plugin&src=share_button",
    vk2: "https://vk.com/share.php?url=https%3A%2F%2Fnetfest.ru%2Fi-am-signa",
  },
]


export {
  questions,
  names,
}