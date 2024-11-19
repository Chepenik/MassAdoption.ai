"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-5 font-extrabold">
        <h1>MassAdoption Is A Bitcoin Only Company That Concentrates On</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-orange-500 py-2">
          <TypewriterComponent
            options={{
              strings: [
                "Meet Ups",
                "AI",
                "Merchant Adoption",
                "Education",
                "Events"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 0,  
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
      </div>
      <div>
        <Link href="https://www.meetup.com/massachusetts-bitcoin-meetup/" target="_blank">
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Join Us
          </Button>
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};