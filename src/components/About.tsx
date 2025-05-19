"use client";

// pages/index.jsx
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TrueFocus from "./Reactbits/TrueFocus/TrueFocus";
import AnimatedContent from "./Reactbits/AnimatedContent/AnimatedContent";
import { BadgeCheck } from "lucide-react";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
      >
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center bg-[#131022] px-6 md:px-12 py-20 space-y-20"
        >
          {/* Atas: Gambar dan Teks */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12">
            {/* Kiri: Gambar */}
            <div className="w-full md:w-1/2">
              <Image
                src="/background3.jpeg"
                alt="Presentation"
                width={440}
                height={286}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>

            {/* Kanan: Konten teks */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why <span className="text-indigo-400">Choose Us?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                With a proven track record in crafting exceptional apps and
                websites, we bring innovation and expertise to every project.
                From sleek mobile applications to dynamic websites, our
                portfolio demonstrates our ability to turn ideas into reality.
              </p>

              <ul className="space-y-3 text-sm md:text-base text-white">
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">
                    <BadgeCheck color="#4662d2" />
                  </span>{" "}
                  Innovative Solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">
                    <BadgeCheck color="#4662d2" />
                  </span>{" "}
                  Reliability and Speed
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 text-xl">
                    <BadgeCheck color="#4662d2" />
                  </span>{" "}
                  Client-Centric Collaboration
                </li>
              </ul>
              <a href="https://wa.link/u8kytq">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold transition">
                  CONTACT US!
                </button>
              </a>
            </div>
          </div>

          {/* Bawah: Stats */}
          <div
            id="stats"
            ref={ref}
            className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <TrueFocus
                sentence=" We are Professional"
                manualMode={false}
                blurAmount={4}
                borderColor="indigo"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mb-12 text-sm md:text-base">
              We personalize how we work to fit your project needs. Our approach
              helps augment innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-5xl">
              {[
                {
                  label: "Successful Projects",
                  end: 50,
                },
                {
                  label: "Happy Clients",
                  end: 50,
                },
                {
                  label: "Team Members",
                  end: 10,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#3A3973] bg-opacity-30 rounded-2xl p-5 text-center shadow-lg"
                >
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {inView ? <CountUp end={item.end} duration={5} /> : 0}+
                  </h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
}
