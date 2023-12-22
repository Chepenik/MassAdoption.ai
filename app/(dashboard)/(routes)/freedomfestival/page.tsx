"use client"

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import massadoption from "../../../../public/MASS ADOPTIONclearlogo.png";
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home: React.FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mc = { name: 'Anders Kargaard', imgSrc: 'https://i.nostr.build/l9Kw.png' };

  const speakers = [
    { name: 'BJ Dichter', imgSrc: 'https://pbs.twimg.com/profile_images/1647631287274840069/vZ8NvccM_400x400.jpg' },
    { name: 'Jason Maier', imgSrc: 'https://pbs.twimg.com/profile_images/1603115142505500677/SB2ferlx_400x400.jpg' },
    { name: 'Texas Slim', imgSrc: 'https://pbs.twimg.com/profile_images/1589784780970795011/02jf0fqp_400x400.jpg' },
    { name: 'David Foley', imgSrc: 'https://i.nostr.build/ZLY8.jpg' },
    { name: 'Luke Broyles', imgSrc: 'https://i.nostr.build/8De4.jpg' },
    { name: 'Michelle Weekley', imgSrc: 'https://i.nostr.build/jVz5.jpg' },
    { name: 'Surfer Jim', imgSrc: 'https://i.nostr.build/JyYr.jpg' },
    { name: 'Speaker 8 coming soon', imgSrc: 'https://i.nostr.build/x9De.png' },
  ];

   return (
    <>
      <Head>
        <title>Freedom Festival 2024: Celebrating Bitcoin & Liberty</title>
        <meta name="description" content="Unite with Bitcoiners from around the globe at Freedom Festival 2024. Celebrate the spirit of liberty and the innovation of Bitcoin." />
        <link rel="icon" href="/bitcoin-favicon.ico" />
      </Head>

      <nav className="p-4 bg-transparent text-white flex items-center justify-between">
        <Link href="/" passHref>
          <div className="relative h-24 w-24 mr-6">
            <Image alt="Logo" src={massadoption} className="rounded-full" />
          </div>
        </Link>
        {isMobileScreen ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaBars className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="#about" passHref><DropdownMenuItem>About</DropdownMenuItem></Link>
              <Link href="#lineup" passHref><DropdownMenuItem>Lineup</DropdownMenuItem></Link>
              <Link href="#activities" passHref><DropdownMenuItem>Activities</DropdownMenuItem></Link>
              <Link href="https://massadoptionbtc.ticketspice.com/massadoption-2024" passHref><DropdownMenuItem>Tickets</DropdownMenuItem></Link>
              <Link href="#faq" passHref><DropdownMenuItem>FAQ</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="#about" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">About</span> | </Link>
            <Link href="#lineup" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Lineup</span> | </Link>
            <Link href="#activities" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Activities</span> | </Link>
            <Link href="https://massadoptionbtc.ticketspice.com/massadoption-2024" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Tickets</span> | </Link>
            <Link href="#faq" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">FAQ</span></Link>
          </div>
        )}
      </nav>

      <main className="p-8 bg-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-white">Embrace the Future of Finance and Freedom</h1>
        <p className="mb-4 text-gray-300">Join us in celebrating the revolutionary impact of Bitcoin and the enduring legacy of the freedoms enshrined in the U.S. Constitution. Connect with leaders, innovators, and enthusiasts in the world of Bitcoin.</p>
        
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/0XnB_ZqL6fo?si=inN3cz3QhNmQMPve" title="YouTube video player" allowFullScreen></iframe>
        
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">About the Festival</h2>
          <p className="text-gray-300">Freedom Festival 2024 is not just an event; it's a movement. With a focus on living a bitcoin lifestyle with the transformative power of Bitcoin. We are gathering freedom-loving individuals to discuss, debate, and celebrate the role of Bitcoin in securing personal liberty and sovereignty.

Buy your tickets today and rub elbows with your favorite bitcoiners, have vigorous debate about bitcoin/fiat, participate in bitcoin’s value for value circular economy, bitcoin education and most importantly, the freedom that bitcoin provides to be a free and sovereign individual.</p>
        </section>
        
        <section id="lineup" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Stellar Lineup</h2>

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Master of Ceremonies</h3>
            <div className="p-4 bg-slate-800 rounded-lg shadow-lg">
              <img src={mc.imgSrc} alt={mc.name} className="mx-auto rounded-lg w-32 h-32 object-cover mb-2" />
              <h4 className="text-white">{mc.name}</h4>
            </div>
          </div>
          
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Bitcoin Speakers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {speakers.map((speaker) => (
                <div className="text-center p-4 bg-slate-800 rounded-lg shadow-lg" key={speaker.name}>
                  <img src={speaker.imgSrc} alt={speaker.name} className="mx-auto rounded-lg w-32 h-32 object-cover mb-2" />
                  <h4 className="text-white">{speaker.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="merchandise" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Official Merchandise</h2>
          <p className="text-gray-300">Get your official Freedom Festival 2024 merchandise! Show your support and style with our exclusive collection.</p>
          <a href="https://proofofink.com/product/massadoption/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block">Shop Now</a>
        </section>

        <section id="activities" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Festival Activities</h2>
          <div className="text-gray-300">
            <ul className="list-disc ml-4">
              <li>Bitcoin Speakers</li>
              <li>Parkour Demonstrations</li>
              <li>Interactive Workshops</li>
              <li>Cattlemen’s Feast</li>
              <li>Live music</li>
              <li>Bitcoin DJ’s</li>
              <li>Soccer tournament</li>
              <li>Contests/prizes</li>
            </ul>
          </div>
        </section>

        <section id="tickets" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Secure Your Spot</h2>
          <p className="text-gray-300">Get ready to be part of the conversation. Purchase your tickets now and ensure your place at the forefront of the financial revolution. Remember, being early is synonymous with being right.</p>
        </section>
        
        <section id="faq" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <div className="text-gray-300">
            <h3 className="font-bold">Can I get a refund on my ticket?</h3>
            <p>Refunds are not available, except under exceptional circumstances. Each request will be reviewed on a case-by-case basis to ensure fairness and respect for all attendees.</p>
            {/* Add more standard FAQ content here */}
          </div>
        </section>
      </main>

      <footer className="bg-slate-700 text-white text-center p-4">
        <p>Stay updated with the latest news. Follow us on social media and join the conversation with #FreedomFest2024 #BitcoinFreedom</p>
      </footer>

      <a href="https://massadoptionbtc.ticketspice.com/massadoption-2024" className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Buy Tickets
      </a>
    </>
  );
};

export default Home;
