"use client"

import { useState, useEffect } from 'react';
import { LandingContent } from '@/components/landing-content';
import { LandingHero } from '@/components/landing-hero';
import { LandingNavbar } from '@/components/landing-navbar';
import { Footer } from '@/components/footer';
import { backgroundImages } from '@/components/backgroundImages';
import FestivalBanner from '@/components/FestivalBanner'
import MailchimpForm from '@/components/MailChimp';

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = backgroundImages.indexOf(backgroundImage);
      setBackgroundImage(backgroundImages[(index + 1) % backgroundImages.length]);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImage]);

  return (
    <div className='bg-[#192339] '>
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
        <FestivalBanner /> 
        <LandingHero />
        <div className="hidden sm:block"> 
        </div>
        <MailchimpForm />
        <br />
        <LandingContent />
        <div className="iframe-wrapper">
          <h1 className='text-center text-white text-4xl'>Find Local Businesses That Accept BTC</h1>
          <iframe
            src="https://btcmap.org/map#6/41.88592/-69.43359"
            width="100%"
            height="800px"
            style={{ padding: '100px 100px 100px 100px' }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
