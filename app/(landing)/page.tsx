"use client"

import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { backgroundImages } from "@/components/backgroundImages";
import { useEffect, useState } from "react";
import Head from "next/head"; // Import the Head component from next/head

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
    <div>
      {/* Use the Head component to manage head content */}
      <Head>
        {/* Add your meta tags, title, etc. here */}
      </Head>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <LandingNavbar />
        <LandingHero />
        {/* Add Freedom Festival */}
        {/* Add Mr. Nakamoto */}
        {/* Add a team section */}
        <LandingContent />
        <div className="iframe-wrapper">
          <iframe
            src="https://btcmap.org/map#6/41.88592/-69.43359"
            width="100%"
            height="800px"
            style={{ padding: "100px 100px 100px 100px" }}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
