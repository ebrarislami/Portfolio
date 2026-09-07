import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Geist } from 'next/font/google';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Ebrar Islami',
  description: 'Ebrar Islami Portfolio',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
};

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif-family',
});

const sans = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans-family',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
