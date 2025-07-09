import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden wrapper">
        <GridBackgroundDemo />
        <Spotlight />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-32 flex items-center justify-center h-screen">
          <div className=" flex text-center justify-center items-center flex-col">
            <div className="mb-8 flex">
              <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-300">
                <Code2 className="h-4 w-4" />
                <span>Built for Developers</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                Loyalty for Developers
              </span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                The best way to build customer loyalty instead of losing them.
                Integrate reward systems and currency incentives at scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-900 bg-transparent"
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
