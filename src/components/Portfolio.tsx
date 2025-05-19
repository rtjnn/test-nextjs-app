"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PixelTransition from "./Reactbits/PixelTransition/PixelTransition";
import { ZoomIn, Link2 } from "lucide-react";


type PortfolioItem = {
  id: number;
  gambar: string;
  jenis: "web" | "mobile";
  text: string;
};

const data: PortfolioItem[] = [
  {
    id: 1,
    gambar: "/portfolio/adaquran.png",
    jenis: "mobile",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    gambar: "/portfolio/arfaqua.png",
    jenis: "mobile",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    id: 3,
    gambar: "/portfolio/ensiklopedia.png",
    jenis: "web",
    text: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    id: 4,
    gambar: "/portfolio/flashkids.png",
    jenis: "mobile",
    text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: 5,
    gambar: "/portfolio/fluffy.png",
    jenis: "web",
    text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
  },
  {
    id: 6,
    gambar: "/portfolio/forumdiskusi.png",
    jenis: "mobile",
    text: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
  },
  {
    id: 7,
    gambar: "/portfolio/goeat.png",
    jenis: "mobile",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    id: 8,
    gambar: "/portfolio/iscooter.png",
    jenis: "mobile",
    text: "In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis.",
  },
  {
    id: 9,
    gambar: "/portfolio/ksp.png",
    jenis: "mobile",
    text: "Vivamus quis mi. Phasellus a est. Phasellus magna.",
  },
  {
    id: 10,
    gambar: "/portfolio/maka.png",
    jenis: "web",
    text: "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.",
  },
  {
    id: 11,
    gambar: "/portfolio/omahsampah.png",
    jenis: "mobile",
    text: "Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis.",
  },
  {
    id: 12,
    gambar: "/portfolio/price.png",
    jenis: "web",
    text: "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.",
  },
  {
    id: 13,
    gambar: "/portfolio/scorein.png",
    jenis: "mobile",
    text: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
  },
  {
    id: 14,
    gambar: "/portfolio/siraport.png",
    jenis: "web",
    text: "Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.",
  },
  {
    id: 15,
    gambar: "/portfolio/spk.png",
    jenis: "web",
    text: "Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor.",
  },
  {
    id: 16,
    gambar: "/portfolio/startout.png",
    jenis: "mobile",
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  },
  {
    id: 17,
    gambar: "/portfolio/univs.png",
    jenis: "mobile",
    text: "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.jenis === filter);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-start bg-[#131022] py-20 px-6 md:px-20"
    >
      {/* Judul */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        Our <span className="text-[#6D6DFF]">Portfolio</span>
      </h2>

      {/* Filter Button */}
      <div className="mb-8 flex gap-4 justify-center">
        {["all", "web", "mobile"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "all" | "web" | "mobile")}
            className={`px-4 py-2 rounded-full border transition ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

     {/* Grid Gambar dengan animasi */}
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl place-items-center justify-center">
  <AnimatePresence>
    {filteredData.map((item) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <PixelTransition
          firstContent={
            <img
              src={item.gambar}
              alt={`Portfolio ${item.id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 100,
                  fontSize: "1rem",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                {item.text}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  aria-label="Zoom Image"
                  onClick={() => setZoomImage(item.gambar)}
                  className="flex items-center gap-1 px-3 py-1 rounded text-white transition-transform duration-300 ease-in-out hover:scale-150"
                >
                  <ZoomIn size={26} />
                </button>

                <a
                  href={item.gambar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 rounded text-white transition-transform duration-300 ease-in-out hover:scale-150"
                >
                  <Link2 size={26} />
                </a>
              </div>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>

      {/* Modal Zoom Image */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setZoomImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed Portfolio"
              className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
