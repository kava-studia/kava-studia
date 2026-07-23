import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  ['01', 'LANDING SYSTEM', 'Лендинги и сайты, которые объясняют ценность бизнеса и превращают посетителей в клиентов.'],
  ['02', 'REELS ENGINE', 'Монтаж и производство короткого контента для роста внимания и доверия.'],
  ['03', 'CONTENT SYSTEM', 'Визуальная система бренда, сценарии и контент под регулярный выпуск.'],
  ['04', 'AUTOMATION', 'AI инструменты и цифровые процессы для ускорения бизнеса.'],
  ['05', 'EVENT EXPERIENCE', 'Концепция, атмосфера и продакшн мероприятий под ключ.']
];

const cases = ['СтройЭкспертПро', 'Дикобраз', 'NADO', 'KAVA AI', 'Детский проект'];

const packages = [
  ['START', 'Упаковка проекта', 'от 30 000 ₽'],
  ['GROWTH', 'Сайт + контент + дизайн', 'от 70 000 ₽'],
  ['SYSTEM', 'Полная цифровая система', 'от 150 000 ₽']
];

export default function Home() {
 return <main className="min-h-screen bg-[#f7f4ee] text-[#171717]">
  <header className="mx-auto flex max-w-6xl justify-between px-6 py-8">
   <span className="tracking-[0.35em] text-sm">KAVA STUDIA</span>
   <span className="text-sm text-neutral-500">Creator powered digital studio</span>
  </header>

  <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
   <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-500"><Sparkles size={16}/> Digital packaging</p>
   <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.95] md:text-8xl">Создаём цифровую упаковку бизнеса, которая помогает продавать.</h1>
   <p className="mt-8 max-w-3xl text-xl text-neutral-600 md:text-2xl">Лендинги, контент, дизайн, автоматизация и продакшн для компаний, которые хотят выглядеть сильнее конкурентов.</p>
   <button className="mt-10 flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">Обсудить проект <ArrowRight size={18}/></button>
  </section>

  <section className="mx-auto max-w-6xl px-6 pb-20">
   <div className="rounded-[40px] bg-white/50 p-10 border border-black/10">
    <h2 className="text-4xl md:text-6xl">Не просто дизайн. Полная система вокруг бизнеса.</h2>
    <p className="mt-6 text-xl text-neutral-600">Маркетинг, визуал, контент и технологии соединяются в одном направлении вместо пяти разных подрядчиков.</p>
   </div>
  </section>

  <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-28 md:grid-cols-3">
   {services.map(([number,title,text]) => <article key={title} className="rounded-[32px] border border-black/10 bg-white/50 p-8 backdrop-blur"><span className="text-sm text-neutral-400">{number}</span><h2 className="mt-8 text-2xl">{title}</h2><p className="mt-4 text-neutral-600">{text}</p></article>)}
  </section>

  <section className="mx-auto max-w-6xl px-6 pb-28">
   <div className="rounded-[40px] bg-black p-10 text-white md:p-16">
    <h2 className="text-4xl md:text-6xl">Один человек. Несколько ролей. Одна система.</h2>
    <p className="mt-6 text-lg text-neutral-300">Маркетинг, дизайн, контент, технологии, сцена и продакшн соединяются в KAVA STUDIA.</p>
   </div>
  </section>

  <section className="mx-auto max-w-6xl px-6 pb-28">
   <h2 className="text-4xl">Проекты KAVA</h2>
   <div className="mt-8 grid gap-4 md:grid-cols-5">{cases.map(item=><div key={item} className="rounded-3xl border border-black/10 bg-white/40 p-8">{item}</div>)}</div>
  </section>

  <section className="mx-auto max-w-6xl px-6 pb-28">
   <h2 className="text-4xl">Пакеты</h2>
   <div className="mt-8 grid gap-5 md:grid-cols-3">{packages.map(([a,b,c])=><div key={a} className="rounded-3xl bg-black p-8 text-white"><h3 className="text-2xl">{a}</h3><p className="mt-4 text-neutral-300">{b}</p><p className="mt-6 text-xl">{c}</p></div>)}</div>
  </section>

  <footer className="mx-auto max-w-6xl px-6 pb-16"><div className="rounded-[40px] border border-black/10 p-10"><h2 className="text-4xl md:text-5xl">Есть идея? Создадим вокруг неё работающий продукт.</h2></div></footer>
 </main>
}
