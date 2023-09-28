"use client"

import React from 'react';

const imageLinks = [
  'https://i.nostr.build/jBjV.png',
  'https://i.nostr.build/Zaxl.png',
  'https://i.nostr.build/elzG.png',
  'https://i.nostr.build/d8oE.png',
  'https://i.nostr.build/GlMa.png',
  'https://i.nostr.build/OAwQ.png',
  'https://i.nostr.build/wQdx.png',
  'https://i.nostr.build/aeEq.png',
  'https://i.nostr.build/x6de.png',
  'https://i.nostr.build/Y7DA.png',
  'https://i.nostr.build/35RZ.png',
  'https://i.nostr.build/yBd5.png',
  'https://i.nostr.build/vWda.png',
  'https://i.nostr.build/8lqW.png',
  'https://i.nostr.build/lzle.png',
  'https://i.nostr.build/Pn2Z.png',
  'https://i.nostr.build/W7Dv.png',
  'https://i.nostr.build/Q028.png',
  'https://i.nostr.build/6jVW.png',
  'https://i.nostr.build/o0Ql.png',
  'https://i.nostr.build/B0XK.png',
  'https://i.nostr.build/zo5V.png',
  'https://i.nostr.build/AnKG.png',
];

const MagazinePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">MassAdoption Magazine Volume 1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageLinks.map((imageLink, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={imageLink}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
            <p className="text-center mt-2">{`Page ${index + 1}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
