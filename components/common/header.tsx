"use client";
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
                    className={`text-[13.5px] transition-all duration-300 ease-out relative ${item.isSpecial
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
                      className={`py-3 px-4 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-muted/50 text-left ${item.isSpecial
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