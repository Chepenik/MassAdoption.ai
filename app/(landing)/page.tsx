"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { LandingContent } from '@/components/landing-content';
import { LandingHero } from '@/components/landing-hero';
import { LandingNavbar } from '@/components/landing-navbar';
import { Footer } from '@/components/footer';
import { backgroundImages } from '@/components/backgroundImages';
// import { PhotoScroll } from '@/components/photo-scroll';

// const photos = [
//   { src: '/../public/purplebsky.png', alt: 'Photo 1' },
//   { src: '/../public/1.png', alt: 'Photo 2' },
//   { src: '/../public/photo.png', alt: 'Photo 3' },
//   { src: '/../public/1.png', alt: 'Photo 1' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 2' },
//   { src: '/../public/public/logo.png', alt: 'Photo 3' },
//   { src: '/../public/public/empty.png', alt: 'Photo 1' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 2' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 3' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 1' },
//   { src: '/../public/1.png', alt: 'Photo 2' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 3' },
//   { src: '/../public/justacalculator.png', alt: 'Photo 1' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 2' },
//   { src: '/../public/justacalculator.png', alt: 'Photo 3' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 1' },
//   { src: '/../public/justacalculator.png', alt: 'Photo 2' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 3' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 1' },
//   { src: '/../public/justacalculator.png', alt: 'Photo 2' },
//   { src: '/../public/purplebsky.png', alt: 'Photo 3' },
// ];

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = backgroundImages.indexOf(backgroundImage);
      setBackgroundImage(backgroundImages[(index + 1) % backgroundImages.length]);
    }, 10000);
    return () => clearInterval(interval);
  }, [backgroundImage]);

  return (
    <div className='bg-[#192339] '>
      <Head>
        {/* Add your meta tags, title, etc. here */}
      </Head>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
        {/* <PhotoScroll photos={photos} /> */}
        <div className="iframe-wrapper">
          <iframe
            src="https://btcmap.org/map#6/41.88592/-69.43359"
            width="100%"
            height="800px"
            style={{ padding: '100px 100px 100px 100px' }}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
