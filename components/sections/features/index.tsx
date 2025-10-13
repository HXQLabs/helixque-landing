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
        What you can do with Helixque
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Set your preferences once—Helixque finds the right peers for learning, mentoring, mock interviews, code reviews, portfolio critique, and pitch practice.
      </p>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-3 sm:gap-6 md:h-[380px]">
        {/* Card 1: Smart Matching Algorithm */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-2 sm:p-4 md:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart, global matching</h3>
              <p className="text-muted-foreground text-sm">
                Get paired with peers worldwide by <strong>skills</strong>, <strong>industry</strong>, and <strong>language</strong>. Collaborate across time zones and backgrounds.
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple, privacy-first onboarding</h3>
                <p className="text-muted-foreground text-sm">
                  One-click signup, optional LinkedIn verification, and anonymous-by-default matching. No long forms. No spam.
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sessions that accelerate growth</h3>
              <p className="text-muted-foreground text-sm">
                Practice behavioral and technical interviews, pair program, get portfolio feedback, or rehearse startup pitches with real-time guidance.
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
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Real-time conversations</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Start in chat, switch to video when ready. Designed for focus and momentum.</p>
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

