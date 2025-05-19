"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import TiltedCard from "./Reactbits/TiltedCard/TiltedCard";
import AnimatedContent from "./Reactbits/AnimatedContent/AnimatedContent";

const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={isLargeScreen ? "max-h-screen" : "min-h-screen"}>
      <section
        id="services"
        className="flex items-start pt-10 justify-center bg-[#110E29]"
      >
        <section className="bg-[#110E29] text-white py-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.5}
            >
              <div>
                <h2 className="text-3xl font-bold mb-12">
                  Our <span className="text-[#6D6DFF]">Services</span>
                </h2>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
              {/* <!-- Web Development --> */}
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.5}
              >
                <div>
                  <TiltedCard
                    imageSrc="/phone.png"
                    altText="mobile"
                    captionText="Website service"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="tilted-card-demo-text">
                        <div className="bg-[#0B0920] rounded-xl p-8 shadow-xl hover:shadow-purple-700/50 transition duration-300">
                          <div className="mb-4 flex justify-center">
                            <Image
                              src="/website.png"
                              width={64}
                              height={64}
                              alt="App Dev Icon"
                              className="h-16 w-16 object-cover"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-[#6D6DFF] mb-3">
                            Website Development
                          </h3>
                          <p className="text-sm text-gray-300">
                            Elevate your online presence with our
                            custom-designed websites that blend aesthetics with
                            functionality for an unforgettable user experience.
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              </AnimatedContent>

              {/* <!-- Mobile App Development --> */}
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.5}
              >
                <div>
                  <TiltedCard
                    imageSrc="/phone.png"
                    altText="mobile"
                    captionText="Mobile service"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="tilted-card-demo-text">
                        <div className="bg-[#0B0920] rounded-xl p-8 shadow-xl hover:shadow-purple-700/50 transition duration-300">
                          <div className="mb-4 flex justify-center">
                            <Image
                              src="/phone.png"
                              width={64}
                              height={64}
                              alt="App Dev Icon"
                              className="h-16 w-16 object-cover"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-[#6D6DFF] mb-3">
                            Mobile App Development
                          </h3>
                          <p className="text-sm text-gray-300">
                            Harness the power of mobile with our intuitive app
                            solutions, crafted to engage users and drive
                            business growth in the palm of their hands.
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              </AnimatedContent>

              {/* <!-- Software Maintenance --> */}

              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.5}
              >
                <div>
                  <TiltedCard
                    imageSrc="/phone.png"
                    altText="mobile"
                    captionText="Maintenance service"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="tilted-card-demo-text">
                        <div className="bg-[#0B0920] rounded-xl p-8 shadow-xl hover:shadow-purple-700/50 transition duration-300">
                          <div className="mb-4 flex justify-center">
                            <Image
                              src="/maintenance.png"
                              width={64}
                              height={64}
                              alt="App Dev Icon"
                              className="h-16 w-16 object-cover"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-[#6D6DFF] mb-3">
                            Software Maintenance
                          </h3>
                          <p className="text-sm text-gray-300">
                            Ensure the longevity of your digital assets with our
                            proactive maintenance services, keeping your web and
                            mobile platforms optimized.
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
