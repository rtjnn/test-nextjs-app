"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, MoveDirection } from "@tsparticles/engine";

const ParticlesBackground = ({ id = "tsparticles" }: { id?: string }) => {
  const [engineReady, setEngineReady] = useState(false);

  // Inisialisasi engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  // Callback saat particles dimuat
  const particlesLoaded = async (container: any) => {
    console.log("Particles loaded:", container);
  };

  // Konfigurasi partikel
  const options: ISourceOptions = {
    background: {
      color: {
        value: "#131022",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        grab: {
          distance: 240,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      links: {
        color: "#FFFFFF",
        distance: 300,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as MoveDirection,
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 10,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 1300, // ✅ Ganti dari 'area'
          height: 1300, // ✅ Opsional, tergantung efek yang diinginkan
        },
        value: 100,
      },

      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return engineReady ? <Particles id={id} options={options} /> : null;
};

export default ParticlesBackground;
