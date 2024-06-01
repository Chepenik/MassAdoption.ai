import { Poppins } from "next/font/google";
import Image from "next/image";
import massadoption from "../public/MASS ADOPTIONclearlogo.png"
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
        <div className="relative h-24 w-24 mr-6"> 
        <Image alt="Logo" src={massadoption} className="rounded-full" />
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
              <Link target="_blank" rel="noopener" href="https://www.meetup.com/massachusetts-bitcoin-meetup/">
                <DropdownMenuItem className="py-3">Meetup</DropdownMenuItem>
              </Link>
              <Link href="/magazine">
                <DropdownMenuItem className="py-3">Magazine</DropdownMenuItem>
              </Link>
              <Link href="/team">
                <DropdownMenuItem className="py-3">Team</DropdownMenuItem>
              </Link>           
              <Link href="https://youtu.be/uBXbHKEF70c">
                <DropdownMenuItem className="py-3">Documentary Film</DropdownMenuItem>
              </Link>
              <Link href="/meetup">
                <DropdownMenuItem className="py-3">Start A Meetup</DropdownMenuItem>
              </Link>
              <Link href="/advisory">
                <DropdownMenuItem className="py-3">Advisory Services</DropdownMenuItem>
              </Link>
              <Link href="https://proofofink.com/mass-adoption/">
                <DropdownMenuItem className="py-3">Merch</DropdownMenuItem>
              </Link>
              <Link href="/partners">
                <DropdownMenuItem className="py-3">Partners</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="hidden lg:flex items-center gap-x-2">
            <Link href="/freedomfestival">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">  Freedom Fest '24</span>
            </Link>
            <p>|</p>
            <Link href="/MrNakamoto">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Mr. Nakamoto</span>
            </Link>
            <p>|</p>
            <Link target="_blank" rel="noopener"  href="https://www.meetup.com/massachusetts-bitcoin-meetup/">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Meetup</span>
            </Link>
            <p>|</p>
            <Link href="/magazine">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Magazine</span>
            </Link>
            <p>|</p>
            <Link href="/team">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Team</span>
            </Link>
            <p>|</p>
            <Link href="https://youtu.be/uBXbHKEF70c">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Documentary Film</span>
            </Link>
            <p>|</p>
            <Link href="/meetup">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Start A Meetup</span>
            </Link>
            <p>|</p>
            <Link href="/advisory">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Advisory Services</span>
            </Link>
            <p>|</p>
            <Link href="https://proofofink.com/mass-adoption/">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Merch</span>
            </Link>
            <p>|</p>
            <Link href="/partners">
              <span className="text-lg font-semibold hover:text-orange-400 hover:underline cursor-pointer">Partners</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
