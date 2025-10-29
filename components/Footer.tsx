'use client';

import Link from 'next/link';
import TransitionLink from './TransitionLink';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Footer() {
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
    <div className="footer">
      <div className="subscription">
        <div className="subsription_title_wrap">
          <div className="subscription--title">News</div>
        </div>
        <div className="subscription_form_wrap">
          <div className="form--title">Get updates once a month</div>
          <div className="form w-form">
            <form className="form-wrap" onSubmit={(e) => e.preventDefault()}>
              <div className="form-fields-wrap">
                <input 
                  className="form--field w-input" 
                  maxLength={256} 
                  name="name" 
                  placeholder="Name" 
                  type="text" 
                  required 
                />
                <input 
                  className="form--field w-input" 
                  maxLength={256} 
                  name="Email" 
                  placeholder="Email" 
                  type="email" 
                  required 
                />
              </div>
              <input 
                type="submit" 
                className="form-submit-btn w-button" 
                value="Submit" 
              />
            </form>
            <div className="success-message w-form-done">
              <div className="thank-you-form-text">Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div className="form--privacy--text">
            No spam. Only drops. By clicking the button of &quot;submit&quot;, you agree to our data policy.
          </div>
        </div>
      </div>

      <div className="ig_images_pc">
        {[1, 2, 3, 4, 5, 6].map((num, i) => (
          <div key={i} className="ig_image_wrap">
            <Image 
              src={`/images/update/new-ig--image-${num}.webp`}
              alt={`Instagram ${num}`} 
              className="ig--image"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>

      <div className="ig_images_mobile">
        <div className="page-padding">
          <div className="container-large">
            <div className="swiper">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5, 6].map((num, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="swiper-box">
                      <div className="ig_image_wrap">
                        <Image 
                          src={`/images/update/new-ig--image-${num}.webp`}
                          alt={`Instagram ${num}`} 
                          className="ig--image"
                          width={228}
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_menu_pc">
        <div className="footer_menu_wrapper">
          <div className="footer--section--1">
            <TransitionLink href="/" className="footer_logo_link w-inline-block">
              <Image 
                src="/images/logo-svg.svg" 
                alt="Logo" 
                className="logo--img"
                width={76}
                height={45}
              />
            </TransitionLink>
          </div>
          <div id="w-node-_211ac9be-1b74-9e8b-2baa-ee74d03d5f5f-d38e79dd" className="footer--section--2">
            <TransitionLink href="/catalog" className="footer_link">Shop</TransitionLink>
            <TransitionLink href="/about" className="footer_link">About</TransitionLink>
            <Link href="#" className="footer_link">Service</Link>
          </div>
          <div id="w-node-e964d4c4-c7a2-2181-acba-2df32835003c-d38e79dd" className="footer--section--3">
            <div className="footer_contacts_wrap">
              <div className="footer--contacts--text">E-mail</div>
              <Link href="#" className="footer--contacts--link">hello@ebanat.com</Link>
            </div>
            <div className="footer_contacts_wrap">
              <div className="footer--contacts--text">Instagram</div>
              <Link href="#" className="footer--contacts--link">ebanat.shop</Link>
            </div>
          </div>
        </div>
        <div className="footer_down_wrap">
          <div className="footer--section--1">
            <div className="copyright--text">All rights reserved © 2025</div>
          </div>
          <div id="w-node-_0b914e5f-094d-f32a-c00b-b5085d92cc44-d38e79dd" className="footer--down--links">
            <div className="company--name">EBANAT FZCO</div>
            <Link href="#" className="policy--link">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer_menu_mobile">
        <div className="footer-links-wrapper">
          <div id="w-node-_44b50ee1-3472-1ab7-c9da-af724689b330-d38e79dd" className="footer-links-wrap">
            <TransitionLink href="/catalog" className="footer_link">Shop</TransitionLink>
            <TransitionLink href="/about" className="footer_link">About</TransitionLink>
            <Link href="#" className="footer_link">Services</Link>
            <Link href="#" className="footer_link">Contact us</Link>
          </div>
          <div className="footer-contacts-wrapper">
            <div className="footer_contacts_wrap">
              <div className="footer--contacts--text">E-mail</div>
              <Link href="#" className="footer--contacts--link">hello@ebanat.com</Link>
            </div>
            <div className="footer_contacts_wrap">
              <div className="footer--contacts--text">Instagram</div>
              <Link href="#" className="footer--contacts--link">ebanat.shop</Link>
            </div>
          </div>
        </div>
        <div className="footer-down-wrapper">
          <div className="footer--mobile--logo-wrap">
            <TransitionLink href="/" className="footer_logo_link w-inline-block">
              <Image 
                src="/images/logo-svg.svg" 
                alt="Logo" 
                className="logo--img"
                width={76}
                height={45}
              />
            </TransitionLink>
            <div className="copyright--text">All rights reserved © 2025</div>
          </div>
          <div className="footer--policy-wrapper">
            <div className="company--name">EBANAT FZCO</div>
            <Link href="#" className="policy--link">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

