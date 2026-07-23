const products = [
  {
    number: '01',
    title: 'LANDING SYSTEM',
    text: 'Лендинги и сайты, которые быстро объясняют ценность бизнеса и превращают внимание в заявки.',
    meta: 'Структура  Дизайн  Адаптив  Заявки'
  },
  {
    number: '02',
    title: 'REELS ENGINE',
    text: 'Пакеты коротких видео из ваших материалов  от сценарной логики до готовой публикации.',
    meta: 'Монтаж  Субтитры  Обложки  Пачки'
  },
  {
    number: '03',
    title: 'CONTENT SYSTEM',
    text: 'Визуальная система и контент, благодаря которым бренд выглядит собранно каждый день.',
    meta: 'Стратегия  Дизайн  Рубрики  Публикации'
  },
  {
    number: '04',
    title: 'AUTOMATION',
    text: 'AI инструменты, боты и внутренние системы, которые сокращают ручную работу.',
    meta: 'AI  Боты  CRM  Процессы'
  },
  {
    number: '05',
    title: 'EVENT EXPERIENCE',
    text: 'Концепция, атмосфера, музыка и продакшн мероприятий, которые люди запоминают.',
    meta: 'Идея  Сцена  Музыка  Продакшн'
  }
];

const projects = [
  ['СтройЭкспертПро', 'Бренд, digital система и визуальная коммуникация'],
  ['NADO', 'Продуктовая логика и интерфейс сервиса задач'],
  ['KAVA AI', 'Контент фабрика и автоматизированный монтаж'],
  ['Дикобраз', 'Арт направление, музыка и события'],
  ['Детство', 'Развивающая цифровая платформа для детей']
];

const packages = [
  {
    name: 'START',
    price: 'от 30 000 ₽',
    text: 'Для запуска одного понятного продукта.',
    items: ['Лендинг или упаковка', 'Базовая визуальная система', 'Подготовка к запуску']
  },
  {
    name: 'GROWTH',
    price: 'от 70 000 ₽',
    text: 'Для бизнеса, которому нужна связка сайта и контента.',
    items: ['Лендинг', 'Контент пакет', 'Дизайн коммуникаций']
  },
  {
    name: 'SYSTEM',
    price: 'от 150 000 ₽',
    text: 'Для создания полноценной цифровой системы.',
    items: ['Сайт и продуктовая логика', 'Контент и автоматизация', 'Сопровождение запуска']
  }
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="KAVA STUDIA">
          KAVA STUDIA
        </a>
        <nav className="navLinks" aria-label="Основная навигация">
          <a href="#products">Продукты</a>
          <a href="#cases">Проекты</a>
          <a href="#prices">Пакеты</a>
        </nav>
        <a className="navCta" href="#contact">Обсудить проект</a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> CREATOR POWERED DIGITAL STUDIO</p>
          <h1>Создаём упаковку бизнеса, которая помогает продавать.</h1>
          <p className="lead">Лендинги, Reels, контент, дизайн и автоматизация для компаний, которые хотят выглядеть сильнее конкурентов.</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#contact">Обсудить проект <b>↗</b></a>
            <a className="button buttonLight" href="#cases">Посмотреть работы</a>
          </div>
          <div className="heroNote">
            <span>Маркетинг</span><span>Дизайн</span><span>Контент</span><span>Технологии</span>
          </div>
        </div>

        <div className="studioVisual" aria-label="Цифровая студия KAVA">
          <div className="glow glowOne" />
          <div className="glow glowTwo" />
          <div className="browserCard">
            <div className="browserTop"><i /><i /><i /><small>kava-studia</small></div>
            <div className="browserBody">
              <span className="miniLabel">LANDING SYSTEM</span>
              <strong>От идеи<br />до заявки.</strong>
              <div className="miniButton">Запустить проект</div>
            </div>
          </div>
          <div className="reelCard">
            <div className="reelFrame"><span>REELS</span><b>30</b><small>роликов в пакете</small></div>
            <div className="timeline"><i /><i /><i /><i /></div>
          </div>
          <div className="metricCard"><small>СИСТЕМА</small><strong>1 вместо 5</strong><span>подрядчиков</span></div>
          <div className="stamp">KAVA<br />STUDIA</div>
        </div>
      </section>

      <section className="statement shell">
        <p>Не просто дизайн.</p>
        <h2>Собираем вокруг бизнеса одну понятную систему.</h2>
        <div className="statementGrid">
          <span>Смысл</span><span>Визуал</span><span>Контент</span><span>Запуск</span>
        </div>
      </section>

      <section className="section shell" id="products">
        <div className="sectionHead">
          <p className="eyebrow"><span /> ЧТО МЫ СОЗДАЁМ</p>
          <h2>Продукты, а не бесконечный список услуг.</h2>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.title}>
              <div className="productNumber">{product.number}</div>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <small>{product.meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="founder shell">
        <div className="founderCard">
          <div>
            <p className="eyebrow light"><span /> ПОЧЕМУ KAVA</p>
            <h2>Один человек. Несколько ролей. Одна система.</h2>
          </div>
          <div className="founderText">
            <p>KAVA соединяет маркетинг, дизайн, контент, AI, сцену и продакшн. Поэтому проект не рассыпается между пятью подрядчиками.</p>
            <div className="roleCloud">
              <span>Маркетолог</span><span>Дизайнер</span><span>Creator</span><span>MC</span><span>Продюсер</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="cases">
        <div className="sectionHead caseHead">
          <div>
            <p className="eyebrow"><span /> ПРОЕКТЫ</p>
            <h2>Разные задачи. Одна точка сборки.</h2>
          </div>
          <p>Показываем не красивые картинки ради красивых картинок, а то, как идея превращается в работающий продукт.</p>
        </div>
        <div className="caseList">
          {projects.map(([name, text], index) => (
            <article className="caseRow" key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="process shell">
        <div className="processIntro">
          <p className="eyebrow"><span /> КАК РАБОТАЕМ</p>
          <h2>Без тумана и двадцати созвонов.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Разбираем</h3><p>Понимаем задачу, аудиторию и результат, который должен получить бизнес.</p></article>
          <article><span>02</span><h3>Собираем</h3><p>Создаём структуру, визуал, контент и нужные цифровые инструменты.</p></article>
          <article><span>03</span><h3>Запускаем</h3><p>Проверяем, публикуем и передаём готовый продукт, которым можно пользоваться.</p></article>
        </div>
      </section>

      <section className="section shell" id="prices">
        <div className="sectionHead">
          <p className="eyebrow"><span /> ПАКЕТЫ</p>
          <h2>Понятный масштаб на старте.</h2>
        </div>
        <div className="priceGrid">
          {packages.map((item, index) => (
            <article className={`priceCard ${index === 1 ? 'featured' : ''}`} key={item.name}>
              <div className="priceTop"><span>{item.name}</span>{index === 1 && <small>ПОПУЛЯРНЫЙ</small>}</div>
              <h3>{item.price}</h3>
              <p>{item.text}</p>
              <ul>{item.items.map((line) => <li key={line}>✓ {line}</li>)}</ul>
              <a href="#contact">Обсудить пакет <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contactCard">
          <div>
            <p className="eyebrow light"><span /> НОВЫЙ ПРОЕКТ</p>
            <h2>Есть идея?<br />Соберём вокруг неё работающий продукт.</h2>
          </div>
          <div className="contactSide">
            <p>Коротко опишите задачу. На первом шаге поймём формат, сроки и честный диапазон бюджета.</p>
            <a className="button buttonGold" href="mailto:yukava25@gmail.com?subject=Новый проект для KAVA STUDIA">Написать о проекте <b>↗</b></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">KAVA STUDIA</a>
        <p>Лендинги  Контент паки  Reels паки  Автоматизация</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
