"use client"

import React from 'react';

const MagazinePage: React.FC = () => {
  const imageCount = 23;
  const images = Array.from({ length: imageCount }, (_, i) => i + 1);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">MassAdoption Magazine Volume 1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imageNumber) => (
          <div key={imageNumber} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={`/magazine vol 1/${imageNumber}.png`}
              alt={`Image ${imageNumber}`}
              className="w-full h-auto"
            />
            <p className="text-center mt-2">{`Page ${imageNumber}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
