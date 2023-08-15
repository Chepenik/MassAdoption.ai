import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
// import { About } from "@/components/about";

const LandingPage = () => {
  return (
    <div>
      {/* <h1>(Unprotected landing page route)</h1> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",  // Make the background cover the entire viewport
          backgroundImage: 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://cdn.nostr.build/p/nb3621.jpeg)',
          backgroundSize: "cover",  // Scale the background image to cover the entire container
          backgroundPosition: "center",  // Center the background image
        }}
      >
        <LandingNavbar />
        <LandingHero />
        {/* <About /> */}
        <h1>I'm here big dog I'm here</h1>
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