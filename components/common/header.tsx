"use client";
<<<<<<< HEAD
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import { Component, Layout, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";
import { ModeToggle } from "@/components/utils/mode-toggle";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

interface HomeHeaderProps {
  className?: string;
}

export default function HomeHeader({
  className,
}: HomeHeaderProps) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/blocks", label: "Blocks", icon: Component },
    { href: "/templates", label: "Templates", icon: Layout },
    { href: "/pricing", label: "Pricing", icon: Wallet },
  ];
  return (
    <header
      className={cn(
        "flex w-full items-center relative justify-between  h-16 px-4 p-2 ",
        className,
      )}
    >
      {isMobile && (
        <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger className="px-3 text-white h-10 grid place-content-center bg-gradient-to-b from-blue-500 from-100% to-blue-700  w-fit rounded-lg">
            <AlignJustify />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
            <Drawer.Content
              className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
              style={
                {
                  "--initial-transform": "calc(100% + 8px)",
                } as React.CSSProperties
              }
            >
              <div className="dark:bg-black bg-white border border-neutral-200 dark:border-neutral-800 p-2 h-full w-full grow flex flex-col rounded-[16px]">
                <div className="w-full flex justify-between mb-2">
                  <Link href="/" className="  flex items-center pl-2">
                    <div className="text-zinc-950 dark:text-white flex gap-2 items-center">
                      <svg
                        width="374"
                        className=" w-9 h-10"
                        height="421"
                        viewBox="0 0 374 421"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.0047092 107.365V28.695C0.0047092 20.8868 3.58018 14.0547 10.7311 8.19858C17.4054 2.73288 25.5098 0 35.0444 0H207.383C218.824 0 228.597 3.31849 236.702 9.95542C244.806 16.5923 248.858 24.4004 248.858 33.3798V62.6604C248.858 70.8589 251.242 78.4719 256.009 85.4992C260.776 92.5265 267.451 97.9922 276.032 101.896C284.136 106.191 293.194 108.533 303.205 108.924H333.239C344.204 108.924 353.739 112.047 361.843 118.293C369.948 124.93 374 132.934 374 142.303V299.501C374 299.846 373.998 300.192 373.995 300.537V391.529C373.995 399.549 370.42 406.565 363.269 412.58C356.595 418.193 348.49 421 338.956 421H166.617C155.176 421 145.403 417.592 137.298 410.776C129.194 403.959 125.142 395.94 125.142 386.718V356.646C125.142 348.226 122.758 340.407 117.991 333.19C113.224 325.973 106.549 320.359 97.9682 316.35C89.8638 311.939 80.8059 309.533 70.7945 309.133H40.7605C29.7957 309.133 20.2611 305.925 12.1566 299.509C4.05221 292.693 0 284.474 0 274.851V108.257C0 107.959 0.00157218 107.662 0.0047092 107.365ZM248.143 304.102V119.465C248.143 116.732 247.19 114.389 245.283 112.437C242.899 110.485 240.039 109.509 236.702 109.509H135.873C132.536 109.509 129.675 110.485 127.292 112.437C126.926 112.737 126.588 113.046 126.278 113.364L125.857 298.307C125.857 301.113 126.81 303.519 128.717 305.524C131.101 307.529 133.961 308.531 137.298 308.531H238.127C241.464 308.531 244.325 307.529 246.708 305.524C247.247 305.07 247.726 304.596 248.143 304.102Z"
                          fill="url(#paint0_radial_3946_30)"
                        />
                        <defs>
                          <radialGradient
                            id="paint0_radial_3946_30"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(187 210.5) rotate(90) scale(210.5 187)"
                          >
                            <stop offset="0.445416" stopColor="#2994FD" />
                            <stop offset="1" stopColor="#1761FF" />
                          </radialGradient>
                        </defs>
                      </svg>
                      <span className="dark:bg-blue-50 -translate-y-2 uppercase bg-blue-100 inline-block border-2 text-xs border-blue-600 text-blue-600 px-1 font-semibold rounded-md ">
                        pro
                      </span>
                    </div>
                  </Link>
                  <button
                    className="rounded-md w-fit bg-neutral-950 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </button>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "cursor-pointer gap-1 select-none p-2 dark:text-white dark:hover:text-blue-200 hover:text-base-blue rounded-md transition-colors duration-200 flex items-center justify-start",
                    )}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
      {!isMobile && (
        <>
          <nav className="flex gap-2 items-center font-medium">
            <Link href="/" className="  flex items-center pl-2">
              <div className="text-zinc-950 dark:text-white flex gap-2 items-center">
                <svg
                  width="374"
                  className=" w-9 h-10"
                  height="421"
                  viewBox="0 0 374 421"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0047092 107.365V28.695C0.0047092 20.8868 3.58018 14.0547 10.7311 8.19858C17.4054 2.73288 25.5098 0 35.0444 0H207.383C218.824 0 228.597 3.31849 236.702 9.95542C244.806 16.5923 248.858 24.4004 248.858 33.3798V62.6604C248.858 70.8589 251.242 78.4719 256.009 85.4992C260.776 92.5265 267.451 97.9922 276.032 101.896C284.136 106.191 293.194 108.533 303.205 108.924H333.239C344.204 108.924 353.739 112.047 361.843 118.293C369.948 124.93 374 132.934 374 142.303V299.501C374 299.846 373.998 300.192 373.995 300.537V391.529C373.995 399.549 370.42 406.565 363.269 412.58C356.595 418.193 348.49 421 338.956 421H166.617C155.176 421 145.403 417.592 137.298 410.776C129.194 403.959 125.142 395.94 125.142 386.718V356.646C125.142 348.226 122.758 340.407 117.991 333.19C113.224 325.973 106.549 320.359 97.9682 316.35C89.8638 311.939 80.8059 309.533 70.7945 309.133H40.7605C29.7957 309.133 20.2611 305.925 12.1566 299.509C4.05221 292.693 0 284.474 0 274.851V108.257C0 107.959 0.00157218 107.662 0.0047092 107.365ZM248.143 304.102V119.465C248.143 116.732 247.19 114.389 245.283 112.437C242.899 110.485 240.039 109.509 236.702 109.509H135.873C132.536 109.509 129.675 110.485 127.292 112.437C126.926 112.737 126.588 113.046 126.278 113.364L125.857 298.307C125.857 301.113 126.81 303.519 128.717 305.524C131.101 307.529 133.961 308.531 137.298 308.531H238.127C241.464 308.531 244.325 307.529 246.708 305.524C247.247 305.07 247.726 304.596 248.143 304.102Z"
                    fill="url(#paint0_radial_3946_30)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_3946_30"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(187 210.5) rotate(90) scale(210.5 187)"
                    >
                      <stop offset="0.445416" stopColor="#2994FD" />
                      <stop offset="1" stopColor="#1761FF" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="dark:bg-blue-50 -translate-y-2 uppercase bg-blue-100 inline-block border-2 text-xs border-blue-600 text-blue-600 px-1 font-semibold rounded-md ">
                  pro
                </span>
              </div>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "cursor-pointer gap-1 select-none p-2 dark:text-white hover:text-base-blue   rounded-md transition-colors duration-200 flex items-center justify-center",
                  pathname.startsWith(item.href) &&
                    "dark:text-blue-200 dark:border dark:border-blue-950 text-base-blue dark:bg-neutral-900 bg-neutral-200",
                )}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </>
      )}
      <nav className="flex items-center gap-2">
        <a
          href="https://twitter.com/naymur_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 border dark:border-neutral-800 border-neutral-200  px-3 rounded-md items-center justify-center"
        >
          <XIcon className="h-4 w-4 fill-zinc-950 dark:fill-white" />
        </a>
        <ModeToggle />
        <a
          href="https://pro.ui-layouts.com/login"
          className=" bg-[#334cec] text-white border dark:border-neutral-800 border-neutral-200 h-10 items-center flex justify-center px-3 rounded-md"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
=======
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { GithubStarButton } from "./github-star-button";
import { DiscordButton } from "./discord-button";
import { SimpleThemeToggle } from "./simple-theme-toggle";
import { VerticalSeparator } from "./vertical-separator";

interface HelixQueHeaderProps {
  className?: string;
}

export default function HelixQueHeader({ className }: HelixQueHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const updatePillPosition = (index: number) => {
    const element = navItemsRef.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setPillStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  };

  const HelixQueLogo = ({ showFullLogo = false }: { showFullLogo?: boolean }) => (
    <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
      <img 
        src="/logo.svg" 
        alt="HelixQue Logo" 
        width={20} 
        height={20} 
        className="h-5 w-auto"
      />
      <div className="relative">
        <span className={`${showFullLogo ? 'block' : 'hidden sm:block'} font-heading text-lg leading-none font-semibold`}>HelixQue</span>
        <Badge
          variant="secondary" 
          className={`${showFullLogo ? 'block' : 'hidden sm:block'} absolute -top-1 -right-1 translate-x-full text-[8px] px-0.5 py-0 h-auto`}
        >
          Beta
        </Badge>
      </div>
    </div>
  );

  const navigationItems = [
    { href: "/changelog", label: "Changelog" },
    { href: "/announcements", label: "Announcements" },
    { href: "/hacktoberfest", label: "Hacktoberfest", isSpecial: true }
  ];

  return (
    <div className={cn(
      "bg-background theme-container relative z-50 border-b-0",
      className
    )}>
      <div className="w-full">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          {/* Desktop Logo */}
          <div className="hidden md:flex">
            <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
              <HelixQueLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex" 
            aria-label="Main navigation"
          >
            <ul className="border-border/70 relative flex w-fit rounded-full border p-1 px-1">
              {navigationItems.map((item, index) => (
                <li 
                  key={item.href}
                  ref={(el) => {
                    navItemsRef.current[index] = el;
                  }}
                  className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    updatePillPosition(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link 
                    href={item.href} 
                    className={`text-[13.5px] transition-all duration-300 ease-out relative ${
                      item.isSpecial 
                        ? "text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}{item.isSpecial && " 🔥"}
                  </Link>
                </li>
              ))}
              {/* Animated pill background */}
              <motion.li 
                className="bg-muted/80 absolute inset-0 my-1.5 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hoveredIndex !== null
                    ? {
                        opacity: 1,
                        scale: 1,
                        left: `${pillStyle.left}px`,
                        width: `${pillStyle.width}px`,
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              />
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden w-full justify-between items-center">
            <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
              <HelixQueLogo showFullLogo={true} />
            </Link>
            <div className="flex items-center gap-2">
              <SimpleThemeToggle className="h-[32px] px-2" />
              <motion.button 
                className="flex items-center justify-center w-8 h-8 transition-all duration-200 hover:opacity-70" 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                  {/* Top line */}
                  <motion.span
                    className="block absolute h-0.5 w-5 bg-current"
                    initial={{ rotate: 0, y: -4 }}
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 0 : -4,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Bottom line */}
                  <motion.span
                    className="block absolute h-0.5 w-5 bg-current"
                    initial={{ rotate: 0, y: 4 }}
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? 0 : 4,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
                <span className="sr-only">Toggle Menu</span>
              </motion.button>
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile */}
          <nav 
            className="hidden md:flex items-center gap-3 text-sm font-medium" 
            aria-label="Navigation actions"
          >
            <GithubStarButton />
            <DiscordButton />
            <VerticalSeparator />
            <SimpleThemeToggle />
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="fixed inset-0 top-16 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
            
            {/* Mobile Menu Dropdown */}
            <motion.div
              role="dialog"
              id="mobile-menu"
              aria-modal="true"
              aria-label="Mobile menu"
              className="absolute top-full left-0 right-0 z-[60] bg-background md:rounded-none rounded-none md:mx-0 mx-0 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
            >
              {/* Navigation Content */}
              <div className="px-3 py-4">
                <div className="flex flex-col">
                  {navigationItems.map((item, index) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      className={`py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted/50 text-left ${
                        item.isSpecial 
                          ? "text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}{item.isSpecial && " 🔥"}
                    </Link>
                  ))}
                  
                  {/* Mobile Navigation Buttons */}
                  <div className="flex flex-col gap-3 pt-4 mt-2 px-1">
                    <div className="flex items-center justify-center gap-4">
                      <div onClick={() => setIsMenuOpen(false)}>
                        <GithubStarButton className="flex-1 justify-center h-10" />
                      </div>
                      <div onClick={() => setIsMenuOpen(false)}>
                        <DiscordButton className="flex-1 justify-center h-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hidden accessibility headers */}
              <div className="sr-only">
                <h2 className="text-foreground font-semibold">Main Menu</h2>
                <p className="text-muted-foreground text-sm">
                  Use the options below to navigate the application.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
