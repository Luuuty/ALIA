/* ---------------- DATA ---------------- */
const categories = [
  {key:'all', ru:'Все', ky:'Баары'},
  {key:'detox', ru:'Детокс и очищение', ky:'Детокс жана тазалоо'},
  {key:'immune', ru:'Иммунитет и клетки', ky:'Иммунитет жана клетка'},
  {key:'weight', ru:'Контроль веса', ky:'Салмакты көзөмөлдөө'},
  {key:'joints', ru:'Суставы и кости', ky:'Муундар жана сөөктөр'},
  {key:'women', ru:'Женское здоровье', ky:'Аялдардын ден соолугу'},
  {key:'men', ru:'Мужское здоровье', ky:'Эркектердин ден соолугу'},
  {key:'face', ru:'Уход за лицом', ky:'Жүзгө кам көрүү'},
];

const products = [
  {
    id:'greenmax', category:'detox',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/greenmax.jpg',
    video:'assets/videos/greenmax.mp4',
    name:'GreenMAX',
    tag:{ru:'Детокс, очищение кишечника', ky:'Детокс, ичегини тазалоо'},
    desc:{
      ru:'Безопасный и удобный способ очистить организм. Формула «3 в 1»: очищение, восстановление, омоложение — поддерживает здоровье кишечника, способствует похудению, выводит токсины, защищает печень.',
      ky:'Организмди коопсуз жана ыңгайлуу тазалоо ыкмасы. «3 in 1» формуласы: тазалоо, калыбына келтирүү, жашартуу — ичегинин ден соолугун колдойт, арыктоого жардам берет, уулуу заттарды чыгарат, боорду коргойт.'
    },
    composition:['Хлорофилл','Псиллиум','Пробиотик','Расторопша','KiOnutrime-Cs','Клетчатка киви','Яблоко','Моросил'],
    benefits:{
      ru:['Детоксикация кишечника','Сбалансированное питание','Регулирует сахар в крови','Улучшает обмен веществ','Укрепляет иммунитет','Контроль веса и похудение','Уменьшает жир в печени','Профилактика заболеваний'],
      ky:['Ичегини тазалоо','Тең салмактуу тамактануу','Кандагы канттын деңгээлин жөндөйт','Зат алмашууну жакшыртат','Иммунитетти чыңдайт','Салмакты көзөмөлдөө','Боордогу майды азайтат','Ооруларды алдын алуу']
    }
  },
  {
    id:'mimax', category:'immune',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/mimax-1.jpg',
    video:'assets/videos/mimax.mp4',
    name:'MiMAX',
    tag:{ru:'Клеточное питание, омоложение', ky:'Клеткалык тамактануу, жашартуу'},
    desc:{
      ru:'Комплекс из растительного сырья с высокими антиоксидантными свойствами. Помогает восстановлению повреждённых клеток и нейтрализует свободные радикалы — с более здоровыми клетками вы живёте дольше.',
      ky:'Өсүмдүк чийки затынан жасалган, антиоксиданттык касиети жогору комплекс. Клеткалардын калыбына келишине жардам берет жана эркин радикалдарды нейтралдайт.'
    },
    composition:['Полифенолы яблока','Черничный порошок','Облепиха','Астаксантин','Экстракт сосны','Виноградная косточка'],
    benefits:{
      ru:['Замедляет старение','Улучшает состояние кожи','Противовоспалительное действие','Повышает тонус и энергию','Снимает усталость глаз','Защищает зрение','Усиливает метаболизм'],
      ky:['Карылыкты жайлатат','Теринин абалын жакшыртат','Сезгенүүгө каршы таасир','Тону жана энергияны жогорулатат','Көздүн чарчоосун басаңдатат','Көрүүнү коргойт','Зат алмашууну күчөтөт']
    }
  },
  {
    id:'blumax', category:'immune',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/blumax.jpg',
    video:'assets/videos/blumax.mp4',
    name:'BluMAX',
    tag:{ru:'Иммунитет, витамин C', ky:'Иммунитет, витамин C'},
    desc:{
      ru:'Мощный источник витамина C, защищающего клетки от токсинов. Содержит сине-зелёные водоросли AFA и гриб agaricus, которые активируют иммунную систему для борьбы с вирусами и бактериями.',
      ky:'Клеткаларды уулуу заттардан коргогон витамин C булагы. АФА балырлары жана агарикус козу карыны иммундук системаны активдештирет.'
    },
    composition:['Гриб Agaricus','Лимон','Стевия','Агава','Витамин C'],
    benefits:{
      ru:['Поддерживает иммунную систему','Уменьшает боль в суставах','Снижает риск сердечных заболеваний','Противовоспалительное действие','Улучшает здоровье дыхания','Мощный антиоксидант'],
      ky:['Иммундук системаны колдойт','Муундардагы ооруну азайтат','Жүрөк оорууларынын коркунучун азайтат','Сезгенүүгө каршы таасир','Дем алуу органдарын жакшыртат','Күчтүү антиоксидант']
    }
  },
  {
    id:'nutrimax', category:'weight',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/nutrimax.jpg',
    video:'assets/videos/nutrimax.mp4',
    name:'NutriMAX',
    tag:{ru:'Жиросжигание, контроль веса', ky:'Май жандыруу, салмакты көзөмөлдөө'},
    desc:{
      ru:'Полноценное питание организма. Помогает сбросить лишний вес и одновременно поддерживает здоровье, а тем, кому нужно — набрать мышечную массу.',
      ky:'Организмге толук кандуу тамактануу. Ашыкча салмакты түшүрүүгө жардам берет, ден соолукту колдойт, керек болсо булчуң массасын өстүрөт.'
    },
    composition:['Соевый белок','Зелёная фасоль','Кальций из водорослей','ФОС (пребиотик)','Стевия'],
    benefits:{
      ru:['Поддерживает здоровье мышц','Укрепляет кости и зубы','Контроль и снижение веса','Обеспечивает сытость','Помогает в регенерации клеток','Снижает холестерин','Антиоксидант'],
      ky:['Булчуңдардын ден соолугун колдойт','Сөөк жана тишти чыңдайт','Салмакты көзөмөлдөйт жана азайтат','Тоюнуучулукту камсыз кылат','Клеткалардын калыбына келишине жардам берет','Холестеринди азайтат','Антиоксидант']
    }
  },
  {
    id:'kordymax', category:'detox',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/product-graphic.png',
    video:'assets/videos/kordymax.mp4',
    name:'KordyMAX',
    tag:{ru:'Кордицепс, энергия', ky:'Кордицепс, энергия'},
    desc:{
      ru:'Ботанический напиток на основе Cordyceps sinensis — «короля ста лекарств». Содержит 16 видов аминокислот и селен, регулирует работу печени, почек, сердца, снимает усталость.',
      ky:'Cordyceps sinensis негизиндеги ботаникалык суусундук. 16 түрдөгү аминокислота жана селен камтыйт, боордун, бөйрөктүн, жүрөктүн иштешин жөндөйт, чарчоону басаңдатат.'
    },
    composition:['Cordyceps sinensis','16 аминокислот','Селен'],
    benefits:{
      ru:['Противоопухолевый эффект','Регулирует функцию печени','Регулирует функцию почек','Эффект против усталости','Регулирует иммунную систему','Улучшает энергию клеток','Регулирует работу сердца'],
      ky:['Шишикке каршы таасир','Боордун иштешин жөндөйт','Бөйрөктүн иштешин жөндөйт','Чарчоого каршы таасир','Иммундук системаны жөндөйт','Клеткалардын энергиясын жакшыртат','Жүрөктүн иштешин жөндөйт']
    }
  },
  {
    id:'fleximax', category:'joints',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/banner2-en.png',
    video:'assets/videos/fleximax.mp4',
    name:'FlexiMax',
    tag:{ru:'Суставы, кости, печень', ky:'Муундар, сөөктөр, боор'},
    desc:{
      ru:'Укрепляет суставы и кости, устраняет симптомы воспаления, облегчает боль при артрите и артрозе. Рекомендуется принимать после очищения курсами GreenMAX и MiMAX.',
      ky:'Муундар менен сөөктөрдү бекемдейт, сезгенүү белгилерин азайтат, артрит жана артроз оорусундагы ооруну жеңилдетет. GreenMAX жана MiMAX менен тазалангандан кийин кабыл алуу сунушталат.'
    },
    composition:['Витамин D','Апельсин','Глюкозамин (кукуруза)','Гиалуроновая кислота','Хондроитин (морской салат)','Куркума'],
    benefits:{
      ru:['Смазывает суставы','Укрепляет здоровье суставов и костей','Облегчает воспалительные симптомы','Облегчает боль в суставах','Снимает дискомфорт в пищеварении','Поддержка здоровья печени'],
      ky:['Муундарды майлайт','Муун жана сөөктүн ден соолугун чыңдайт','Сезгенүү белгилерин жеңилдетет','Муундардагы ооруну басаңдатат','Тамак сиңирүүдөгү дискомфортту жеңилдетет','Боордун ден соолугун колдойт']
    }
  },
  {
    id:'machoman', category:'men',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/product-1.png',
    video:'assets/videos/machoman.mp4',
    name:'Machoman',
    tag:{ru:'Мужское сексуальное здоровье', ky:'Эркектердин жыныстык ден соолугу'},
    desc:{
      ru:'Формула для мужского сексуального здоровья с научно доказанными активными ингредиентами — обеспечивает здоровый кровоток и повышает энергию и выносливость.',
      ky:'Эркектердин жыныстык ден соолугу үчүн иштелип чыккан формула — кандын жакшы агылышын камсыз кылат, энергия жана чыдамкайлыкты жогорулатат.'
    },
    composition:['Грейпфрут','Экстракт маки','L-аргинин','Дамиана','Женьшень'],
    benefits:{
      ru:['Здоровая мужская сексуальная функция','Повышает энергию и выносливость','Улучшает кровоток','Улучшает концентрацию внимания','Снижает усталость','Улучшает мышечную силу'],
      ky:['Ден соолукка пайдалуу жыныстык функция','Энергия жана чыдамкайлыкты жогорулатат','Кандын агылышын жакшыртат','Көңүл топтоону жакшыртат','Чарчоону азайтат','Булчуң күчүн жогорулатат']
    }
  },
  {
    id:'yekaterina', category:'women',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/photo_2022-10-12_20-52-03.jpg',
    video:'assets/videos/yekaterina.mp4',
    name:'Ye-Katerina',
    tag:{ru:'Интим-гель для женщин', ky:'Аялдар үчүн интим-гель'},
    desc:{
      ru:'Средство для женской интимной гигиены со 100% натуральным составом, разработано в Малайзии. Поддерживает чистоту и свежесть, облегчает менструальный и вагинальный дискомфорт.',
      ky:'Малайзияда иштелип чыккан, 100% табигый курамдагы аялдардын интимдик гигиенасы үчүн каражат. Тазалыкты жана жаңылыкты сактайт, айыз мезгилиндеги дискомфортту жеңилдетет.'
    },
    composition:['Лабизия Пумила','Лобата','Дуб Галл','Экстракт бетеля','Чеснок','Лаванда'],
    benefits:{
      ru:['Тонизирует и подтягивает стенки','Регулирует менструальный цикл','Уменьшает боль при менструации','Регулирует гормональный баланс','Контролирует выделения и запах','Устраняет зуд и раздражение'],
      ky:['Тонустайт жана бекемдейт','Айыз циклин жөндөйт','Айыз учурундагы ооруну азайтат','Гормоналдык балансты жөндөйт','Бөлүнүүлөрдү жана жытты көзөмөлдөйт','Кычышуу менен ирритацияны жоёт']
    }
  },
  {
    id:'lamor', category:'face',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/lamor-1.jpg',
    video:'assets/videos/lamor.mp4',
    name:'L’amor',
    tag:{ru:'Маска-скраб для лица', ky:'Бет үчүн маска-скраб'},
    desc:{
      ru:'Маска и скраб с заживляющим, омолаживающим, противовоспалительным и отбеливающим эффектом. Подходит для всех возрастов, даже для чувствительной и проблемной кожи.',
      ky:'Айыктыруучу, жашартуучу, сезгенүүгө каршы жана агартуучу таасири бар бет үчүн маска-скраб. Бардык курактагы, сезимтал жана көйгөйлүү теринин ээлерине ылайыктуу.'
    },
    composition:['Рисовая пудра','Овсяная пудра (Avena Sativa)','Мультизерновой порошок','Соевый экстракт','Фукус','Алоэ вера','Масло чайного дерева','Мята','Жасмин'],
    benefits:{
      ru:['Удаляет омертвевшие клетки кожи','Питает кожу','Антибактериальное и антиоксидантное действие','Естественная защита от солнца','Улучшает упругость кожи','Эффективна при акне','Уменьшает морщины','Осветляет и придаёт сияние'],
      ky:['Өлгөн клеткаларды алып салат','Териге азык берет','Антибактериалдык жана антиоксиданттык таасир','Күндөн табигый коргоо','Теринин серпилгичтигин жакшыртат','Акнеге каршы натыйжалуу','Бырыштарды азайтат','Агартат жана жаркыратат']
    }
  },
  {
    id:'mi-serum', category:'face',
    image:'assets/mi-serum.jpeg',
    video:'assets/videos/mi-serum.mp4',
    name:'Mi SERUM',
    tag:{ru:'Женьшеневая сыворотка, уход за кожей', ky:'Женьшень сывороткасы, териге кам көрүү'},
    desc:{
      ru:'Женьшеневая сыворотка на основе стволовых клеток для всех возрастов и типов кожи. Создана на основе экстракта культуры клеток дикого женьшеня и обогащена восстанавливающими экстрактами трав, цветов и растений, а также омолаживающими коллагеновыми пептидами. Помогает глубоко питать кожу и делать её заметно более свежей и revitalизированной.',
      ky:'Бардык курак жана тери түрлөрү үчүн женьшень негизиндеги сыворотка. Жапайы женьшень клетка культурасынын экстракты, өсүмдүк жана гүл экстракттары, ошондой эле коллаген пептиддери менен байытылган. Терини терең азыктандырып, сергек жана жаңыланган көрүнүш берүүгө жардам берет.'
    },
    composition:['Экстракт культуры клеток женьшеня','Экстракт корня женьшеня','Биофлавоноиды','Экстракт брокколи','Экстракт Cynanchum Atratum','Коллагеновые пептиды','Экстракт красной водоросли','Экстракт корня софоры желтеющей','Экстракт плодов годжи','Экстракт эхинацеи пурпурной'],
    benefits:{
      ru:['Подходит для всех возрастов и типов кожи','Глубоко питает кожу','Помогает освежить тон лица','Поддерживает восстановление кожи','Дарит более revitalизированный вид','Содержит женьшень и коллагеновые пептиды'],
      ky:['Бардык куракка жана тери түрүнө ылайыктуу','Терини терең азыктандырат','Беттин өңүн сергитет','Теринин калыбына келишин колдойт','Жаңыланган көрүнүш берүүгө жардам берет','Женьшень жана коллаген пептиддерин камтыйт']
    }
  }
];

const testimonials = [
  {
    ru:{text:'Принимала GreenMAX и NutriMAX. Ожирение печени 3 степени стало 1 степени, похудела за неделю на 3 кг, отёки ушли — чувствую себя легко!', name:'Татьяна'},
    ky:{text:'GreenMAX жана NutriMAX ичтим. Боордун майлануусу 3-даражадан 1-даражага түштү, бир жумада 3 кг арыктадым, шишиктер кетти — өзүмдү жеңил сезем!', name:'Татьяна'}
  },
  {
    ru:{text:'За 9 дней приёма GreenMAX, MiMAX и BluMAX ушёл вес 1,5 кг, отёк с лица ушёл. Боль в ноге после операции прошла, суставы перестали болеть.', name:'Максим'},
    ky:{text:'GreenMAX, MiMAX жана BluMAX ичкен 9 күндө 1,5 кг салмак кетти, беттеги шишик басылды. Операциядан кийинки бут оорусу басылды, муундар ооруба калды.', name:'Максим'}
  },
  {
    ru:{text:'У ребёнка бронхиальная астма — плюс к MiMAX на ночь GreenMAX. За четыре года первый раз без одышки!', name:'Ирина'},
    ky:{text:'Балама бронхиалдык астма коюлган — түнкүсүн MiMAX менен GreenMAX бердим. Төрт жылдан бери биринчи жолу дем кыстыгуусуз!', name:'Ирина'}
  }
];

const i18n = {
  brandSub:{ru:'Официальный партнёр · Бишкек', ky:'Расмий өнөктөш · Бишкек'},
  navCatalog:{ru:'Каталог', ky:'Каталог'},
  navAbout:{ru:'О продукции', ky:'Продукция жөнүндө'},
  navReviews:{ru:'Отзывы', ky:'Пикирлер'},
  navContact:{ru:'Контакты', ky:'Байланыш'},
  navCta:{ru:'Написать', ky:'Жазуу'},
  heroEyebrow:{ru:'Здоровье и красота · M-International', ky:'Ден соолук жана сулуулук · M-International'},
  heroTitle:{ru:'Здоровье — главное богатство, которым можно поделиться', ky:'Ден соолук — бөлүшө турган эң башкы байлык'},
  heroLead:{ru:'Натуральная продукция для детокса, иммунитета, контроля веса и красоты. Помогу подобрать программу под ваш запрос и оформить заказ в Бишкеке и по всему Кыргызстану.', ky:'Детокс, иммунитет, салмакты көзөмөлдөө жана сулуулук үчүн табигый продукция. Сурооңузга жараша программа тандап, Бишкекте жана Кыргызстан боюнча буйрутма таризделейин.'},
  heroBtn1:{ru:'Смотреть каталог', ky:'Каталогду көрүү'},
  heroBtn2:{ru:'Написать в WhatsApp', ky:'WhatsApp\'ка жазуу'},
  heroTag:{ru:'Прямые продажи', ky:'Түз сатуу'},
  stat1:{ru:'товаров в каталоге', ky:'каталогдогу товар'},
  stat2:{ru:'натуральный состав', ky:'табигый курам'},
  stat3:{ru:'сертификат', ky:'сертификат'},
  trust1:{ru:'100% натуральные компоненты', ky:'100% табигый компоненттер'},
  trust2:{ru:'Халяль сертификат', ky:'Халал сертификаты'},
  trust3:{ru:'Лицензия прямых продаж', ky:'Түз сатуу лицензиясы'},
  trust4:{ru:'Доставка по Кыргызстану', ky:'Кыргызстан боюнча жеткирүү'},
  aboutEyebrow:{ru:'О продукции', ky:'Продукция жөнүндө'},
  aboutTitle:{ru:'Одна философия — три шага заботы о теле', ky:'Бир философия — денеге кам көрүүнүн үч кадамы'},
  aboutLead:{ru:'Очищение, восстановление и питание — вся линейка M-International построена вокруг этих трёх шагов, чтобы результат от каждого продукта был заметен и держался долго.', ky:'Тазалоо, калыбына келтирүү жана тамактануу — M-International линиясы ушул үч кадамга негизделген, ошондуктан ар бир продукциянын натыйжасы көрүнүктүү жана узак сакталат.'},
  catEyebrow:{ru:'Каталог', ky:'Каталог'},
  catTitle:{ru:'Продукция M-International', ky:'M-International продукциясы'},
  catLead:{ru:'Выберите категорию, чтобы найти нужное решение — от детокса до ухода за лицом.', ky:'Керектүү чечимди табуу үчүн категорияны тандаңыз — детокстон бет кароого чейин.'},
  revEyebrow:{ru:'Отзывы', ky:'Пикирлер'},
  revTitle:{ru:'Что говорят клиенты', ky:'Кардарлар эмне дешет'},
  ctTitle:{ru:'Готовы начать заботу о здоровье?', ky:'Ден соолукка кам көрүүнү баштоого даярсызбы?'},
  ctLead:{ru:'Напишите мне — подберу продукцию под ваш запрос, расскажу про программу приёма и оформлю заказ с доставкой.', ky:'Мага жазыңыз — сурооңузга жараша продукция тандап берем, кабыл алуу программасын түшүндүрөм жана жеткирүү менен буйрутма таризделейм.'},
  ctNote:{ru:'Работаю в Бишкеке и по всему Кыргызстану. Консультация бесплатная.', ky:'Бишкекте жана Кыргызстан боюнча иштейм. Консультация акысыз.'},
  ctWa:{ru:'Написать в WhatsApp', ky:'WhatsApp\'ка жазуу'},
  ctTg:{ru:'Написать в Instagram', ky:'Instagram\'га жазуу'},
  footText:{ru:'Официальный партнёр компании M-International · Бишкек, Кыргызстан', ky:'M-International компаниясынын расмий өнөктөшү · Бишкек, Кыргызстан'},
  modalComp:{ru:'Состав', ky:'Курамы'},
  modalBen:{ru:'Польза для здоровья', ky:'Ден соолукка пайдасы'},
  modalOrder:{ru:'Заказать в WhatsApp', ky:'WhatsApp аркылуу буйрутма берүү'},
  modalClose:{ru:'Закрыть', ky:'Жабуу'},
  more:{ru:'Подробнее', ky:'Толугураак'},
};

let lang = 'ru';
let activeCat = 'all';

function t(key){ return i18n[key] ? i18n[key][lang] : key; }

function setLang(l){
  lang = l;
  document.getElementById('btn-ru').classList.toggle('active', l==='ru');
  document.getElementById('btn-ky').classList.toggle('active', l==='ky');
  document.documentElement.lang = l === 'ru' ? 'ru' : 'ky';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  renderFilters();
  renderGrid();
  renderTesti();
}

function renderFilters(){
  const el = document.getElementById('filters');
  el.innerHTML = '';
  categories.forEach(c=>{
    const b = document.createElement('button');
    b.textContent = c[lang];
    b.className = c.key===activeCat ? 'active' : '';
    b.onclick = ()=>{ activeCat = c.key; renderFilters(); renderGrid(); };
    el.appendChild(b);
  });
}

function renderGrid(){
  const el = document.getElementById('grid');
  el.innerHTML = '';
  const list = products.filter(p => activeCat==='all' || p.category===activeCat);
  list.forEach((p,i)=>{
    const card = document.createElement('div');
    const revealTypes = ['reveal-scale', 'reveal-left', 'reveal-right', 'reveal-pop'];
    card.className = `card reveal ${revealTypes[i % revealTypes.length]}`;
    card.style.setProperty('--delay', ((i%3)*0.08)+'s');
    card.innerHTML = `
      <div class="card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="card-body">
        <p class="card-tag">${p.tag[lang]}</p>
        <h3>${p.name}</h3>
        <p class="card-desc">${p.desc[lang]}</p>
        ${p.video ? `<div class="card-video"><video src="${p.video}" controls preload="metadata" playsinline></video></div>` : ''}
        <div class="card-foot">
          <button class="link-more" onclick="openModal('${p.id}')">${t('more')} →</button>
        </div>
      </div>`;
    el.appendChild(card);
  });
}

function renderTesti(){
  const el = document.getElementById('testiGrid');
  el.innerHTML = '';
  testimonials.forEach((x,i)=>{
    const d = document.createElement('div');
    d.className = `testi reveal ${i % 2 ? 'reveal-right' : 'reveal-left'}`;
    d.style.setProperty('--delay', (i*0.1)+'s');
    d.innerHTML = `<p>«${x[lang].text}»</p><div class="name">— ${x[lang].name}</div>`;
    el.appendChild(d);
  });
}

function openModal(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalTag').textContent = p.tag[lang];
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc[lang];
  document.getElementById('modalComp').innerHTML = p.composition.map(c=>`<span class="chip">${c}</span>`).join('');
  document.getElementById('modalBen').innerHTML = p.benefits[lang].map(b=>`<li>${b}</li>`).join('');
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

renderFilters();
renderGrid();
renderTesti();

/* ---------------- SCROLL REVEAL OBSERVER ---------------- */
function prepareRevealAnimations(){
  document.querySelectorAll('.hero-stats div').forEach((el,i)=>{
    el.classList.add('reveal', 'reveal-pop');
    el.style.setProperty('--delay', `${i * 0.1}s`);
  });
  document.querySelectorAll('.contact-methods a').forEach((el,i)=>{
    el.classList.add('reveal', i % 2 ? 'reveal-right' : 'reveal-left');
    el.style.setProperty('--delay', `${i * 0.1}s`);
  });
  document.querySelectorAll('.leafline, footer').forEach(el=>{
    el.classList.add('reveal');
  });
  document.querySelectorAll('.section-head').forEach((el,i)=>{
    if(!el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-scale')){
      el.classList.add(i % 2 ? 'reveal-right' : 'reveal-left');
    }
  });
}

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }else if(!window.matchMedia('(max-width: 700px)').matches){
      entry.target.classList.remove('in-view');
    }
  });
}, {threshold:0.18, rootMargin:'0px 0px -8% 0px'});

function observeReveals(){
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}
// initial pass for static content
prepareRevealAnimations();
observeReveals();
// re-scan after every dynamic render (grid/testimonials rebuilt on filter/lang change)
const origRenderGrid = renderGrid;
renderGrid = function(){ origRenderGrid(); prepareRevealAnimations(); observeReveals(); };
const origRenderTesti = renderTesti;
renderTesti = function(){ origRenderTesti(); prepareRevealAnimations(); observeReveals(); };
renderGrid();
renderTesti();

/* ---------------- HEADER SHADOW ON SCROLL ---------------- */
const headerEl = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  headerEl.style.boxShadow = window.scrollY > 20 ? '0 6px 18px rgba(30,46,32,.10)' : 'none';
}, {passive:true});
