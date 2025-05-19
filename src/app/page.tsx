"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Page() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }

    function handleScroll() {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        // Hitung jarak top section about relatif ke viewport
        const rect = aboutSection.getBoundingClientRect();

        // Kalau sudah scroll melewati section about (bagian atasnya di atas viewport)
        setShowUpButton(rect.top < 0);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi scroll ke atas saat tombol ditekan
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <Header />
      </nav>

      <main>
        <section id="home" className="min-h-screen scroll-mt-20 pt-20">
          <Home />
        </section>

        <section id="about" className="min-h-screen scroll-mt-20">
          <About />
        </section>

        <section
          id="services"
          className={`${
            isLargeScreen ? "max-h-screen" : "min-h-screen"
          } scroll-mt-20`}
        >
          <Services />
        </section>

        <section id="portfolio" className="min-h-screen scroll-mt-20">
          <Portfolio />
        </section>

        <section id="contact" className="max-h-screen scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Tombol UP di kiri bawah */}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6  bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 transition"
          aria-label="Scroll to top"
          title="Scroll ke atas"
        >
          ↑
        </button>
      )}
    </>
  );
}
