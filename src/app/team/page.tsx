"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import Team from "@/components/Team";

export default function page() {
  return (
    <>
      <div className="relative">
        <div className="w-full h-full absolute top-0 left-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            particleDensity={200}
            className="w-full h-full -z-50"
            particleColor={"#ffc300"}
          />
        </div>
        <Team />
      </div>
    </>
  );
}
