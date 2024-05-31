import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { SparklesCore } from "./ui/Sparkles";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        
        <div> 
        <SparklesCore className="w-[20%] h-[5%] top-12 left-8 md:top-48 mx-auto absolute" background="tranparent" particleColor="#555555"/>
        </div>
        <div className="flex justify-center relative my-20 z-10">
         <div className="max-w-[89vw] mad:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">
          Your local software developer
          </h2>
          <TextGenerateEffect
          className="text-center text-[32px] md:text-5xl lg:text-5xl"
          words="<designer> Developer </designer>"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white tracking-wider">Hi,I&apos;m sakcham, a developer X designer based in India</p>
         <a href="/about"> <MagicButton icon={<FaLocationArrow/>} position="right" title="See My Work"/></a>

         </div>
        </div>

      
    </div>
  );
};

export default Hero;
