"use client";

import { useState } from "react";
import Image from "next/image";

const cards = [
  // copy not visible
  {
    id: 1,
    logo: "/openai-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
  // copy not visible
  {
    id: 2,
    logo: "/anthropic-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
  {
    id: 3,
    logo: "/grok-white.svg",
    name: "Grok 3 Mini Beta",
    contextWindow: "131k",
  },
  {
    id: 4,
    logo: "/openai-white.svg",
    name: "GPT 4.5 Preview",
    contextWindow: "128k",
  },
  {
    id: 5,
    logo: "/anthropic-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
  // copy not visible
  {
    id: 6,
    logo: "/grok-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
  // copy not visible
  {
    id: 7,
    logo: "/openai-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
  // copy not visible
  {
    id: 8,
    logo: "/anthropic-white.svg",
    name: "Grok 3",
    contextWindow: "128k",
  },
];

const CARD_HEIGHT = 70; // fallback px

function HoverTranslateTwo() {
  const [active, setActive] = useState(2); // Start with the middle card

  // on hover, move to next card (if possible)
  const handleMouseEnter = () => {
    if (active < cards.length - 1) setActive(active + 1);
  };

  // on leave, return to previous card
  const handleMouseLeave = () => {
    if (active > 0) setActive(active - 1);
  };

  // Use responsive container height via CSS; compute translate in rems based on CARD_HEIGHT
  const translateY = `calc(50% - ${active * (CARD_HEIGHT / 16)}rem - 2rem)`; // fallback approximation

  return (
    <>
      <div
        className="relative overflow-hidden flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-col gap-4 transition-transform duration-300 ease-in-out w-full -mt-10 overflow-visible items-center justify-center"
          style={{
            transform: `translateY(${translateY})`,
            backfaceVisibility: "hidden",
          }}
        >
          {cards.map((card, idx) => {
            const isCenter = idx === active;
            return (
              <div
                key={card.id}
                className={`
                  h-16 max-w-[85%] w-[275px] sm:w-[320px] md:w-[380px] lg:w-[420px] flex items-center justify-between gap-4 rounded-xl pl-3.5 pr-4 text-sm 
                  transition duration-300 ease-in-out 
                  ${isCenter ? 'scale-100 z-50' : 'scale-95 blur-[2px] opacity-60'}
                `}
                style={{
                  background:
                    "radial-gradient(65.62% 65.62% at 50% 50%, \
                  rgba(0, 0, 255, 0.32) 0%, \
                  rgba(0, 0, 255, 0) 100%), \
                  linear-gradient( \
                  rgba(0, 128, 255, 0.12) 0%, \
                  rgba(255,255,255,0.10) 100%), \
                  rgba(0, 0, 255, 0.56)",

                  boxShadow:
                    "rgba(0, 128, 255, 0.06) 0px -12px 16px 0px inset, \
                         rgba(0, 128, 255, 0.16) 0px 4px 16px 0px inset, \
                         rgba(0, 128, 255, 0.12) 0px 0.75px 0.25px 0px inset, \
                         rgba(0, 128, 255, 0.32) 0px 0.25px 0.25px 0px inset, \
                          rgba(0, 0, 255, 0.06) 0px 2px 16px 0px, \
                          rgba(0, 0, 255, 0.06) 0px 23px 14px 0px, \
                          rgba(0, 0, 255, 0.19) 0px 10px 10px 0px, \
                          rgba(0, 0, 255, 0.26) 0px 3px 6px 0px, \
                          rgba(0, 0, 255, 0.40) 0px 0px 0px 0.75px",
                }}
              >
                <div className="w-full">
                  <div className="flex items-center gap-3 w-full justify-between pr-2 pl-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={card.logo}
                        alt={card.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-white font-medium -ml-0.5">
                        {card.name}
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {card.contextWindow} Context
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* blurred gradient overlay at the top */}
        <div
          className="pointer-events-none absolute -top-12 left-0 w-full pt-[100px] pb-[80px] bg-gradient-to-b from-white to-transparent z-20"
          // done to get rid of random white line
          style={{ filter: "blur(4px)" }}
        />
      </div>
    </>
  );
}

export default HoverTranslateTwo;
