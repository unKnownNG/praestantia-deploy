"use client"
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import { SparklesCore } from "@/components/ui/sparkles";
import Head from "next/head";
import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("../components/CountDown"), {
  ssr: false,
});

const images = [
  { src: "/img1.jpg", alt: "Image 1" },
  { src: "/img2.jpg", alt: "Image 2" },
  { src: "/img3.jpg", alt: "Image 3" }
];


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <div className="relative">
        {/* Adjust the SparklesCore position */}
        <div className="w-full h-full absolute top-0 left-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            particleDensity={200}
            className="w-full h-full "
              particleColor= {"#ffc300"}
          />
        </div>

        <CountDown launchDate="2024-11-06T09:10:00" />
        <About />
        <div className="container my-9 mx-auto py-10">
      <ImageSlider images={images} interval={5000} /> {/* Auto-slide every 5 seconds */}
    </div>
      </div>
    </>
  );
}
