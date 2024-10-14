"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto rounded-md w-full h-[40rem] mb-20 overflow-hidden z-30 p-0 m-0">
        <Vortex
          backgroundColor="black"
          rangeSpeed={1.0}
          rangeY={250}
          baseHue={30}
          baseSpeed={0.001}
          className="flex items-center flex-col justify-center px-2 m-0 md:px-10 py-4 w-full h-full"
        >
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={250} 
              height={250} 
              className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain" 
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center font-LogoFont text-primaryColor">
            Praestantia 2k24
          </h2>
          <p className="text-primaryColor text-sm md:text-lg lg:text-2xl max-w-xl mt-6 text-center">
            Some quotes and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo.
          </p>
        </Vortex>
      </div>
    </>
  );
}
