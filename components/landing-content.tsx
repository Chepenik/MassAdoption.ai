"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jason Lowery",
    title: "Technology & Innovation Officer, U.S Space Force",
    videoSrc: "https://www.youtube.com/embed/fL23a7nqh1M",
  },
  {
    name: "Luke Broyles",
    title: "Bitcoin Filmmaker & Twitter Thread Afficianado",
    videoSrc: "https://www.youtube.com/embed/S2L5wPFDZGM",
  },
  {
    name: "Greg Foss",
    title: "Risk Manager with 30 years in Credit Markets",
    videoSrc: "https://www.youtube.com/embed/L72rDIB62AU",
  },
  {
    name: "B.J Dichter",
    title: "Author of Honking For Freedom & Big Rig Driver",
    videoSrc: "https://www.youtube.com/embed/ARbX1iwxT9Q",
  },
  // Add other testimonial objects here
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Our Speaker Series</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            {/* Replace the CardContent with the iframe */}
            <iframe
              width="100%"
              height="315"
              src={item.videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Card>
        ))}
      </div>
    </div>
  );
};