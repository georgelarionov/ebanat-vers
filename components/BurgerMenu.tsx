'use client';

import Link from 'next/link';
import TransitionLink from './TransitionLink';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  // Закрываем меню при начале transition
  useEffect(() => {
    const handleTransitionStart = () => {
      onClose();
    };

    window.addEventListener('start-page-transition', handleTransitionStart);
    
    return () => {
      window.removeEventListener('start-page-transition', handleTransitionStart);
    };
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="burger-menu-wrapper"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{ display: 'flex' }}
        >
      <div className="burge-links-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <TransitionLink href="/catalog" className="menu-burger-link">Shop</TransitionLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <TransitionLink href="/about" className="menu-burger-link">About</TransitionLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Link href="#" className="menu-burger-link">Services</Link>
        </motion.div>
      </div>
      <div className="burger-contacts-wrapper">
        <motion.div 
          className="burger-contact-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="burger-contact-title">E-mail</div>
          <Link href="#" className="burger-contact-link">hello@ebanat.shop</Link>
        </motion.div>
        <motion.div 
          className="burger-contact-line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="burger-contact-title">Instagram</div>
          <Link href="#" className="burger-contact-link">ebanat.shop</Link>
        </motion.div>
      </div>
      <motion.div 
        className="burger-copyright-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="burger-copyright-text">All rights reserved © 2025</div>
      </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

