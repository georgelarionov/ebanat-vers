'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let locomotiveScroll: any = null;

    const initScroll = async () => {
      try {
        // Динамический импорт Lenis (на котором основан Locomotive v5)
        const Lenis = (await import('lenis')).default;
        
        // Инициализация Lenis
        locomotiveScroll = new Lenis({
          duration: 1.04,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.05,
          touchMultiplier: 3.15,
          infinite: false,
        });

        scrollRef.current = locomotiveScroll;

        // Анимационный цикл
        function raf(time: number) {
          locomotiveScroll.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        console.log('✅ Smooth scroll initialized');
      } catch (error) {
        console.error('❌ Smooth scroll error:', error);
      }
    };

    initScroll();

    // Очистка
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
        console.log('🗑️ Smooth scroll destroyed');
      }
    };
  }, []);

  // Прокрутка наверх при смене роута
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}

