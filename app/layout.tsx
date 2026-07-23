import './globals.css';

export const metadata = { title: 'KAVA STUDIA | Creator Powered Digital Studio', description: 'Лендинги, контент, Reels, дизайн и автоматизация для бизнеса.' };

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body>{children}</body></html>; }