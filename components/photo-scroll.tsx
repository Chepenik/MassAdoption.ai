import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoScrollProps {
  photos: Photo[];
}
// add a section for ai, 24 festival, meetup photos, Old freedom festival photos, affiliates 
export const PhotoScroll: React.FC<PhotoScrollProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const visiblePhotos = photos.slice(photoIndex, photoIndex + 5);

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">MassAdoption Events</h1>

      {/* Selected Photo Modal */}
      {selectedPhoto && (
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-orange-400 text-lg"
              onClick={handleClose}
            >
              X
            </button>
            <Image
              src={selectedPhoto.src}
              width={400}
              height={400}
              alt={selectedPhoto.alt}
            />
          </div>
      )}

      <div className="mt-4 flex items-center">
        <button
          onClick={handlePrev}
          className="p-4 text-3xl"
        >
          {'<'}
        </button>
        <div className="flex space-x-4 overflow-x-hidden">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.src}
              onClick={() => handleClick(photo)}
              className="cursor-pointer transform transition-transform ease-in-out duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-4 text-3xl"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
