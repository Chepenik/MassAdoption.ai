"use client"

import React from "react";
import Link from "next/link";

const partners = [
  {
    name: "Unchained", 
    url: "https://unchained.com/",
    image: "https://i.nostr.build/xvxe.png"
  },
  {
    name: "River", 
    url: "https://river.com/",
    image: "https://i.nostr.build/vgA7.webp"
  },
  {
    name: "The Bitcoin Opportunity Fund/", 
    url: "https://www.bitcoinopportunity.fund/",
    image: "https://i.nostr.build/jy6M.png"
  },
  {
    name: "Orange Pill App", 
    url: "https://www.theorangepillapp.com/",
    image: "https://i.nostr.build/mmkj.png"
  },
  {
    name: "MGM Springfield", 
    url: "https://mgmspringfield.mgmresorts.com/en.html",
    image: "https://i.nostr.build/O6z0.png"
  },
  { 
    name: "The Bitcoin Adviser",
    url: "https://www.thebitcoinadviser.com/",
    image: "https://i.nostr.build/rEGV.png"
  },
  { 
    name: "The Beef Initiative",
    url: "https://beefinitiative.com/",
    image: "https://i.nostr.build/y92m.webp"
  },
  { 
    name: "BitcoinNews.com",
    url: "https://bitcoinnews.com/",
    image: "https://i.nostr.build/56vv.png"
  },
  { 
    name: "Satoshi's Journal", 
    url: "https://satoshisjournal.com/",
    image: "https://i.nostr.build/X7nl.png" 
  },
  { 
    name: "High Hash Rate", 
    url: "https://www.highhashrate.com/",
    image: "https://i.nostr.build/rQMw.png" 
  },
  { 
    name: "Athena Alpha", 
    url: "https://www.athena-alpha.com/",
    image: "https://i.nostr.build/aeBr.jpg" 
  }
];

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-center text-white font-semibold mb-6">
        MassAdoption is proud partners with:
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <Link href={partner.url} key={index}>
          <div className="border rounded-md p-4 hover:bg-gray-100">
            <img src={partner.image} alt={partner.name} />
          </div> 
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;