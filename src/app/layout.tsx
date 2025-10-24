import type { Metadata, Viewport } from 'next';
import { Exo_2 } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/app.scss';

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

const font = Exo_2({
  subsets: ['latin'],
  variable: '--font-primary',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${font.variable} font-sans`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${font.variable} ${font.className}`}>{children}</body>
    </html>
  );
}
