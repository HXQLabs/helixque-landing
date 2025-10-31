"use client";
import React from "react";
import { Safari } from "@/components/magicui/safari";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/kibo-ui/announcement";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowUpRightIcon } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import TextRotate from "@/components/fancy/text/text-rotate";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";

export const HeroSection = () => {
  const words = ["builders", "learners", "mentors"];
  return (
    <section
      aria-label="Hero banner"
      className="bg-background relative z-1 container mx-auto w-full overflow-hidden px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl py-16 sm:py-28">
        <div className="flex justify-center pb-8">
          <Announcement>
            <AnnouncementTag>Now Live</AnnouncementTag>

            <Link href="/changelog" passHref>
              <AnnouncementTitle
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary"
              >
                <p className="flex flex-wrap gap-1 items-center underline-offset-4 hover:underline">
                  Check latest updates
                </p>
                <ArrowUpRightIcon
                  className="shrink-0 text-muted-foreground transition-transform duration-200 hover:translate-x-0.5"
                  size={16}
                />
              </AnnouncementTitle>
            </Link>

            <Link href="/announcements" passHref>
              <AnnouncementTitle
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary"
              >
                <p className="flex flex-wrap gap-1 items-center underline-offset-4 hover:underline">
                  Announcements
                </p>
                <ArrowUpRightIcon
                  className="shrink-0 text-muted-foreground transition-transform duration-200 hover:translate-x-0.5"
                  size={16}
                />
              </AnnouncementTitle>
            </Link>
          </Announcement>
        </div>

        <div className="relative z-1 mx-auto max-w-3xl text-center">
          <h1 className="leading-tighter font-gilroy max-w-2xl mx-auto bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter flex flex-col items-center space-y-2">
            <span>Professional networking for</span>
            
            <LayoutGroup>
              <motion.span
                className="relative translate-x-0 flex gap-2 justify-center flex-wrap items-center"
                layout
              >
                <TextRotate
                  texts={words}
                  mainClassName="text-white dark:text-black px-3 bg-black dark:bg-white overflow-hidden py-1.5 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.span>
            </LayoutGroup>
          </h1>

          <p className="text-gray-600 dark:text-muted-foreground mx-auto mt-6 leading-7 font-normal text-balance sm:w-[660px] sm:text-[18px] md:mt-8">
            Match instantly by <strong>skills</strong>, <strong>industry</strong>, and <strong>language</strong>. Learn, mentor, and collaborate through text or video without the awkwardness.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <div className="flex items-center gap-x-4">
              <Link
                href="https://helixque.netlify.app"
                target="_blank"
                aria-label="Get started with Helixque"
                className="from-primary/90 to-primary durration-300 text-primary-foreground flex h-10 items-center rounded-3xl bg-linear-to-t px-6 text-sm font-medium shadow-[inset_0_1px_0_0_#FFFFFF20] transition-colors"
              >
                Get Started for Free
              </Link>
              <Link
                href="https://github.com/orgs/HXQLabs/repositories"
                className="text-foreground group/hero flex items-center gap-1 text-sm leading-none font-medium"
                aria-label="Learn more about professional networking"
              >
                Star on GitHub{' '}
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
                    className="mt-0.5 transition-transform duration-300 group-hover/hero:translate-x-1.5"
                    role="img"
                    aria-label="Arrow pointing right"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </Link>
            </div>
           
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            Free to start • No credit card required
          </p>
        </div>
        <div
          className="after:border-primary/20 after:bg-secondary pointer-events-none absolute top-[340px] h-[400px] w-full max-w-5xl overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-y-0 before:-right-[200%] before:-left-[200%] before:h-[200%] before:bg-[radial-gradient(circle_at_bottom_center,var(--primary),transparent_90%)] before:opacity-25 after:absolute after:top-1/5 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t sm:top-[300px] sm:after:top-1/2"
          aria-hidden="true"
        >
          <Particles 
            variant="default" 
            interactive={true}
            style={{
              color: "rgb(156 163 175)" // gray-400 - visible in both light and dark modes
            }}
          />
        </div>
        <figure className="hidden sm:block relative max-w-6xl mx-auto p-1 sm:p-3 md:p-4 lg:p-6 backdrop-blur-lg dark:bg-white/5 bg-black/5 rounded-lg transition-colors duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%)] before:[background-size:8px_8px] before:rounded-lg before:pointer-events-none mt-12 sm:mt-14 md:mt-16 w-full border-0 shadow-xs lg:mt-28">
          <BorderBeam size={120} duration={15} delay={0} colorFrom="#3b82f6" colorTo="#8b5cf6" borderWidth={1.5} className="sm:block md:[--size:150px] lg:[--size:200px] md:[--border-width:2px]" />
          <div className="relative z-10 rounded-lg overflow-hidden border dark:border-neutral-800 border-neutral-200">
            {/* Safari mockup with image */}
            <Safari
              url="helixque.netlify.app"
              imageSrc="./mockup.png"
              className="w-full h-auto relative rounded-lg scale-[0.85] sm:scale-95 md:scale-100"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};