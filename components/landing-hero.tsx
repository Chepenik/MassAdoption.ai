"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>A Bitcoin Meetup For</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-orange-500 py-2">
          <TypewriterComponent
            options={{
              strings: [
                "Anyone willing to learn",
                "Builders",
                "Nocoiners",
                "Maximalists"
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
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        MassAdoption starts in Massachusetts
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};