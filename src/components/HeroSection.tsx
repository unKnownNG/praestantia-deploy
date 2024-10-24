"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Image from "next/image";


const words = [
  
  {
    text: "Praestantia",
    className: "text-primaryColor text-2xl md:text-3xl lg:text-5xl dark:text-primaryColor customfont",
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto rounded-md w-full h-[40rem] mb-20 overflow-hidden z-30 p-0 m-0">
        <Vortex
          backgroundColor="black"
          rangeSpeed={1.0}
          rangeY={250}
          baseHue={20}
          baseSpeed={0.001}
          className="flex items-center flex-col justify-center px-2 m-0 md:px-10 py-4 w-full h-full"
        >
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={250} 
              height={250} 
              className="w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 object-contain animate-float" 
            />
          </div>

          <TypewriterEffectSmooth words={words} />
          
          <p className="text-primaryColor text - bold text-sm md:text-base lg:text-lg max-w-xl mt-6 text-center subheading">
            DEPARTMENT OF <br />
            ELECTRONICS AND COMMUNICATION ENGINEERING
          </p>
        </Vortex>
      </div>
    </>
  );
}
