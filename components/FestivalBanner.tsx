import Link from 'next/link';

const FestivalBanner = () => {
  return (
    <div className="festival-banner bg-orange-500 text-white text-center py-6">
      <h2 className="text-3xl font-bold">Join us at the 2nd annual island Bitcoin retreat</h2>
      <h2 className="text-3xl font-bold">CAMP NAKAMOTO 2026</h2>
      <div className="inline-flex justify-center mt-4 gap-6">
        <Link href="https://pay.zaprite.com/pl_nbISw4YWoJ" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
            Get Tickets
          </a>
        </Link>
        <Link href="https://www.campnakamoto.com/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-400 transition duration-300 ease-in-out">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FestivalBanner;
