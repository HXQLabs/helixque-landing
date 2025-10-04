"use client";

import React, { RefObject, useEffect, useState } from "react";

interface Props {
  scrollContainerRef?: RefObject<HTMLElement>;
  className?: string;
  threshold?: number;
}

export default function ScrollToTopButton({
  scrollContainerRef,
  className,
  threshold = 50, 
}: Props) {
  const [visible, setVisible] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef?.current || window;
    const scrollTop = container instanceof Window
      ? window.scrollY || document.documentElement.scrollTop
      : container.scrollTop;

    setVisible(scrollTop > threshold);
  };

  const handleScroll = () => checkScroll();

  useEffect(() => {
    const container = scrollContainerRef?.current || window;

    container.addEventListener("scroll", handleScroll, { passive: true });
    checkScroll(); 

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  const handleClick = () => {
    const container = scrollContainerRef?.current;
    if (container?.scrollTo) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={handleClick}
      type="button"
      className={[
        "fixed right-4 bottom-6 z-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-full shadow-lg",
        "bg-white/90 dark:bg-slate-900/85 text-slate-900 dark:text-white",
        "backdrop-blur-sm",
        "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
        "hover:scale-105 hover:-translate-y-0.5 active:scale-95",
        "hover:shadow-2xl",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white dark:focus:ring-offset-slate-900",
        "border border-transparent dark:border-slate-700/40",
        "flex items-center justify-center",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        aria-hidden
        focusable="false"
      >
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
