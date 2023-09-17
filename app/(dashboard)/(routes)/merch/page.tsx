"use client"

const MerchPage = () => {
  const cardData = [
    {
      imageSrc: 'https://i.nostr.build/JEzW.jpg',
      altText: 'Black T-Shirt',
      title: 'Black T-Shirt',
      link: 'https://www.proofofink.com/13-massadoption',
    },
    {
      imageSrc: 'https://i.nostr.build/eAk3.jpg',
      altText: 'Orange T-Shirt',
      title: 'Orange T-Shirt',
      link: 'https://www.proofofink.com/13-massadoption',
    },
    {
      imageSrc: 'https://i.nostr.build/rReV.png',
      altText: 'White T-Shirt',
      title: 'White T-Shirt',
      link: 'https://www.proofofink.com/13-massadoption',
    },
    {
      imageSrc: 'https://i.nostr.build/XAmB.png',
      altText: 'Black Hoodie',
      title: 'Black Hoodie',
      link: 'https://www.proofofink.com/13-massadoption',
    },
    {
      imageSrc: 'https://i.nostr.build/EGWP.png',
      altText: 'Orange Hoodie',
      title: 'Orange Hoodie',
      link: 'https://www.proofofink.com/13-massadoption',
    },
    {
      imageSrc: 'https://i.nostr.build/mgej.png',
      altText: 'White Hoodie',
      title: 'White Hoodie',
      link: 'https://www.proofofink.com/13-massadoption',
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl text-center text-white">MassAdoption Merch </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {cardData.map((card, index) => (
          <div className="col-span-1" key={index}>
            <div className="bg-black p-4 rounded-lg flex flex-col h-full">
              <div className="image-container mb-2">
                <img
                  src={card.imageSrc}
                  alt={card.altText}
                  className="h-72 w-full object-cover"
                />
              </div>
              <p className="text-white mb-2">{card.title}</p>
              <a
                href={card.link}
                className="bg-blue-500 text-white rounded-full py-2 px-4 text-center hover:bg-blue-700 transition duration-300"
              >
                Buy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;