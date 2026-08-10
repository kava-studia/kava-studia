import './globals.css';

export const metadata = {
  title: 'KAVA STUDIA — Digital products, design & automation',
  description: 'KAVA STUDIA — сайты, MVP, AI-системы, автоматизация, дизайн и программный контент от идеи до рабочего продукта.',
  metadataBase: new URL('https://kava-studia.vercel.app'),
  openGraph: {
    title: 'KAVA STUDIA',
    description: 'От визуальной идеи до работающей системы.',
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
