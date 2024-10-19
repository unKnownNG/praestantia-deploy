import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { SparklesCore } from "../components/ui/sparkles";

import dynamic from "next/dynamic";

const CountDown = dynamic(() => import("../components/CountDown"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative">
        {/* Adjust the SparklesCore position */}
        <div className="w-full h-full absolute top-0 left-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full b"
              particleColor= {"#bd6e00"}
          />
        </div>

        <CountDown launchDate="2024-11-06T09:10:00" />
        <About />
      </div>
    </>
  );
}
