"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Particles from "react-tsparticles"; // ✨ FIX: Removed the incorrect named import here
import { loadSlim } from "tsparticles-slim";
import { type Container, type ISourceOptions, initParticlesEngine } from "@tsparticles/engine"; // ✨ FIX: This is the ONLY place to import the engine
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function FestiveBackground() {
  const [init, setInit] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // This useEffect should only run once on mount to initialize the engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Optional: console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: prefersReducedMotion ? 0 : 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#ff7f50", "#ff6347", "#ffa500", "#ffffff"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 4 },
        },
        move: {
          enable: !prefersReducedMotion, // Disable movement if reduced motion is on
          direction: "bottom",
          speed: 2,
          straight: true,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: !prefersReducedMotion,
            mode: "trail",
          },
        },
        modes: {
          trail: {
            quantity: 3,
            delay: 0.1,
            particles: {
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      detectRetina: true,
    }),
    [prefersReducedMotion]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-10"
      />
    );
  }

  return null;
}