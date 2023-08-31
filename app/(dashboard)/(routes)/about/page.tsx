"use client"

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white p-4 md:p-8">

      <div className="md:flex">
        <div className="md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-600">MassAdoption:</span> A Bitcoin Meetup  
          </h1>

          <p className="mt-4">
          Our mission is to help others leverage Bitcoin to improve their financial freedom. We believe creating circular bitcoin economies is the key to a better world.
         
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image 
            src="/justacalculator.png"
            alt="Calculator" 
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="md:flex mt-8">
        <div className="md:w-1/2 pr-0 md:pr-8">
          <p>
          Consider joining our mission by donating, joining the discord, or coming to a meetup. Scroll down to learn more about Mass Adoption.
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image 
            src="/unclesam.jpeg"
            alt="Uncle Sam"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div> 
      </div>

      <div className="md:flex mt-8">
        <div className="md:w-1/2 pr-0 md:pr-8">
          <p>
            Our mission is to help others leverage Bitcoin to improve their financial freedom. We believe creating circular bitcoin economies is the key to a better world.
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image 
            src="/greenpillvsorangepill.jpeg"
            alt="Green pill vs Orange Pill"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div> 
      </div>

    </div>
  );
}