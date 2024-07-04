"use client"

import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import massadoption from "../../../../public/MASS ADOPTIONclearlogo.png";
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mergeConfigs } from 'tailwind-merge';

const Home: React.FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Freedom Festival 2024: Celebrating Bitcoin & Liberty</title>
        <meta name="description" content="Unite with Bitcoiners from around the globe at Freedom Festival 2024. Celebrate the spirit of liberty and the innovation of Bitcoin." />
        <link rel="icon" href="/bitcoin-favicon.ico" />
      </Head>

      <nav className="p-4 bg-transparent text-white flex items-center justify-between">
        <Link href="/" passHref>
          <div className="relative h-24 w-24 mr-6">
            <Image alt="Logo" src={massadoption} className="rounded-full" />
          </div>
        </Link>
        {isMobileScreen ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaBars className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/" passHref><DropdownMenuItem>Home</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="/" passHref><span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Home</span></Link>
          </div>
        )}
      </nav>

      <main className="p-8 bg-gray-900">
        <h1 className="text-white">Stay Tuned For The 2025 Freedom Festival</h1>
        <h3 className="text-white">In the meantime check out our 2024 recap</h3>
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Qq8Y-8RjaZM?si=eR0ENYKUmKmRg0Lm" title="YouTube video player"  allowFullScreen></iframe>
      </main>
    </>
  );
};

export default Home;
