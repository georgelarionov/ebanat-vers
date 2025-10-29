import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'e-at-clean',
  description: 'Minimalistic artefacts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
