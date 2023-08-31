"use client";
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div id="section_footer">
      <div className='text-center py-4 text-white'>
        <Link href="https://1manstartup.com/privacy-policy" target="_blank" className='btn btn-link hover:text-gray-400'>
          About
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn btn-link hover:text-gray-400'>
          Team
        </Link>
        <span className="text-gray-400"> | </span>
        <Link href="mailto:Roads<dave@1manstartup.com>" className='btn btn-link hover:text-gray-400'>
          Contact
        </Link>
        <p>Copyright © {current_year}, MassAdoption LLC. All Rights Reserved.</p>
        <div>
          <a href="https://twitter.com/BTC_Mass" target='_blank' className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
          </a>
          <a href="https://github.com/Chepenik/MassAdoption.ai" target='_blank' className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" />
          </a>
          <a href="https://youtube.com/@massadoptionbtc" target='_blank' className='hover:text-gray-400'>
            <FontAwesomeIcon icon={faYoutube} size="lg" className="mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
