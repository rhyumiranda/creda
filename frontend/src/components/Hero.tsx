import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
                <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-700/50 rounded-full px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="a"
                x="0px"
                y="0px"
                viewBox="0 0 479.3 481.2"
                xmlSpace="preserve"
                className="w-4 h-4 text-blue-400"
              >
                <path
                  d="M371.2,161h-42.4c-4.9,0-9.6-2.1-12.9-5.8l-17.2-19.4c-2.6-2.9-6.2-4.6-10.1-4.6s-7.5,1.7-10.1,4.6l-14.8,16.7  c-4.8,5.4-11.8,8.6-19,8.6H12.6C6,179.8,1.7,199.7,0,220.4h219.1c3.9,0,7.5-1.6,10.2-4.4l20.4-21.3c2.5-2.7,6.1-4.2,9.7-4.2h0.8  c3.9,0,7.5,1.7,10.1,4.6l17.2,19.4c3.3,3.7,8,5.8,12.9,5.8h178.8c-1.7-20.6-6-40.6-12.6-59.4L371.2,161L371.2,161z"
                  fill="currentColor"
                />
                <path
                  d="M132.6,345.2c3.9,0,7.5-1.6,10.2-4.4l20.4-21.3c2.6-2.7,6.1-4.2,9.8-4.2h0.8c3.9,0,7.6,1.7,10.1,4.5l17.2,19.4  c3.3,3.7,8,5.8,12.9,5.8h242.4c9.1-18.8,15.7-38.9,19.7-60H243.4c-4.9,0-9.6-2.1-12.9-5.8L213.3,260c-2.6-2.9-6.2-4.5-10.1-4.5  s-7.6,1.7-10.1,4.5l-14.8,16.7c-4.8,5.5-11.8,8.6-19.1,8.6H3.3c4,21.1,10.6,41.2,19.7,60L132.6,345.2L132.6,345.2z"
                  fill="currentColor"
                />
                <path
                  d="M304.5,96.1c3.9,0,7.5-1.6,10.2-4.4l20.4-21.3c2.5-2.7,6.1-4.2,9.8-4.2h0.8c3.9,0,7.5,1.7,10.1,4.6L373,90.3  c3.3,3.7,8,5.8,12.9,5.8H432C388.1,37.7,318.3,0,239.7,0S91.2,37.7,47.3,96.1H304.5z"
                  fill="currentColor"
                />
                <path
                  d="M212,404.7h-63c-4.9,0-9.6-2.1-12.9-5.8l-17.2-19.4c-2.6-2.9-6.2-4.5-10.1-4.5s-7.6,1.7-10.1,4.5l-14.8,16.7  c-4.8,5.5-11.8,8.6-19.1,8.6h-1c43.9,47,106.4,76.5,175.9,76.5s131.9-29.5,175.9-76.5L212,404.7L212,404.7z"
                  fill="currentColor"
                />
              </svg>
              <span>Built on Aptos</span>
            </div>
          </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                API-first loyalty software
              </span>
            </h1>

            <div className="max-w-2xl">
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                a Web3 loyalty platform/toolkit built on Aptos, enabling developers to launch on-chain rewards and gamification in minutes.
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div>Free tier • No credit card required</div>
              <div>Enterprise ready</div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
