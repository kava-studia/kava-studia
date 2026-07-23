import './globals.css';

export const metadata = {
  title: 'KAVA STUDIA  Лендинги, контент и цифровые продукты',
  description: 'KAVA STUDIA создаёт лендинги, контент паки, Reels паки, дизайн и автоматизацию для бизнеса.',
  metadataBase: new URL('https://kava-studia-kavas-projects-db7d0d92.vercel.app'),
  openGraph: {
    title: 'KAVA STUDIA',
    description: 'Создаём упаковку бизнеса, которая помогает продавать.',
    type: 'website',
    locale: 'ru_RU'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
