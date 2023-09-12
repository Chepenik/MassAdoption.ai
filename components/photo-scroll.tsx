import { useState } from 'react';
import Image from 'next/image'; 

interface Photo {
    src: string;
    alt: string; 
  }

interface PhotoScrollProps {
  photos: Photo[]; 
}

export const PhotoScroll: React.FC<PhotoScrollProps> = ({ photos }) => {

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };
  
  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
    <h1 className='text-white text-center'>MassAdoption Events Photo Gallery</h1>
        <div className='photo-scroll' style={{overflowX: 'scroll'}}>
            
            {selectedPhoto && (
            <div className='selected-photo' style={{width: 400, height: 400, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <button className="text-white align-right" onClick={handleClose}>X</button>
                <Image 
                src={selectedPhoto.src}
                width={400}
                height={400} 
                alt={''} 
                />
            </div>
            )}

            <div className='photo-list' style={{display: 'flex', flexDirection: 'row'}}>
            {photos.map(photo => (
                <div 
                key={photo.src} 
                onClick={() => handleClick(photo)}
                style={{marginRight: 10}}
                >
                <Image 
                    src={photo.src}
                    alt={photo.alt}
                    width={100}
                    height={100}
                />
                </div>
            ))}
            </div>
        </div>
    </>
    
  );
};