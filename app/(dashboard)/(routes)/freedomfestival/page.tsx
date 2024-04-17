"use client"

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import massadoption from "../../../../public/MASS ADOPTIONclearlogo.png";
import Link from 'next/link';
import Image from 'next/image';
import { FaBars} from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mergeConfigs } from 'tailwind-merge';

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

  const mc = {
    name: 'Anders Kargaard', 
    imgSrc: 'https://i.nostr.build/l9Kw.png', 
    twitterUrl: 'https://twitter.com/Anders_' 
  };

  const speakers = [
    { name: 'BJ Dichter', imgSrc: 'https://pbs.twimg.com/profile_images/1647631287274840069/vZ8NvccM_400x400.jpg', twitterUrl: 'https://twitter.com/BJDichter' },
      { name: 'Dennis Porter', imgSrc: 'https://i.nostr.build/4oa5r.png', twitterUrl: 'https://twitter.com/Dennis_Porter_' },
    { name: 'Jason Maier', imgSrc: 'https://pbs.twimg.com/profile_images/1603115142505500677/SB2ferlx_400x400.jpg', twitterUrl: 'https://twitter.com/cjasonmaier' },
    { name: 'Texas Slim', imgSrc: 'https://pbs.twimg.com/profile_images/1589784780970795011/02jf0fqp_400x400.jpg', twitterUrl: 'https://twitter.com/modernTman' },
    { name: 'David Foley', imgSrc: 'https://i.nostr.build/ZLY8.jpg', twitterUrl: 'https://twitter.com/DAAF17' },
    { name: 'Luke Broyles', imgSrc: 'https://i.nostr.build/8De4.jpg', twitterUrl: 'https://twitter.com/luke_broyles' },
    { name: 'Michelle Weekley', imgSrc: 'https://i.nostr.build/jVz5.jpg', twitterUrl: 'https://twitter.com/michelleweekley' },
    { name: 'Surfer Jim', imgSrc: 'https://i.nostr.build/JyYr.jpg', twitterUrl: 'https://twitter.com/surferjimw' },
    { name: 'Michael Schmid', imgSrc: 'https://i.nostr.build/LZA9.jpg', twitterUrl: 'https://twitter.com/Schnitzel' },
    { name: 'James “Combo” Marino', imgSrc: 'https://i.nostr.build/w7xx.png', twitterUrl: 'https://twitter.com/BTC_Mass' },
    { name: 'Bitcoin Kendal', imgSrc: 'https://i.nostr.build/3yqZ.png', twitterUrl: 'https://twitter.com/bitcoinkendal' },
    { name: "Adam O'Brien", imgSrc: 'https://i.nostr.build/P3j0.png', twitterUrl: 'https://twitter.com/adamobrien_' },
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
              <Link href="#meetup" passHref><DropdownMenuItem>Meetup/Pleb Party</DropdownMenuItem></Link>
              <Link href="#activities" passHref><DropdownMenuItem>Activities</DropdownMenuItem></Link>
              <Link href="#merchandise" passHref><DropdownMenuItem>Merchandise</DropdownMenuItem></Link>
              <Link href="#tickets" passHref><DropdownMenuItem>Tickets</DropdownMenuItem></Link>
              <Link href="#faq" passHref><DropdownMenuItem>FAQ</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="#about" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">About</span> | </Link>
            <Link href="#lineup" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Lineup</span> | </Link>
            <Link href="#meetup" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Meetup/Pleb Party</span> | </Link>
            <Link href="#activities" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Activities</span> | </Link>
            <Link href="#merchandise" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Merchandise</span> | </Link>
            <Link href="#tickets" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Tickets</span> | </Link>
            <Link href="#faq" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">FAQ</span></Link>
          </div>
        )}
      </nav>

      <main className="p-8 bg-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-white">Embrace the Future of Finance and Freedom</h1>
        <p className="mb-4 text-gray-300">Join us in celebrating the revolutionary impact of Bitcoin and the enduring legacy of the freedoms enshrined in the U.S. Constitution. Connect with leaders, innovators, and enthusiasts in the world of Bitcoin.</p>
        <div className="relative w-full h-[750px] mb-8"> {/* Changed h-96 to h-[500px] to increase height */}
          <Image 
            src="https://i.nostr.build/7GYBV.jpg" 
            layout="fill" 
            objectFit="contain" 
            alt="Freedom Festival Scene" 
          />
        </div>
    
        
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">About the Festival</h2>

          <p className='text-gray-300 font-bold'> Venue: Sports World 
          <br />
          226 Main St. 
          <br />
          East Windsor, CT 06088</p>
          <br />
          
          <p className="text-gray-300">Freedom Festival 2024 transcends a mere event; it embodies a movement powered by the revolutionary ethos of Bitcoin. As a nexus for those who champion personal liberty and financial sovereignty, the festival is an arena for spirited discussions, debates, and celebrations of Bitcoin's pivotal role in our lives.

Join us to connect with like-minded bitcoin enthusiasts, engage in thought-provoking debates on Bitcoin versus fiat currencies, and immerse in the value-for-value economy that Bitcoin enables. Dive into comprehensive Bitcoin education sessions and embrace the unparalleled freedom to be a free and sovereign individual that Bitcoin facilitates.
<br />
<br />
🎟 Ticket Information:
Children aged 16 and under gain free entry, ensuring that the festival is accessible for families to explore the bitcoin lifestyle together. Secure your spot now to experience the camaraderie and insights of the Bitcoin community firsthand!
<br />
<br />
Festival Schedule:
Doors open at 9:00 AM EST, setting the stage for a day rich in knowledge and networking.</p>
        </section>
        
        <section id="lineup" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Stellar Lineup</h2>

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Master of Ceremonies</h3>
            <div className="p-4 bg-slate-800 rounded-lg shadow-lg">
              <img src={mc.imgSrc} alt={mc.name} className="mx-auto rounded-lg w-32 h-32 object-cover mb-2" />
              <h4 className="text-white">{mc.name}</h4>
              <a href={mc.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  Follow on X
                </a>
            </div>
          </div>
          
          <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2 text-white">Bitcoin Speakers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {speakers.map((speaker, index) => (
            <div className="text-center p-4 bg-slate-800 rounded-lg shadow-lg" key={index}>
              <img src={speaker.imgSrc} alt={speaker.name} className="mx-auto rounded-lg w-32 h-32 object-cover mb-2" />
              <h4 className="text-white">{speaker.name}</h4>
              {speaker.twitterUrl && (
                <a href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  Follow on X
                </a>
              )}
            </div>
          ))}
          </div>
        </div>
        </section>

        <section id="meetup" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Meetup/Pleb Party – May 3rd.</h2>

          <p className='text-gray-300 font-bold'>Venue: MGM  Casino Hotel 
                (Rooftop)
                <br />
                 One MGM Way
                 <br />
                 Springfield, MA 01103</p>
          <br />

          <p className="text-xl mb-2 text-white">

Come and celebrate the launching of Freedom Fest 2024 with our monthly meet up and inaugural pleb party the night before the festival.

Have a chance to mingle with your favorite Bitcoiners, have some food and drink and enjoy some very special speakers/presentations.
 
This is your chance in a relaxed and friendly atmosphere to interact with like-minded people and chances are you’ll be able to talk one on one with some of your most famous bitcoin personalities.

Help make our inaugural party a success and we’ll see you there. The pleb party starts at 5 PM EST.</p>
        </section>

        <section id="merchandise" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Official Merchandise</h2>
          <p className="text-gray-300">Get your official Freedom Festival 2024 merchandise! Show your support and style with our exclusive collection.</p>
          <a href="https://proofofink.com/mass-adoption/" className="transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block">Shop Now</a>
        </section>

        <section id="merchandise" className="my-8 px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Getting here and hotel</h2>
          <p className="text-gray-200 mb-8 md:mb-10">Hotel and transport accommodation recommended by MassAdoption for the Freedom Festival 2024! Feel free to reach out to us with questions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
                  <p className="text-lg font-medium text-gray-300 mb-2 text-center">Hartford Airport</p>
                  <a href="https://bradleyairport.com" className="transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-center shadow-md hover:shadow-lg w-full text-sm">Bradley Airport</a>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
                  <p className="text-lg font-medium text-gray-300 mb-2 text-center">Boston Airport</p>
                  <a href="https://www.massport.com/logan-airport" className="transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-center shadow-md hover:shadow-lg w-full text-sm">Logan Airport</a>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
                  <p className="text-gray-200 mb-4 lg:mb-6">MassAdoption hotel rooms are sold out. Please book directly with the MGM HOTEL or thru a 3rd party site.</p>
              </div>
          </div>
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
              <li>Soccer Contest</li>
              <li>Contests/prizes</li>
              <li>Hot tub powered by ASICS miners</li>
              <li>Cold plunge from a certified Wim Hoff instructor </li>
            </ul>
          </div>
        </section>

        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/0XnB_ZqL6fo?si=inN3cz3QhNmQMPve" title="YouTube video player" allowFullScreen></iframe>

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

      <a href="https://massadoptionbtc.ticketspice.com/massadoption-2024" className="fixed bottom-4 right-4 transition duration-300 ease-in-out transform hover:scale-105 bg-orange-500 hover:bg-red-700 text-white text-2xl font-bold py-2 px-4 rounded-full">
        Buy Tickets
      </a>
    </>
  );
};

export default Home;
