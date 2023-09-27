"use client"

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
       <div>
        <h1 className="text-2xl text-center font-bold mb-4">
          <span className="text-orange-600">MassAdoption:</span> A Bitcoin Meetup
        </h1>
      </div>

      <div className="bg-white p-4 md:p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-0 md:pr-8 text-center bg-white">
          <p>
            Welcome to MassAdoption!  We are on a mission to empower individuals with bitcoin by creating circular economies focused on financial freedom. We believe that Bitcoin can make the world a better place by giving people more control over their finances.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 text-center bg-white">
            <Image 
              src="/justacalculator.png" 
              alt="Calculator" 
              width={400} 
              height={300} 
              className="rounded-lg mx-auto" 
            />
        </div>
      </div>

      <div className="bg-white p-4 md:p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-0 md:pr-8 text-center bg-white">
          <p>
          To us, Bitcoin is the U.S constitution of cyber space. We are doing everything in our power to promote this peaceful revolution so humanity can have money backed by open source software and math instead of violence. We believe bitcoin is money and everything else is credit. (Ok maybe there is a case for gold as money too but we digress)
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 text-center bg-white">
            <Image 
              src="/unclesam.jpeg" 
              alt="Uncle Sam" 
              width={400} 
              height={300} 
              className="rounded-lg mx-auto" 
            />
        </div>
      </div>

      <div className="bg-white p-4 md:p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-0 md:pr-8 text-center bg-white">
          <p>
          If you want to get involved with us joining our discord community, attending one of our meetups, or donating.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 text-center bg-white">
            <Image 
              src="/greenpillvsorangepill.jpeg" 
              alt="Green pill vs Orange Pill" 
              width={400} 
              height={300} 
              className="rounded-lg mx-auto" 
            />
        </div>
      </div>

      <div className="bg-white mt-8 text-center">
        <p className="text-lg">
          Ready to be a part of the MassAdoption community?
        </p>

        <Link href="https://www.meetup.com/massachusetts-bitcoin-meetup/" passHref>
          <button className="mt-4 mb-4 bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">
            Come To A Meetup
          </button>
        </Link>
        <br />
        <Link href="https://discord.gg/s9XqArewaH" passHref>
          <button className="mt-4 mb-4  bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">
            Join The Discord
          </button>
        </Link>
        <br />
        <Link href="https://geyser.fund/project/massadoption" passHref>
          <button className="mt-4 mb-4  bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
}

