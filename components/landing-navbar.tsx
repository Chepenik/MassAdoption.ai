"use client";

import { Poppins } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 mr-6">
          <Image fill alt="Logo" src="/massadoption.png" />
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-white text-black px-4 py-2 rounded-lg">
            MassAdoption
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="https://www.meetup.com/massachusetts-bitcoin-meetup/" target="_blank">
              <DropdownMenuLabel className="text-lg font-semibold">
                Meetup
              </DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/MrNakamoto">
              <DropdownMenuItem className="py-3">Mr. Nakamoto</DropdownMenuItem>
            </Link>
            <Link href="/videos">
              <DropdownMenuItem className="py-3">Videos</DropdownMenuItem>
            </Link>
            <Link href="/team">
              <DropdownMenuItem className="py-3">Team</DropdownMenuItem>
            </Link>
            <Link href="/merch">
              <DropdownMenuItem className="py-3">Merch</DropdownMenuItem>
            </Link>
            <Link href="/freedom-festival-2024">
              <DropdownMenuItem className="py-3">
                Freedom Festival 2024
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}