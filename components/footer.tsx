import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'; // Added faDiscord

export const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div id="section_footer">
      <div className='text-center py-4 text-white'>
        <Link href="/about" className='btn btn-link hover:text-gray-400'>
          About
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="https://getalby.com/p/MassAdoption" className='btn btn-link hover:text-gray-400'>
          Donate
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="/contact" className='btn btn-link hover:text-gray-400'>
          Contact
        </Link>
        <p>Copyright © {current_year}, MassAdoption LLC. All Rights Reserved.</p>
        <div>
          <a href="https://twitter.com/BTC_Mass" className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
          </a>
          <a href="https://github.com/Chepenik/MassAdoption.ai" className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
          </a>
          <a href="https://youtube.com/@massadoptionbtc" className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faYoutube} size="lg" className="mx-2" />
          </a>
          <a href="https://discord.gg/q9KH8uNS" className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faDiscord} size="lg" className="mx-2" /> 
          </a>
        </div>
      </div>
    </div>
  );
};
