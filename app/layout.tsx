import type { Metadata } from 'next';
import { EB_Garamond, DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gamified Giving',
  description: 'Six weeks. Six causes. One Torah scroll at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="bg-violet-950 py-8 text-center text-xs text-violet-500">
          From Pesach to Shavuot, one good cause at a time.
        </footer>
      </body>
    </html>
  );
}
