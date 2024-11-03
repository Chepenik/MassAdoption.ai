import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faYoutube, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Added faDiscord

export const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div id="section_footer">
      <div className='text-center py-4 text-white'>
        <Link href="/about" legacyBehavior>
          <a className='btn btn-link hover:text-gray-400' target="_blank" rel="noopener noreferrer">About</a>
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="https://getalby.com/p/MassAdoption" legacyBehavior>
          <a className='btn btn-link hover:text-gray-400' target="_blank" rel="noopener noreferrer">Donate</a>
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="/contact" legacyBehavior>
          <a className='btn btn-link hover:text-gray-400' target="_blank" rel="noopener noreferrer">Contact</a>
        </Link>
        <p>Copyright © {current_year}, MassAdoption LLC. All Rights Reserved.</p>
        <div>
          <a href="https://twitter.com/BTC_Mass" className='hover:text-gray-400' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
          </a>
          <a href="https://github.com/Chepenik/MassAdoption.ai" className='hover:text-gray-400' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
          </a>
          <a href="https://youtube.com/@massadoptionbtc" className='hover:text-gray-400' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" className="mx-2" />
          </a>
          <a href="https://www.instagram.com/freedomfestival_btc" className='hover:text-gray-400' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="mx-2" /> 
          </a>
        </div>
      </div>
    </div>
  );
};
