import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiInstagram,
  FiFacebook,
  FiMusic,
  FiLinkedin,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import GlassIcons from "./Reactbits/GlassIcons/GlassIcons";

const socialItems = [
  {
    icon: <FiInstagram />,
    color: "instagram",
    label: "Instagram",
    link: "https://www.instagram.com/khifrandev/",
  },
  {
    icon: <FiFacebook />,
    color: "facebook",
    label: "Facebook",
    link: "https://www.facebook.com/khifrandev/",
  },
  {
    icon: <FiMusic />,
    color: "tiktok",
    label: "Tiktok",
    link: "https://www.tiktok.com/@khifrandev",
  },
  {
    icon: <FiLinkedin />,
    color: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/102258508/admin/feed/posts/?feedType=following",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-h-screen flex flex-col items-start justify-start"
    >
      {/* CTA Section */}
      <section className="bg-[#1a1630] text-white text-center py-20 px-4 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 mb-4 text-sm">Ready to get started?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Launch Your Project <span className="text-[#5D60EF]">With Us</span>
          </h2>
          
          <a href="https://wa.link/u8kytq">
            <button className="bg-[#5D60EF] hover:bg-[#4a4dd4] text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-sm sm:text-base">
              Work With Us!
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131022] text-white px-4 sm:px-6 md:px-16 py-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h3 className="flex items-center text-2xl font-bold mb-2 space-x-2">
              <Image
                src="/logo_transparent.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full object-cover bg-black"
              />
              <span>Khifrandev</span>
            </h3>
            <p className="text-gray-400 mb-4">
              We provide the best solutions and services to solve your
              technology and business problems.
            </p>
            <p className="text-sm text-gray-500">
              Copyright © 2023 khifrandev.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Jl. Cihanjuang No.41, Cimahi, West Java, Indonesia
            </p>

            <p className="mt-2 flex items-center gap-2 text-gray-400">
              <FiMail />
              <a
                href="mailto:info@khifrandev.com"
                className="hover:underline break-words"
              >
                info@khifrandev.com
              </a>
            </p>

            <p className="mt-2 flex items-center gap-2 text-gray-400">
              <FiPhoneCall />
              <a href="https://wa.link/u8kytq" className="hover:underline">
                +62 89 533 9444 314
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Social Media</h4>
            <div className="flex justify-center md:justify-start">
              <GlassIcons items={socialItems} className="max-w-full" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
