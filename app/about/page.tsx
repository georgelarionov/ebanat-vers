import Image from 'next/image';
import TransitionLink from '@/components/TransitionLink';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <div className="catalog-products-hero">
        <Image 
          src="/images/update/about-pc-hero-img.webp" 
          alt="About" 
          className="catalog-pc-hero-img"
          fill
          priority
          sizes="100vw"
        />
        <Image 
          src="/images/update/about-mobile-hero-img.webp" 
          alt="About Mobile" 
          className="catalog-mobile-hero-img"
          fill
          sizes="100vw"
        />
        <div className="catalog-product-wrapper">
          <div className="breadcrumbs-wrap-mobile">
            <div className="breadcrumbs">
              <TransitionLink href="/" className="breadcrumb-text">Main</TransitionLink>
              <div className="breadcrumb-separator">/</div>
              <div className="breadcrumb-text-active">About</div>
            </div>
          </div>
          <div className="about-wrapper">
            <div className="breadcrumbs-wrap-pc">
              <div className="breadcrumbs">
                <TransitionLink href="/" className="breadcrumb-text">Main</TransitionLink>
                <div className="breadcrumb-separator">/</div>
                <div className="breadcrumb-text-active">About</div>
              </div>
            </div>
            <div className="about-text-wrap">
              <div className="about-text">
                This is not an about page.<br />
                This is all you need to know:<br />
                Ebanat exists.<br />
                <br />
                <span className="about-span">Everything else is speculation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

