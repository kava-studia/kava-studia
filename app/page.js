const areas = [
  {
    index: '01',
    title: 'PRODUCTS',
    text: 'Сайты, MVP, web-приложения и Telegram-продукты — от первой логики до рабочего запуска.',
    meta: 'WEB · MVP · FULLSTACK · TELEGRAM'
  },
  {
    index: '02',
    title: 'DESIGN',
    text: 'Айдентика, social design, афиши, презентации, интерфейсы и визуальные системы брендов.',
    meta: 'BRANDING · SMM · UI/UX · PRINT · DECKS'
  },
  {
    index: '03',
    title: 'SYSTEMS',
    text: 'AI, автоматизация, парсеры, CRM, автопостинг и внутренние инструменты для бизнеса.',
    meta: 'AI · AUTOMATION · CRM · API'
  },
  {
    index: '04',
    title: 'MOTION',
    text: 'Remotion, программный монтаж, генеративное видео и production-пайплайны для контента.',
    meta: 'REMOTION · AI VIDEO · CREATIVE DEV'
  }
];

const selectedWork = [
  {
    number: '01',
    name: 'NADO',
    kind: 'FULLSTACK MVP / MARKETPLACE',
    text: 'Городская платформа быстрых задач: роли, авторизация, backend, база, Telegram-контур и закрытый пилот.',
    tags: ['React', 'Supabase', 'Express', 'NestJS', 'Telegram'],
    href: 'https://nado-seven.vercel.app'
  },
  {
    number: '02',
    name: 'NADO ПРАЗДНИК',
    kind: 'SAAS / EVENTTECH',
    text: 'Платформа управления мероприятием: клиенты, подрядчики, бронирования, договоры и кабинеты разных ролей.',
    tags: ['React 19', 'Supabase Auth', 'RLS', 'Vite'],
    href: 'https://nado-prazdnik.vercel.app'
  },
  {
    number: '03',
    name: 'МЕСТО СИЛЫ',
    kind: 'BOOKING / BUSINESS WEB',
    text: 'Сайт глэмпинга с выбором проживания, дат, гостей и заявкой на бронирование.',
    tags: ['Booking UX', 'Responsive', 'Business Web'],
    href: 'https://mestosily-xi.vercel.app'
  },
  {
    number: '04',
    name: 'KAVA MC',
    kind: 'PERSONAL BRAND / WEB',
    text: 'Премиальный digital presence ведущего: услуги, видео, заявки, SEO и юридический контур.',
    tags: ['Next.js', 'React', 'Tailwind', 'SEO'],
    href: 'https://kavamc.vercel.app'
  },
  {
    number: '05',
    name: 'REWORT',
    kind: 'MINI APP / BACKEND',
    text: 'Связка web-приложения и backend-инфраструктуры с базой данных и API.',
    tags: ['React', 'Vite', 'Express', 'Supabase']
  },
  {
    number: '06',
    name: 'СТРОЙЭКСПЕРТ PRO OS',
    kind: 'INTERNAL SYSTEM / AUTOMATION',
    text: 'Рабочая система для инженерной компании: лиды, документы, цифровой штаб, парсинг и операционные модули.',
    tags: ['CRM', 'Parsers', 'Desktop', 'Automation']
  },
  {
    number: '07',
    name: 'INDENTA',
    kind: 'PROGRAMMATIC PRODUCTION',
    text: 'Система программного производства брендированного контента и визуальных материалов.',
    tags: ['Remotion', 'React', 'Production Pipeline']
  },
  {
    number: '08',
    name: 'KAVA CONTENT FACTORY',
    kind: 'CREATIVE DEVELOPMENT',
    text: 'Набор собственных движков для автоматизированного монтажа, motion, генерации и подготовки контента.',
    tags: ['Remotion', 'GSAP', 'Three.js', 'Python']
  }
];

const designCollections = [
  ['DIKOBRAZ', 'Афиши · social design · web · motion · content system'],
  ['AUTOCOST', 'Automotive visual system · social · presentations · content'],
  ['BAMBINIUM', 'Kids brand · прайсы · расписания · сторис · объявления'],
  ['PANORAMA', 'Hospitality · афиши · караоке · меню · digital'],
  ['NADO', 'Brand kit · social · investor materials · product visual'],
  ['KAVA / PERSONAL', 'Personal identity · experiments · AI art · music visuals'],
  ['БУДЕМ ЗНАКОМЫ', 'Print · афиши · приглашения · event communication'],
  ['ЗЕМЛИ.PRO', 'Презентации · визуализации · business communication']
];

const systemWork = [
  ['KAVA PUBLISHING AUTOMATION', 'Автопостинг и подготовка контента к публикации'],
  ['DIKOBRAZ CONTENT OS', 'Связка дизайна, контента, motion и публикации'],
  ['KAVA CONTENT FACTORY', 'Программная фабрика короткого видео'],
  ['NADO / TELEGRAM', 'Telegram-контур и продуктовые сценарии'],
  ['YT INTEL', 'Инструменты для работы с YouTube-контентом'],
  ['STROYEXPERT PRO', 'Парсинг, лиды и внутренние бизнес-процессы']
];

const moreWeb = [
  ['Мурашки.flo', 'https://murashki.vercel.app'],
  ['Retrit', 'https://retrit-two.vercel.app'],
  ['Наше Праздник', 'https://nashe-eight.vercel.app'],
  ['Valeria Uryadova', 'https://valeria-uryadova.vercel.app'],
  ['Detstvo', 'https://detstvo-liard.vercel.app'],
  ['Gastrobar Audit', 'https://gastrobar-audit.vercel.app'],
  ['AUTOCOST Radio', 'https://autocost-radio.vercel.app']
];

const services = [
  ['FAST LANDING', 'от 30 000 ₽', 'Структура, дизайн, адаптив и запуск.'],
  ['BUSINESS WEB', 'от 45 000 ₽', 'Сайт бизнеса с нужной логикой, формами и интеграциями.'],
  ['AUTOMATION / BOT', 'от 25 000 ₽', 'Telegram, API, автопостинг и автоматизация процессов.'],
  ['MVP SPRINT', 'от 80 000 ₽', 'Рабочая первая версия цифрового продукта под проверку идеи.']
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top">KAVA STUDIA</a>
        <nav className="navLinks" aria-label="Основная навигация">
          <a href="#work">Work</a>
          <a href="#design">Design</a>
          <a href="#systems">Systems</a>
          <a href="#services">Services</a>
        </nav>
        <a className="navCta" href="#contact">Есть задача? <ExternalArrow /></a>
      </header>

      <section className="hero shell">
        <div className="heroTopline">
          <span>INDEPENDENT DIGITAL STUDIO</span>
          <span>SERGIEV POSAD / MOSCOW / REMOTE</span>
        </div>
        <div className="heroGrid">
          <div>
            <p className="eyebrow">KAVA / DIGITAL PRODUCT DEVELOPER</p>
            <h1>От визуальной идеи до работающей системы.</h1>
          </div>
          <div className="heroSide">
            <p>Проектирую и создаю сайты, MVP, AI-системы, автоматизации, дизайн и программный контент. Один человек — одна точка сборки.</p>
            <div className="heroActions">
              <a className="button buttonDark" href="#work">Смотреть работы</a>
              <a className="button buttonGhost" href="#contact">Обсудить проект</a>
            </div>
          </div>
        </div>
        <div className="heroTicker" aria-label="Направления работы">
          <span>WEB</span><i>●</i><span>MVP</span><i>●</i><span>AI</span><i>●</i><span>AUTOMATION</span><i>●</i><span>DESIGN</span><i>●</i><span>MOTION</span><i>●</i><span>CONTENT</span>
        </div>
      </section>

      <section className="areaSection shell" aria-labelledby="areas-title">
        <div className="sectionLabel">
          <span>01</span><p id="areas-title">WHAT I BUILD</p>
        </div>
        <div className="areaGrid">
          {areas.map((area) => (
            <article className="areaCard" key={area.title}>
              <span className="areaIndex">{area.index}</span>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
              <small>{area.meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="workSection" id="work">
        <div className="shell">
          <div className="workHead">
            <div className="sectionLabel lightLabel"><span>02</span><p>SELECTED WORK</p></div>
            <h2>Проекты, в которых видно не один навык, а весь путь до результата.</h2>
          </div>
          <div className="workGrid">
            {selectedWork.map((project, index) => {
              const CardTag = project.href ? 'a' : 'article';
              const props = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {};
              return (
                <CardTag className={`workCard workCard${(index % 4) + 1}`} key={project.name} {...props}>
                  <div className="workCardTop">
                    <span>{project.number}</span>
                    <small>{project.kind}</small>
                    {project.href && <ExternalArrow />}
                  </div>
                  <div className="workVisual" aria-hidden="true">
                    <span>{project.name.slice(0, 2)}</span>
                  </div>
                  <div className="workCopy">
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                    <div className="tagRow">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>
      </section>

      <section className="designSection shell" id="design">
        <div className="splitHead">
          <div className="sectionLabel"><span>03</span><p>DESIGN ARCHIVE</p></div>
          <div>
            <h2>Не один стиль. Разные задачи, бренды и аудитории.</h2>
            <p>В этот архив войдут реальные афиши, соцсети, презентации, айдентика, web/UI и печатные материалы. Сейчас подключаем оригинальные работы без пересборки качества.</p>
          </div>
        </div>
        <div className="designList">
          {designCollections.map(([name, text], index) => (
            <article className="designRow" key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <p>{text}</p>
              <b>ARCHIVE</b>
            </article>
          ))}
        </div>
      </section>

      <section className="systemsSection" id="systems">
        <div className="shell systemsGrid">
          <div className="systemsIntro">
            <div className="sectionLabel lightLabel"><span>04</span><p>SYSTEMS / AUTOMATION</p></div>
            <h2>Не только интерфейс. То, что работает за ним.</h2>
            <p>Автоматизация, контент-пайплайны, backend, боты, публикация и внутренние инструменты.</p>
          </div>
          <div className="systemList">
            {systemWork.map(([name, text]) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="moreSection shell">
        <div className="splitHead compactHead">
          <div className="sectionLabel"><span>05</span><p>MORE WEB</p></div>
          <h2>Ещё запущенные проекты.</h2>
        </div>
        <div className="moreGrid">
          {moreWeb.map(([name, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={name}>
              <span>{name}</span><ExternalArrow />
            </a>
          ))}
        </div>
      </section>

      <section className="serviceSection shell" id="services">
        <div className="splitHead compactHead">
          <div className="sectionLabel"><span>06</span><p>WORK WITH ME</p></div>
          <div>
            <h2>Понятные форматы для старта.</h2>
            <p>Финальная стоимость зависит от задачи. Диапазон нужен, чтобы сразу понимать масштаб.</p>
          </div>
        </div>
        <div className="serviceGrid">
          {services.map(([name, price, text]) => (
            <article key={name}>
              <small>{name}</small>
              <h3>{price}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection shell" id="contact">
        <div className="contactCard">
          <div>
            <p className="eyebrow lightText">NEW PROJECT / COLLABORATION</p>
            <h2>Есть задача? Покажи её мне.</h2>
          </div>
          <div className="contactSide">
            <p>Скажу, как бы я собрал рабочую версию, что действительно нужно на первом этапе и какой порядок бюджета получается.</p>
            <a className="button buttonLightOnDark" href="mailto:yukava25@gmail.com?subject=Новый проект для KAVA STUDIA">Написать о проекте <ExternalArrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">KAVA STUDIA</a>
        <p>Digital products · Design · AI · Automation · Motion</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
