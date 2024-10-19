import { Events } from '@/components/Events'
import { SparklesCore } from "@/components/ui/sparkles";



export default function page() {
  return (
    <>
      <div className="relative">
        {/* Adjust the SparklesCore position */}
        <div className="w-full h-full absolute top-0 left-0 -z-10">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            speed = {3.2}
            particleDensity={100}
            className="w-full h-full "
              particleColor= {"#ffc300"}
          />
        </div>
        <Events/>
    </div>
    </>
  )
}
