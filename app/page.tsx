import { ArrowRight } from 'lucide-react';

const services = [
  ['LANDING SYSTEM','Сайты и лендинги, которые объясняют ценность бизнеса и собирают заявки.'],
  ['REELS ENGINE','Монтаж короткого контента для роста внимания и продаж.'],
  ['CONTENT SYSTEM','Визуальная система бренда и регулярное производство контента.'],
  ['AUTOMATION','AI инструменты и автоматизация процессов бизнеса.'],
  ['EVENT EXPERIENCE','Создание атмосферы, событий и впечатлений.']
];

export default function Home(){
 return <main className="min-h-screen bg-[#f7f4ee] text-[#171717]">
  <section className="mx-auto max-w-6xl px-6 py-24">
   <p className="tracking-[0.4em] text-sm">KAVA STUDIA</p>
   <h1 className="mt-8 max-w-4xl text-6xl font-medium leading-[0.95] md:text-8xl">Создаём упаковку бизнеса, которая помогает продавать.</h1>
   <p className="mt-8 max-w-2xl text-xl text-neutral-600">Лендинги, контент, дизайн и цифровые системы для компаний, которые хотят выглядеть сильнее конкурентов.</p>
   <button className="mt-10 flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white">Обсудить проект <ArrowRight size={18}/></button>
  </section>
  <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
   {services.map(([title,text])=><article key={title} className="rounded-3xl border border-black/10 bg-white/40 p-8 backdrop-blur"><h2 className="text-2xl">{title}</h2><p className="mt-4 text-neutral-600">{text}</p></article>)}
  </section>
  <section className="mx-auto max-w-6xl px-6 pb-24"><div className="rounded-3xl bg-black p-10 text-white"><h2 className="text-4xl">Одна студия. Маркетинг, дизайн, контент и технологии.</h2><p className="mt-5 text-neutral-300">KAVA собирает проекты под ключ вместо пяти разных подрядчиков.</p></div></section>
 </main>
}
