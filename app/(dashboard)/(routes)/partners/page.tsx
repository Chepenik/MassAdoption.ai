"use client"

import React from "react";
import Link from "next/link";

const partners = [
  { 
    name: "Satoshi's Journal", 
    url: "https://satoshisjournal.com/",
    image: "https://i.nostr.build/3AVM.jpg" 
  },
  { 
    name: "The Beef Initiative",
    url: "https://beefinitiative.com/",
    image: "https://i.nostr.build/y92m.webp"
  },
  {
    name: "River", 
    url: "https://river.com/",
    image: "https://i.nostr.build/vgA7.webp"
  },
];

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-center text-white font-semibold mb-6">
        MassAdoption is proud partners with:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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