'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstLoad = useRef(true);
  const prevPathname = useRef(pathname);

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.23 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4, delay: 0.3 }
    }
  };

  const logoVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      }
    },
    exit: { 
      y: 0, 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      }
    }
  };


  useEffect(() => {
    // Пропускаем transition при первой загрузке
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      prevPathname.current = pathname;
      return;
    }

    // Показываем transition только если pathname действительно изменился
    if (prevPathname.current !== pathname) {
      // Используем setTimeout для избежания синхронного setState
      const startTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 0);
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        prevPathname.current = pathname;
      }, 1100);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(timer);
      };
    }
  }, [pathname]);

  // Слушаем событие начала transition от TransitionLink
  useEffect(() => {
    const handleStartTransition = () => {
      setIsTransitioning(true);
    };

    window.addEventListener('start-page-transition', handleStartTransition);
    
    return () => {
      window.removeEventListener('start-page-transition', handleStartTransition);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              key="logo-animation"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Image 
                src="/images/update/transition-logo.svg" 
                alt="Logo" 
                width={150}
                height={89}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ opacity: isTransitioning ? 0 : 1 }}>
        {children}
      </div>
    </>
  );
}

