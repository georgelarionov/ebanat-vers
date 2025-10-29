import Image from 'next/image';
import TransitionLink from '@/components/TransitionLink';
import Footer from '@/components/Footer';

export default function Catalog() {
  return (
    <>
      <div className="catalog-products-hero">
        <Image 
          src="/images/catalog-img-1.webp" 
          alt="Catalog" 
          className="catalog-pc-hero-img"
          fill
          priority
          sizes="100vw"
        />
        <Image 
          src="/images/catalog-img-mobile.webp" 
          alt="Catalog Mobile" 
          className="catalog-mobile-hero-img"
          fill
          sizes="100vw"
        />
        <div className="catalog-product-wrapper">
          <div className="breadcrumbs-wrap-mobile">
            <div className="breadcrumbs">
              <TransitionLink href="/" className="breadcrumb-text">Main</TransitionLink>
              <div className="breadcrumb-separator">/</div>
              <div className="breadcrumb-text-active">Catalog</div>
            </div>
            <div className="text-block">Catalog</div>
          </div>
          <div className="catalog-product-wrap-left">
            <div className="breadcrumbs-wrap-pc">
              <div className="breadcrumbs">
                <TransitionLink href="/" className="breadcrumb-text">Main</TransitionLink>
                <div className="breadcrumb-separator">/</div>
                <div className="breadcrumb-text-active">Catalog</div>
              </div>
              <div className="text-block">Catalog</div>
            </div>
            <div className="catalog-product-wrap-right-mobile">
              <div className="catalog-card-p-wrap">
                <div className="subtitle-card-p">Product line</div>
                <div className="text-card-p-wrap">
                  <div className="title-card-p">Product name</div>
                  <div className="title-soon-card-p">
                    Ebanat Retro Ball <sup className="upper-text">Coming soon</sup>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-d-wrap">
              <div className="card-d">
                <div className="subtitle-card-d">Description</div>
                <div className="text-wrap-card-d">
                  <div className="product-name-card-d">Product name</div>
                  <div className="text-card-d">
                    Introducing the white premium cotton t-shirt with exquisite Ebanat logo embroidery. Crafted from the finest quality cotton, it offers unmatched comfort and timeless style. The meticulously embroidered logo adds a touch of sophistication, elevating this wardrobe essential. Versatile and durable, this t-shirt is the perfect addition to any outfit.
                  </div>
                  <TransitionLink href="/product" className="product-link">Learn more</TransitionLink>
                </div>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="catalog-product-wrap-right-pc">
            <div className="catalog-card-p-wrap">
              <div className="subtitle-card-p">Product line</div>
              <div className="text-card-p-wrap">
                <div className="title-card-p">Product name</div>
                <div className="title-soon-card-p">
                  Ebanat Retro Ball <sup className="upper-text">Coming soon</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

