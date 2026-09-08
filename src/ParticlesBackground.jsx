import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Global flag ensures plugins are only registered once per browser session
let engineInitialized = false;

export default function ParticlesBackground({ isDarkMode }) {
  useEffect(() => {
    let particlesContainer;

    const loadParticles = async () => {
      if (!engineInitialized) {
        await loadSlim(tsParticles);
        engineInitialized = true;
      }

      // Load the configuration into div
      particlesContainer = await tsParticles.load({
        id: "tsparticles",
        options: {
          background: {
            color: {
              value: isDarkMode ? "#1e293b" : "#bfdbfe",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 0.5 },
              },
            },
          },
          particles: {
            color: {
              value: isDarkMode ? "#bfdbfe" : "#1e3a8a",
            },
            links: {
              color: isDarkMode ? "#bfdbfe" : "#1e3a8a",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.7,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
          fullScreen: { enable: true, zIndex: 0 },
        },
      });
    };

    loadParticles();

    // Cleanup function to destroy the old canvas when toggling themes or navigating
    return () => {
      if (particlesContainer) {
        particlesContainer.destroy();
      }
    };
  }, [isDarkMode]);

  return <div id="tsparticles" />;
}