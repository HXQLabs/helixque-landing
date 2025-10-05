"use client";

import React, { RefObject, useEffect, useState } from "react";

interface Props {
  scrollContainerRef?: RefObject<HTMLElement>;
  className?: string;
  threshold?: number;
}

export default function ScrollToTopButton({
  className,
  threshold = 50, 
}: Props) {
  const [visible, setVisible] = useState(false);

  const checkScroll = React.useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollTop > threshold);
  }, [threshold]);

  useEffect(() => {
    // Initial check
    checkScroll();

    // Add scroll event listener
    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  const handleClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      title="Back to top"
      onClick={handleClick}
      type="button"
      className={[
        "fixed right-4 bottom-6 z-50 p-3 sm:p-2.5 md:p-3 rounded-full cursor-pointer",
        "bg-white/95 dark:bg-black text-gray-700 dark:text-white",
        "backdrop-blur-sm",
        "motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out",
        "hover:scale-105 hover:-translate-y-0.5 active:scale-95",
        "hover:bg-white dark:hover:bg-gray-900",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-black dark:focus:ring-gray-600",
        "border border-gray-300 dark:border-gray-800",
        "flex items-center justify-center",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5"
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
