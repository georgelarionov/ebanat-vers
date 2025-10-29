'use client';

import Image from 'next/image';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % totalSlides;
      });
    }, 4000); // Смена слайда каждые 4 секунды

    return () => clearInterval(interval);
  }, []);

  const text = "CAST IN STONE";

  return (
    <>
      <div className="hero">
        <div className="hero_wrap">
          <motion.div 
            className="hero--text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {text}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image 
            src="/images/update/hero--bg--img--pc.webp" 
            alt="Hero" 
            className="hero--bg--img--pc"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image 
            src="/images/update/hero--bg--img--mobile.webp" 
            alt="Hero Mobile" 
            className="hero--bg--img--mobile"
            fill
            sizes="100vw"
          />
        </motion.div>
        <div className="hero-decorator">
          <div className="hero--decorator--text">i can afford</div>
        </div>
      </div>

      <div className="main_products">
        <div className="main_product_block">
          <TransitionLink href="/product" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <Image 
              src="/images/update/hero-block-img-1.webp" 
              alt="Product 1" 
              className="hero_block_img"
              fill
              sizes="50vw"
            />
          </TransitionLink>
          <div className="hero_block_text" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero_block_text_wrapper">
              <div className="hero--block--text-title">Product name</div>
              <div className="hero--block-text-subtitle">A form with an idea behind it</div>
            </div>
            <div className="main_products_btn_wrap">
              <Link href="#" className="medusa-add-to-cart-main-product-btn w-inline-block">
                <div className="main-product-btn-txt">add to cart</div>
              </Link>
              <TransitionLink href="/product" className="learn-more-btn w-inline-block">
                <div className="main-product-btn-txt">learn more</div>
              </TransitionLink>
            </div>
          </div>
        </div>
        <div className="main_product_block">
          <TransitionLink href="/product" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <Image 
              src="/images/hero-block-img-2.webp" 
              alt="Product 2" 
              className="hero_block_img"
              fill
              sizes="50vw"
            />
          </TransitionLink>
          <div className="hero_block_text" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero_block_text_wrapper">
              <div className="hero--block--text-title">Product name</div>
              <div className="hero--block-text-subtitle">A form with an idea behind it</div>
            </div>
            <div className="main_products_btn_wrap">
              <Link href="#" className="medusa-add-to-cart-main-product-btn w-inline-block">
                <div className="main-product-btn-txt">add to cart</div>
              </Link>
              <TransitionLink href="/product" className="learn-more-btn w-inline-block">
                <div className="main-product-btn-txt">learn more</div>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>

      <div className="main_about">
        <div className="main_about_text_wrap">
          <div className="main--about--text--sub">Salute</div>
          <div className="main--about--text--pc">
            Step into the world of Ebanat.<br />
            Not fashion. Not trends. A statement carved in fabric, where every piece stands against the ordinary.
          </div>
          <div className="main--about--text--mobile">
            Step into the world of Ebanat. Not fashion. Not trends. A statement carved in fabric, where every piece stands against the ordinary.
          </div>
        </div>
        <div className="main_about_text_wrapper_2">
          <div className="main_about_text_wrap_2">
            <div className="main--about--text--sub">Our mission</div>
            <div className="main--about--text--2--pc">
              is not to dress men, but to define them. Each piece is a code, a mark of presence, a refusal to dissolve into the regular.
            </div>
            <div className="main--about--text--2--mobile">
              is not to dress men, but to define them. Each piece is a code, a mark of presence, a refusal to dissolve into the regular.
            </div>
          </div>
        </div>
      </div>

      <div className="lookbook_main">
        <div className="lookbook_slider_wrap">
          <div className="slider-images-container">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <Image 
                key={i}
                src={`/images/update/slider-image-${num}.webp`}
                alt={`Lookbook ${num}`} 
                className={`slider--image ${currentSlide === i ? 'active' : ''} ${prevSlide === i ? 'prev' : ''}`}
                width={1440}
                height={960}
                priority={i === 0}
              />
            ))}
            <div className="lookbook-slider-wrap">
              <div className="slider-counter-wrapper">
                <div className="slider-counter-decorator">&lt;</div>
                <div className="slider-number-actual">{currentSlide + 1}</div>
                <div className="slider-counter-decorator">/</div>
                <div className="slider-number-full">{totalSlides}</div>
                <div className="slider-counter-decorator">&gt;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lookbok_description_wrap">
          <div className="lookbook_title_wrap">
            <div className="lookbook--subtitle">Ebanat Paris</div>
            <div className="lookbook--title">Lookbook 2025</div>
          </div>
          <div className="lookbook-small-slider-container">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <Image 
                key={i}
                src={`/images/update/mini-slider-image-${num}.webp`}
                alt={`Lookbook detail ${num}`} 
                className={`lookbook-static--image ${currentSlide === i ? 'active' : ''} ${prevSlide === i ? 'prev' : ''}`}
                width={300}
                height={400}
              />
            ))}
          </div>
          <div className="lookbook--text">
            In Paris, Ebanat T-shirts move through streets like quiet architecture, cutting through the noise without a word. Each piece carries the weight of precision and the lightness of not needing to explain itself.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
