import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const font = Poppins({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 767
  );
  
  const handleResize = () => 
    setIsMobileScreen(window?.innerWidth <= 767);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <nav className="p-4 bg-transparent text-white flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 mr-6">
          <Image fill alt="Logo" src="/massadoption.png" />
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        {isMobileScreen ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaBars className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/freedomfestival">
                <DropdownMenuLabel className="text-lg font-semibold">Freedom Fest '24</DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/MrNakamoto">
                <DropdownMenuItem className="py-3">Mr. Nakamoto</DropdownMenuItem>
              </Link>
              <Link href="/merch">
                <DropdownMenuItem className="py-3">Merch</DropdownMenuItem>
              </Link>
              <Link href="/team">
                <DropdownMenuItem className="py-3">Team</DropdownMenuItem>
              </Link>
              <Link href="https://sovereignstyleapparel.com/">
                <DropdownMenuItem className="py-3">Affiliates</DropdownMenuItem>
              </Link>
              <Link href="https://www.meetup.com/massachusetts-bitcoin-meetup/">
                <DropdownMenuItem className="py-3">Meetup</DropdownMenuItem>
              </Link>
              <Link href="/about">
                <DropdownMenuItem className="py-3">About</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="/freedomfestival">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">  Freedom Fest '24</span>
            </Link>
            <p>|</p>
            <Link href="https://www.meetup.com/massachusetts-bitcoin-meetup/">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Meetup</span>
            </Link>
            <p>|</p>
            <Link href="/MrNakamoto">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Mr. Nakamoto</span>
            </Link>
            <p>|</p>
            <Link href="/team">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Team</span>
            </Link>
            <p>|</p>
            <Link href="/merch">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Merch</span>
            </Link>
            <p>|</p>
            <Link href="/about">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">About</span>
            </Link>
            <p>|</p>
            <Link href="https://sovereignstyleapparel.com/">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Affiliates</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
