"use client";
<<<<<<< HEAD
import { Button } from "@/components/ui/buttons/buttons";
import ShimmerButton from "@/components/ui/buttons/shimmer-button";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import HomeHeader from "@/components/common/header2";
import NewItemsLoading from "@/components/utils/new-items-loading";
import TextRotate from "@/components/fancy/text/text-rotate";
import Image from "next/image";

const index = () => {
  const words = ["Better", "Perfect", "Modern", "Unique"];
  return (
    <div className="relative">
      <HomeHeader />
      <section className="h-auto min-h-screen overflow-hidden relative pb-20 dark:bg-black bg-white transition-colors duration-300 -mt-20 pt-20">
        <div className="absolute inset-0 -z-0 h-full w-full dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 top-0 left-0 h-full w-full items-center px-5 py-24 bg-gradient-to-t dark:from-black from-white from-0% to-transparent to-60%"></div>

        <div className="pointer-events-none absolute inset-0 flex w-screen justify-end [mask-image:radial-gradient(transparent_5%,white)] opacity-80 dark:opacity-60 transition-opacity duration-300">
          <svg
            width="1512"
            height="1714"
            viewBox="0 0 1512 1714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute left-0 top-0 h-auto w-full lg:w-1/2"
          >
            <g clipPath="url(#clip0_143_13)">
              <g filter="url(#filter0_f_143_13)">
                <path
                  d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                  fill="currentColor"
                  fillOpacity="0.15"
                  className="dark:text-white text-gray-800"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_143_13"
                x="-595.645"
                y="38"
                width="1902.26"
                height="1213.13"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="64"
                  result="effect1_foregroundBlur_143_13"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_143_13">
                <rect width="1512" height="1714" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <article className="grid 2xl:pt-32 xl:pt-28 lg:pt-24 md:pt-20 pt-16 pb-8 sm:pb-12 lg:pb-16 relative dark:text-white text-gray-900 z-[2] px-4 sm:px-6 lg:px-0 transition-colors duration-300">
          <NewItemsLoading />
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-semibold tracking-tight dark:text-white text-gray-900">
            <span className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl dark:text-gray-100 text-gray-800">Don&apos;t Just Ship Website,</span>{" "}
            <LayoutGroup>
              <motion.span className="relative translate-x-0 flex gap-4 justify-center dark:text-white text-gray-900 flex-wrap mt-2" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Ship{" "}
                </motion.span>
                <TextRotate
                  texts={words}
                  mainClassName="text-white dark:text-black px-3 sm:px-3 md:px-4 bg-black dark:bg-white overflow-hidden py-1 sm:py-1.5 md:py-2.5 justify-center rounded-lg"
=======
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
              <AnnouncementTitle className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                <p className="group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center">Check out our latest updates</p>
                <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
              </AnnouncementTitle>
            </Link>
          </Announcement>

        </div>
        <div className="relative z-1 mx-auto max-w-3xl text-center">
          <h1 className="leading-tighter font-gilroy max-w-2xl mx-auto bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
            Professional networking for
            <br/>
          
            <LayoutGroup>
              <motion.span className="relative translate-x-0 flex gap-2 justify-center flex-wrap items-center" layout>
                <TextRotate
                  texts={words}
                  mainClassName="text-white dark:text-black px-3 bg-black dark:bg-white overflow-hidden py-1.5 justify-center rounded-lg"
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
<<<<<<< HEAD
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  {" "}Ones.
                </motion.span>
              </motion.span>
            </LayoutGroup>
          </h1>
          <p className="mx-auto lg:w-[700px] md:w-[85%] w-[95%] text-center lg:text-lg md:text-base sm:text-sm text-sm mt-4 sm:mt-5 mb-6 sm:mb-8 dark:text-gray-300 text-gray-600 transition-colors duration-300">
            50+ Stunning Sections and Templates Powered by{" "}
            <strong>React</strong>, <strong>TypeScript</strong>,
            <strong> Tailwind CSS</strong>, and <strong> Tailwind CSS</strong>.
            Save countless hours⏳, craft eye-catching landing pages, and turn
            visitors into loyal customers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center mb-8 sm:mb-12 lg:mb-16">
            <ShimmerButton
              borderRadius={"100px"}
              className={cn(
                "flex items-center gap-2 w-full sm:w-fit rounded-full text-white border px-4 sm:px-4 py-3 sm:py-2 transition-all duration-300",
              )}
              background={"#334cec"}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 sm:text-base lg:text-lg">
                Get Unlimited Access
              </span>
            </ShimmerButton>

            <Button className="rounded-full px-4 h-12 w-full sm:w-auto dark:bg-gray-800 dark:text-white dark:border-gray-700 bg-white text-gray-900 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              Browse Templates
              <ChevronsRight className="dark:text-white text-gray-900" />
            </Button>
          </div>
          
          {/* Dashboard Mockup Image */}
          <figure className="relative max-w-6xl mx-auto p-3 sm:p-4 lg:p-6 backdrop-blur-lg dark:bg-white/5 bg-black/5 rounded-lg transition-colors duration-300">
            <div className="relative z-10 rounded-lg overflow-hidden border dark:border-neutral-800 border-neutral-200 shadow-2xl dark:shadow-neutral-900/50 shadow-gray-500/20">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg"
                width={2340}
                height={1560}
                priority
              />
              {/* Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t dark:from-black/20 from-white/20 to-transparent rounded-lg"></div>
            </div>
          </figure>
          {/* <p className="text-center py-2">65% off during pre-sale.</p> */}
        </article>
      </section>
    </div>
  );
};

export default index;
=======
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
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
