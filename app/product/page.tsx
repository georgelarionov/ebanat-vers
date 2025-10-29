'use client';

import Image from 'next/image';
import Link from 'next/link';
import TransitionLink from '@/components/TransitionLink';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Product() {
  useEffect(() => {
    // Load Swiper only on client side
    if (typeof window !== 'undefined') {
      // @ts-expect-error - Swiper v8 types issue
      import('swiper').then((module) => {
        const Swiper = module.default;
        new Swiper('.swiper', {
          spaceBetween: 10,
          grabCursor: true,
          slidesPerView: 'auto',
          autoplay: false,
          breakpoints: {
            768: {
              spaceBetween: 32
            }
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div className="product-page-wrap">
        <div className="breadcrumbs-product-page-wrap">
          <div className="breadcrumbs">
            <TransitionLink href="/" className="breadcrumb-text-black">Main</TransitionLink>
            <div className="breadcrumb-separator-black">/</div>
            <TransitionLink href="/catalog" className="breadcrumb-text-black">Catalog</TransitionLink>
            <div className="breadcrumb-separator-black">/</div>
            <div className="medusa-breadcrumb-text-black-active">Product name</div>
          </div>
        </div>

        <div className="product-images-pc">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="prodcut-image-wrap">
              <Image 
                src="/images/11.png" 
                alt={`Product ${i + 1}`} 
                className="medusa-product-image"
                width={692}
                height={692}
              />
            </div>
          ))}
        </div>

        <div className="product-mobile-images">
          <div className="container-large">
            <div className="swiper">
              <div className="swiper-wrapper">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="swiper-box">
                      <div className="product-image-wrap-mobile">
                        <Image 
                          src="/images/11.png" 
                          alt={`Product ${i + 1}`} 
                          className="medusa-product-image"
                          width={692}
                          height={692}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="product-title-price-wrap">
          <div className="medusa-product-title">Ebanat T-shirt</div>
          <div className="medusa-price">$120</div>
        </div>

        <div className="product-buttons-wrap">
          <div className="selector-wrap">
            <div className="link-selector-title">Color</div>
            <div className="selector-buttons-wrap">
              <Link href="#" className="link-option-button">Option 1</Link>
              <Link href="#" className="link-option-button">Option 2</Link>
            </div>
          </div>
          <div className="selector-wrap">
            <div className="medusa-selector-title">Size</div>
            <div className="selector-buttons-wrap">
              <Link href="#" className="medusa-option-button">Option 1</Link>
              <Link href="#" className="medusa-option-button">Option 2</Link>
              <Link href="#" className="medusa-option-button">Option 3</Link>
              <Link href="#" className="medusa-option-button">Option 4</Link>
            </div>
          </div>
          <Link 
            href="#" 
            className="medusa-add-to-cart-button w-inline-block" 
            id="w-node-_0e640c37-0871-55fc-914f-d79b17aed311-39c69717"
          >
            <div className="add-to-cart-button-text">Add to cart</div>
          </Link>
        </div>

        <div className="product-description-wrap">
          <div 
            id="w-node-c5f34035-f4e0-2c41-8895-098a7275c6ab-39c69717" 
            className="product-pc-spacer"
          ></div>
          <div 
            id="w-node-b6238005-65f5-fe79-8389-6451ab400a5c-39c69717" 
            className="product-description-wrapper-text"
          >
            <div className="description-title">Description</div>
            <div className="medusa-description-text">
              The Ebanat T-shirt is minimalism sharpened to precision. Clean lines, premium cotton, and a considered fit create a piece that speaks without words. It becomes part of your silence, your confidence — a way of being seen without asking for attention. This is not just a wardrobe basic — it&apos;s a code, understood only by those who value depth in detail. Each Ebanat T-shirt is architecture in form, balancing restraint and freedom, turning the everyday into a symbol.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

