

import React from "react";

import ParticlesBackground from "./ParticlesBackground";
import RotatingText from "./Reactbits/RotatingText/RotatingText";
import LottieAnimate from "./lootie/LottieAnimate";


const Home = () => {
  return (
    <section
  id="home"
  className="min-h-screen pt-[80px] scroll-mt-[80px] relative overflow-hidden px-6 sm:px-10 md:px-20 py-10"
>
  {/* Background Particles */}
  <div className="absolute inset-0 -z-10">
    <ParticlesBackground />
  </div>

  {/* Wrapper Flex untuk Konten Kiri & Kanan */}
  <div className="z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-y-10 md:gap-x-40">
    
    {/* Konten kiri */}
    <div className="max-w-xl space-y-6 text-center md:text-left">
      <h1 className="text-2xl md:text-3xl font-medium text-white">
        We Transform Your Ideas
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold flex flex-wrap items-center justify-center md:justify-start text-white">
        <span>into&nbsp;</span>
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
          <RotatingText
            texts={[
              "Reality",
              "Best Design",
              "Best Experience",
              "Best Performance",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 text-purple-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 60, stiffness: 400 }}
            rotationInterval={2000}
          />
        </span>
      </h2>
      <p className="text-gray-300 text-sm md:text-base">
        We provide a wide range of high-quality IT services and best practices
        solutions to our customers, making their business better.
      </p>
      <a href="https://wa.link/u8kytq">
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
        
        Work With Us!
       
      </button>
       </a>
    </div>

    {/* Gambar kanan */}
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <LottieAnimate />
    </div>
  </div>
</section>


  );
};

export default Home;
