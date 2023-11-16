"use client"

import Head from 'next/head';
import React from 'react';
import massadoption from "../../../../public/MASS ADOPTIONclearlogo.png"
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  const speakers = [
    { name: 'BJ Dichter', imgSrc: 'https://pbs.twimg.com/profile_images/1647631287274840069/vZ8NvccM_400x400.jpg' },
    { name: 'Jason Maier', imgSrc: 'https://pbs.twimg.com/profile_images/1603115142505500677/SB2ferlx_400x400.jpg' },
    { name: 'Texas Slim', imgSrc: 'https://pbs.twimg.com/profile_images/1589784780970795011/02jf0fqp_400x400.jpg' },
    { name: 'Speaker 4 coming soon', imgSrc: 'https://cdn.nostr.build/p/nb1656.jpeg' },
    { name: 'Speaker 5 coming soon', imgSrc: 'https://i.nostr.build/a6kq.png' },
    { name: 'Speaker 6 coming soon', imgSrc: 'https://i.nostr.build/eAJG.png' },
    { name: 'Speaker 7 coming soon', imgSrc: 'https://cdn.nostr.build/p/nb1655.jpg' },
    { name: 'Speaker 8 coming soon', imgSrc: 'https://i.nostr.build/O8EQ.png' },
    // ... Add more speakers as needed
  ];

   return (
    <>
      <Head>
        <title>Freedom Festival 2024: Celebrating Bitcoin & Liberty</title>
        <meta name="description" content="Unite with Bitcoiners from around the globe at Freedom Festival 2024. Celebrate the spirit of liberty and the innovation of Bitcoin." />
        <link rel="icon" href="/bitcoin-favicon.ico" />
      </Head>

      <nav className="flex justify-between items-center p-4 shadow-md bg-slate-700">
      <Link href="/" className="flex items-center">
        <div className="relative h-24 w-24 mr-6"> 
          <Image alt="Logo" src={massadoption} className="rounded-full" />
        </div>
      </Link>
        <div>
          <a href="#about" className="p-2 hover:underline text-white">About</a>
          <a href="#lineup" className="p-2 hover:underline text-white">Lineup</a>
          <a href="#tickets" className="p-2 hover:underline text-white">Tickets</a>
          <a href="#faq" className="p-2 hover:underline text-white">FAQ</a>
          {/* Add more navigation items here */}
        </div>
      </nav>

      <main className="p-8 bg-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-white">Embrace the Future of Finance and Freedom</h1>
        <p className="mb-4 text-gray-300">Join us in celebrating the revolutionary impact of Bitcoin and the enduring legacy of the freedoms enshrined in the U.S. Constitution. Connect with leaders, innovators, and enthusiasts in the world of Bitcoin.</p>
        
        <iframe className="w-full h-96 my-8 rounded-lg" src="https://www.youtube.com/embed?listType=playlist&list=XXXXXXX" title="Freedom Festival Promo" frameBorder="0" allowFullScreen></iframe>
        
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">About the Festival</h2>
          <p className="text-gray-300">Freedom Festival 2024 is not just an event; it's a movement. With a focus on the transformative power of Bitcoin, we're gathering freedom-loving individuals to discuss, debate, and celebrate the role of Bitcoin in securing personal liberty.</p>
        </section>
        
        <section id="lineup" className="my-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Stellar Lineup</h2>
          <div className="grid grid-cols-4 gap-4">
            {speakers.map((speaker) => (
              <div className="text-center p-4 bg-slate-800 rounded-lg shadow-lg" key={speaker.name}>
                <img src={speaker.imgSrc} alt={speaker.name} className="mx-auto rounded-lg w-32 h-32 object-cover mb-2" />
                <h3 className="text-white">{speaker.name}</h3>
              </div>
            ))}
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

      <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Buy Tickets
      </button>
    </>
  );
};

export default Home;
