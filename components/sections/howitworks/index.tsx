"use client";

import React from "react";
import Link from "next/link";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Create your profile",
      description:
        "Sign in and set up a lightweight profile so Helixque can find the right people for you.",
      badge: "Step 1",
    },
    {
      title: "Set preferences",
      description:
        "Choose your goals (learn, mentor, collaborate), skills, industry, and language.",
      badge: "Step 2",
    },
    {
      title: "Get matched in seconds",
      description:
        "Our matching engine pairs you with peers who fit your criteria and availability.",
      badge: "Step 3",
    },
    {
      title: "Chat or jump on a call",
      description:
        "Start with text, switch to video when ready. Keep it anonymous or share details later.",
      badge: "Step 4",
    },
  ];

  return (
    <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start px-4 py-16 md:py-28 text-center">
      <div className="flex flex-col items-center text-center">
        <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
          How Helixque Works
        </h2>
        <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
          Meet the right people without the awkwardness. Simple setup, instant matching, real conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-10 md:mt-14 w-full">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 sm:p-6 text-left shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
                {s.badge}
              </span>
              <span className="text-2xl font-semibold text-neutral-300 dark:text-neutral-700">
                0{(i + 1).toString()}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1.5">
              {s.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="https://helixque.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="from-primary/90 to-primary text-primary-foreground flex h-10 items-center rounded-3xl bg-linear-to-t px-6 text-sm font-medium shadow-[inset_0_1px_0_0_#FFFFFF20] transition-colors"
          aria-label="Get started with Helixque"
        >
          Start free
        </Link>
        <Link
          href="https://github.com/HXQLabs/helixque"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground group flex items-center gap-1 text-sm font-medium"
          aria-label="Star Helixque on GitHub"
        >
          Star on GitHub
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1.5"
              role="img"
              aria-label="Arrow pointing right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};
