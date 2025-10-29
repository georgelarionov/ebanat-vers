'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BurgerMenu from './BurgerMenu';
import TransitionLink from './TransitionLink';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <div className="menu">
        <TransitionLink href="/" className="logo_link w-inline-block">
          <Image 
            src="/images/logo-svg.svg" 
            alt="Logo" 
            className="logo--img"
            width={76}
            height={45}
            priority
          />
        </TransitionLink>
        <div className="menu-links">
          <TransitionLink href="/catalog" className="menu__link">Shop</TransitionLink>
          <TransitionLink href="/about" className="menu__link">About</TransitionLink>
          <Link href="#" className="menu__link">Services</Link>
        </div>
        <div className="menu-buttons">
          <Link href="#" className="menu--button--link w-inline-block">
            <Image 
              src="/images/insta-icon.svg" 
              alt="Instagram" 
              className="menu--button--icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" className="medusa-menu--button--cart w-inline-block">
            <Image 
              src="/images/cart-icon.svg" 
              alt="Cart" 
              className="menu--button--icon"
              width={24}
              height={24}
            />
          </Link>
          <button 
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            className="menu--button--burger w-inline-block"
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isBurgerOpen ? 'close' : 'burger'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <Image 
                  src={isBurgerOpen ? "/images/close-icon.svg" : "/images/burger-icon.svg"}
                  alt={isBurgerOpen ? "Close" : "Menu"}
                  width={40}
                  height={40}
                />
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      
      <BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
    </>
  );
}

