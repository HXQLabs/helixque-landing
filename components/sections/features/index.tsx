<<<<<<< HEAD
"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowRight, PencilLine, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useRef, forwardRef } from "react";
import Pill from "@/components/ui/pill";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

// User components representing different nations
const UserIcons = {
  usa: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
      <span className="text-white text-sm font-semibold">🇺🇸</span>
    </div>
  ),
  uk: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
      <span className="text-white text-sm font-semibold">🇬🇧</span>
    </div>
  ),
  japan: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
      <span className="text-white text-sm font-semibold">🇯🇵</span>
    </div>
  ),
  germany: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
      <span className="text-white text-sm font-semibold">🇩🇪</span>
    </div>
  ),
  india: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
      <span className="text-white text-sm font-semibold">🇮🇳</span>
    </div>
  ),
  brazil: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full">
      <span className="text-white text-sm font-semibold">🇧🇷</span>
    </div>
  ),
  canada: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-red-400 rounded-full">
      <span className="text-white text-sm font-semibold">🇨🇦</span>
    </div>
  ),
  australia: () => (
    <div className="flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full">
      <span className="text-white text-sm font-semibold">🇦🇺</span>
    </div>
  ),
};

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white dark:bg-neutral-800 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
};

const Feature1 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Chat message variants
  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const colorClasses = {
    green: "before:bg-green-500 shadow-green-500/20",
    orange: "before:bg-orange-500 shadow-orange-500/20",
    blue: "before:bg-blue-500 shadow-blue-500/20",
  };

  return (
    <div className="w-full min-h-screen relative bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto p-4 relative z-10" ref={featuresRef}>
        <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
          {/* Add the pill at the top */}
          <div className="flex justify-center mb-6">
            <Pill variant="primary">
              Features
            </Pill>
          </div>
          
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="md:text-5xl sm:text-4xl text-3xl font-medium text-black dark:text-white"
          >
            Seamlessly Integrated, <br />
            Powerful Features
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
          >
            Discover the tools that elevate your experience—AI-powered insights,
            real-time user states, flexible memberships, instant chat, and
            seamless remote connectivity.
          </TimelineContent>
        </article>
        <div className="grid grid-cols-12 gap-4">
        {/* Global User Network */}
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative w-full h-[350px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            {/* Center Logo */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10">
              <Globe className="w-10 h-10 text-white" />
            </div>
            
            {/* Outer orbit */}
            <OrbitingCircles iconSize={50} radius={140} duration={20}>
              <UserIcons.usa />
              <UserIcons.uk />
              <UserIcons.japan />
              <UserIcons.germany />
              <UserIcons.india />
            </OrbitingCircles>
            
            {/* Inner orbit */}
            <OrbitingCircles iconSize={45} radius={100} reverse speed={1.5} duration={15}>
              <UserIcons.brazil />
              <UserIcons.canada />
              <UserIcons.australia />
            </OrbitingCircles>
          </div>

          <article className="absolute right-0 bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent p-6 pt-[100px] z-10">
            <h3 className="px-1 pt-1 text-black dark:text-white text-2xl font-medium">
              Global User Network
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 dark:text-gray-400 text-sm w-full">
              Connect with users from around the world. Our platform brings together diverse communities in a seamless experience.
            </p>
          </article>
        </TimelineContent>

        {/* Usage Stats */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-3 sm:col-span-6 col-span-12 border flex flex-col justify-between rounded-lg p-4 relative border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        >
          <div
            className="absolute inset-0 z-0 rounded-lg"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, #6366f1 100%)",
            }}
          />
          <motion.div
            className="flex -space-x-3 relative z-10"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {[
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
              "https://images.unsplash.com/photo-1617171594279-3aa1f300a0f2?q=80&w=200",
              "https://images.unsplash.com/photo-1659228135452-c4c7b5118047?q=80&w=200",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                width={24}
                height={24}
                className="rounded-xl border-4 border-white dark:border-neutral-800 h-14 w-14 object-cover"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 2.0 + i * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="relative z-10"
          >
            <motion.h1
              className="text-4xl font-semibold sm:pt-0 pt-20 text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.8, duration: 0.3, type: "spring" }}
            >
              10M+
            </motion.h1>
            <p className="text-sm text-gray-200 dark:text-gray-300">
              Used by millions of teams and professionals
            </p>
          </motion.div>
        </TimelineContent>

        {/* Memberships */}
        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-4 sm:col-span-6 col-span-12 border rounded-lg p-4 group border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        >
          <motion.h1
            className="text-4xl font-semibold text-black dark:text-white"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            Memberships
          </motion.h1>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Generate revenue by creating memberships
          </motion.p>
          <div className="space-y-2 mt-6">
            {[
              {
                title: "Monthly",
                desc: "$19 per month, unlimited",
                color: "green",
                rotation: 0,
              },
              {
                title: "Trial",
                desc: "Free for 30 days",
                color: "orange",
                rotation: 3,
              },
              {
                title: "Yearly",
                desc: "$100 per year, unlimited",
                color: "blue",
                rotation: -1,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex gap-2 justify-between items-center bg-neutral-50 dark:bg-neutral-800 p-2 rounded-xl border border-neutral-200 dark:border-neutral-600 shadow-lg pl-7 relative before:content-[''] before:absolute before:left-2.5 before:rounded-md before:top-1.5 before:w-1.5 before:h-[80%] ${colorClasses[item.color as keyof typeof colorClasses]} group-hover:rotate-0 transition-all`}
                style={{
                  rotate: `${item.rotation}deg`,
                  boxShadow: `0 10px 15px -3px rgb(${item.color === "green" ? "34 197 94" : item.color === "orange" ? "249 115 22" : "59 130 246"} / 0.1)`,
                }}
                initial={{ x: -30, opacity: 0, rotate: item.rotation + 10 }}
                animate={{ x: 0, opacity: 1, rotate: item.rotation }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ rotate: 0 }}
              >
                <div>
                  <h3 className="font-semibold text-black dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
                <ArrowRight className="text-black dark:text-white" />
              </motion.div>
            ))}
          </div>
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-7 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        >
          <article className="w-full bg-gradient-to-t font-helvetica from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent">
            <h3 className="px-1 pt-1 text-black dark:text-white text-2xl font-medium">
              Remote Connectivity
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 dark:text-gray-400 text-sm w-full">
              Break free from traditional boundaries. Connect multiple platforms and services seamlessly through our unified network.
            </p>
          </article>
          
          <div
            className="relative flex h-[300px] w-full items-center justify-center overflow-hidden"
            ref={containerRef}
          >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
              <div className="flex flex-col justify-center gap-2">
                <Circle ref={div1Ref}>
                  <Icons.googleDrive />
                </Circle>
                <Circle ref={div2Ref}>
                  <Icons.notion />
                </Circle>
                <Circle ref={div3Ref}>
                  <Icons.whatsapp />
                </Circle>
                <Circle ref={div4Ref}>
                  <Icons.messenger />
                </Circle>
                <Circle ref={div5Ref}>
                  <Icons.googleDrive />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div6Ref} className="size-16">
                  <Icons.openai />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div7Ref}>
                  <Icons.user />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
            />
          </div>
        </TimelineContent>

        {/* Real Time Chat */}
        <TimelineContent
          as="div"
          animationNum={4}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="lg:col-span-5 sm:col-span-6 col-span-12 relative border p-4 rounded-xl overflow-hidden border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
        >
          <div className="flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg">
            {/* Messages Area */}
            <div className="flex-1 space-y-4 p-4 overflow-hidden">
              {/* Agent/Other person's message */}
              <motion.div
                className="mr-auto relative max-w-[80%] rounded-lg bg-gray-100 dark:bg-neutral-700 p-3 text-gray-800 dark:text-gray-200"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 3.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                Hey! I see that your last transaction was a dining purchase, which qualifies for 5x
                points, but only for Platinum Status Tier members. You are currently in the{" "}
                <span className="font-semibold text-blue-500 border-b border-dashed border-blue-500">
                  Gold Status Tier
                </span>
                , which means you currently earn 3x points on dining transactions.
                <motion.button
                  className="absolute -bottom-2 right-0 flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 4.6, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PencilLine className="h-3 w-3" />
                  Adjust tone
                </motion.button>
              </motion.div>

              {/* Our message (user's response) */}
              <motion.div
                className="ml-auto relative max-w-[80%] rounded-lg bg-blue-500 p-3 text-white"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 3.8,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                That&apos;s great to know! How can I upgrade to the Platinum Status Tier to get those 5x points on dining?
              </motion.div>
            </div>

            {/* Chat Input Area */}
            <motion.div
              className="flex items-center gap-2 border-t border-gray-200 dark:border-neutral-600 p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4.8, duration: 0.5 }}
            >
              <motion.input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                initial={{ width: "60%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 5.0, duration: 0.6 }}
              />
              <motion.button
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 5.2, duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          <article className="absolute right-0 top-0 left-0 w-full bg-gradient-to-b from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent p-6 pb-[100px] z-10">
            <h3 className="px-1 pt-1 text-black dark:text-white text-2xl font-medium">
              Real Time Chat
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 dark:text-gray-400 text-sm w-full">
              This component displays an interactive stack of cards with smooth
              hover animations, gradients, and blur effects.
            </p>
          </article>
        </TimelineContent>
      </div>
      </section>
    </div>
  );
};

export default Feature1;
=======
'use client';

import React, { useEffect, useState } from 'react';
import { CursorCard, CursorCardsContainer } from '@/components/ui/cursor-cards';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import HelixqueConnection from '@/components/ui/helixque-connection';
// ----- Smart Matching Algorithm Visualization -----
const MatchingAlgorithmVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Skills Analysis",
      description: "Analyzing technical skills",
      progress: 100,
      color: "bg-blue-500"
    },
    {
      title: "Industry Matching", 
      description: "Finding industry alignment",
      progress: 85,
      color: "bg-green-500"
    },
    {
      title: "Language Filter",
      description: "Matching communication preferences",
      progress: 90,
      color: "bg-purple-500"
    },
    {
      title: "Experience Balance",
      description: "Balancing experience levels",
      progress: 75,
      color: "bg-orange-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg flex items-center justify-center p-4">
      <div className="w-full space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative p-3 rounded-lg border transition-all duration-300 ${
              activeStep === index 
                ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800' 
                : 'bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700'
            }`}
            initial={{ opacity: 0.5 }}
            animate={{ 
              opacity: activeStep === index ? 1 : 0.6,
              scale: activeStep === index ? 1.02 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className={`text-sm font-medium ${
                activeStep === index 
                  ? 'text-blue-900 dark:text-blue-100' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {step.title}
              </h4>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeStep === index 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                  : 'bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-400'
              }`}>
                {step.progress}%
              </span>
            </div>
            <p className={`text-xs ${
              activeStep === index 
                ? 'text-blue-700 dark:text-blue-300' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {step.description}
            </p>
            <div className="mt-2 w-full bg-gray-200 dark:bg-neutral-600 rounded-full h-1.5">
              <motion.div
                className={`h-1.5 rounded-full ${step.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${step.progress}%` }}
                transition={{ duration: 0.8, delay: activeStep === index ? 0.2 : 0 }}
              />
            </div>
          </motion.div>
        ))}
        
        <motion.div
          className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border border-green-200 dark:border-green-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800 dark:text-green-200">
              Match Found! Connecting you with a peer...
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ----- Signup Flow Visualization Component -----
const SignupFlowVisualization = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const signupSteps = [
    {
      title: "Signup with LinkedIn",
      description: "One-click verification",
      icon: "🔗",
      color: "bg-blue-500",
      status: "completed"
    },
    {
      title: "Set Preferences", 
      description: "Skills • Goals • Language",
      icon: "⚙️",
      color: "bg-green-500",
      status: "completed"
    },
    {
      title: "Stay Anonymous",
      description: "Your identity stays private",
      icon: "🎭",
      color: "bg-purple-500",
      status: "active"
    },
    {
      title: "Find Match",
      description: "Connect with professionals",
      icon: "✨",
      color: "bg-orange-500",
      status: "pending"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % signupSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg">
      {/* Success Message */}
          <motion.div
        className="mb-3 p-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg text-center"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: currentStep >= 3 ? 1 : 0, y: currentStep >= 3 ? 0 : -5 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-800 dark:text-green-200">
            🚀 Ready to connect!
          </span>
              </div>
      </motion.div>

      {/* Main Flow Steps */}
      <div className="flex items-center justify-center w-full mb-3 sm:mb-4">
        <div className="flex items-center gap-3 sm:gap-3">
          {signupSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative w-16 sm:w-20 md:w-24 h-18 sm:h-24 md:h-28 bg-gray-100 dark:bg-neutral-800 rounded-lg border border-gray-300 dark:border-neutral-700 overflow-hidden flex flex-col ${
                index <= currentStep ? "opacity-100" : "opacity-40"
              } transition-opacity duration-500`}
              initial={{ opacity: 0.5, y: 20 }}
              animate={{ 
                opacity: index <= currentStep ? 1 : 0.4,
                y: index <= currentStep ? 0 : 10,
                scale: index === currentStep ? 1.05 : 1
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Step Icon */}
              <div className="h-7 sm:h-10 md:h-12 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center relative">
                <div className={`w-4 sm:w-6 md:w-7 h-4 sm:h-6 md:h-7 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                  index <= currentStep 
                    ? 'bg-blue-100 dark:bg-blue-900' 
                    : 'bg-gray-300 dark:bg-neutral-600'
                }`}>
                  {index < currentStep ? (
                    <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm">✓</span>
                  ) : index === 0 ? (
                    <svg className={`w-3 sm:w-4 h-3 sm:h-4 ${index === currentStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) : (
                    <span className={`${index === currentStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'} text-xs`}>
                      {step.icon}
                    </span>
                  )}
            </div>
            
                {/* Status indicator */}
                <div className="absolute top-1 sm:top-1.5 right-1 sm:right-1.5">
                  <motion.div
                    className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${
                      index <= currentStep
                        ? "bg-green-500"
                        : index === currentStep
                        ? "bg-blue-500"
                        : "bg-neutral-500"
                    }`}
                    animate={{
                      scale: index === currentStep ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: index === currentStep ? Infinity : 0,
                    }}
                  />
                </div>
              </div>

              {/* Step info */}
              <div className="px-1 sm:px-2 py-1 sm:py-1.5 text-center bg-gray-100 dark:bg-neutral-800 flex-1 flex flex-col justify-center">
                <div className="text-[7px] sm:text-[9px] md:text-[10px] text-gray-700 dark:text-neutral-300 font-medium leading-tight mb-0.5">
                  {step.title}
                </div>
                {/* Step Number */}
                <div className={`text-[6px] sm:text-[8px] md:text-[9px] font-bold ${
                  index <= currentStep 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ----- Smart Matching Algorithm Component with Orbit Pattern -----
const COUNTRY_FLAGS = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇮🇳", name: "India" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇰🇷", name: "South Korea" },
  { flag: "🇨🇭", name: "Switzerland" },
  { flag: "🇸🇪", name: "Sweden" },
  { flag: "🇳🇴", name: "Norway" },
  { flag: "🇫🇮", name: "Finland" },
  { flag: "🇩🇰", name: "Denmark" },
  { flag: "🇮🇸", name: "Iceland" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇿🇦", name: "South Africa" },
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, flags, isInner = false }: any) {
  return (
    <>
      {/* Orbit flags */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const flagData = flags[index % flags.length];

        return (
          <div
            key={`${isInner ? 'inner' : 'outer'}-${index}`}
            className="absolute flex flex-col items-center"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center transition-transform hover:scale-110">
              <span className="text-lg">{flagData.flag}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

const SmartMatchingVisualization = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(280, 280); // Fixed size for card
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.6; // Moved down for better positioning

  const iconSize = 32;

  return (
    <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px]">
      <div className="relative w-full h-full">
        <div
          className="relative mx-auto max-w-full"
          style={{ width: baseWidth, height: baseWidth * 0.7 }}
        >
          {/* Inner orbit */}
          <SemiCircleOrbit
            radius={baseWidth * 0.32}
            centerX={centerX}
            centerY={centerY}
            count={6}
            iconSize={iconSize}
            flags={COUNTRY_FLAGS.slice(0, 6)}
            isInner={true}
          />
          
          {/* Outer orbit */}
          <SemiCircleOrbit
            radius={baseWidth * 0.54}
            centerX={centerX}
            centerY={centerY}
            count={8}
            iconSize={iconSize + 4}
            flags={COUNTRY_FLAGS.slice(6, 14)}
            isInner={false}
          />
        </div>
        
        {/* Bottom Center Helixque Logo */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <img 
            src="/logo.svg" 
            alt="HelixQue" 
            className="h-16 w-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start px-2 sm:px-4 py-16 text-center md:py-32 overflow-hidden">
    <div className="flex flex-col items-center text-center">
            <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
        Grow Your Career
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Skip cold outreach. Set your skills and preferences, get matched in seconds, and have meaningful conversations mock interviews, mentoring, code reviews, or pitch practice.
      </p>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-3 sm:gap-6 md:h-[380px]">
        {/* Card 1: Smart Matching Algorithm */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-2 sm:p-4 md:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Professional Network</h3>
              <p className="text-muted-foreground text-sm">
                Connect with professionals worldwide based on your <strong>skills</strong>, <strong>industry</strong>, and <strong>language</strong> for meaningful global collaboration.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px]">
              <SmartMatchingVisualization />
            </div>
          </div>
        </CursorCard>

        {/* Card 2: No Fuss Signup Flow */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-4 sm:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
        <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple & Secure Signup</h3>
                <p className="text-muted-foreground text-sm">
                  Securely connect with LinkedIn, stay anonymous to matches. No lengthy forms, no spam - just real professional networking.
                </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[240px]">
              <SignupFlowVisualization />
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-3 sm:gap-6 md:h-[380px]">
        {/* Card 3: Helixque Anonymous Connection */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-4 sm:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Networking Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Mock interviews (behavioral & technical), pair programming, portfolio critique, and startup pitch practice with feedback etc.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px]">
              <HelixqueConnection />
            </div>
          </div>
        </CursorCard>

        {/* Card 4: Interactive Chat Component */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-4 md:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-3 md:mb-4 text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Conversations that matter</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Real time chats for meaningful conversations.</p>
            </div>
            <div className="flex-1 flex flex-col rounded-lg overflow-hidden relative">
              <div className="flex-1 p-3 md:p-4 space-y-4 md:space-y-6 overflow-y-auto min-h-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">Peer</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:30 PM</span>
                  </div>
                                    <div className="rounded-lg bg-gray-200 dark:bg-neutral-800 w-fit max-w-[85%] border border-gray-300 dark:border-neutral-700 p-2 md:p-2.5 text-[10px] md:text-xs text-gray-900 dark:text-white text-left leading-relaxed">
                    Hey, are you ready to take interview? 
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mb-1 md:mb-2"
                >
                                    <div className="rounded-lg mb-1 ml-auto w-fit max-w-[85%] bg-blue-600 p-2 md:p-2.5 text-[10px] md:text-xs text-white text-left leading-relaxed">
                    Sure. Let's connect now!
                  </div>
                  <div className="flex items-center justify-end gap-1.5 md:gap-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">You</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:31 PM</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center gap-1.5 md:gap-2 p-3 md:p-3 pt-1.5 md:pt-2 shrink-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-400 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </div>
  </section>
  );
};

>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
