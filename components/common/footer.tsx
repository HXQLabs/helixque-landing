<<<<<<< HEAD
import React from "react"
import ScrambleHover from "@/components/fancy/text/scramble-hover"
import CenterUnderline from "@/components/fancy/text/underline-center"

const StickyFooter: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full h-80 bg-white dark:bg-black z-0">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-black dark:text-white">
          <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Home"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Docs"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Comps"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
            <ul>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Github"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="Instagram"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
              <li className="cursor-pointer">
                <CenterUnderline>
                  <ScrambleHover
                    text="X(Twitter)"
                    scrambleSpeed={50}
                    maxIterations={8}
                    useOriginalCharsOnly={true}
                  />
                </CenterUnderline>
              </li>
            </ul>
          </div>
          
          {/* Copyright notice */}
          <div className="absolute bottom-12 right-12 text-xs sm:text-sm text-black dark:text-white opacity-70">
            © 2025 helixque. All rights reserved.
          </div>
          
          <h2 className="absolute bottom-0 left-0 translate-y-1/5 sm:text-[192px] text-[80px] text-black dark:text-white font-calendas">
            HelixQue
          </h2>
        </div>
      </footer>
  )
}

export default StickyFooter
=======
import { Icons } from "../utils/icons";
import { ArrowUpRight } from "lucide-react";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";
import { Badge } from "../ui/badge";
import Link from "next/link";
import BuyMeCoffee from "../utils/buy-me-coffee-btn";


// Inline BadtzLogo from badtz-header
const BadtzLogo = () => (
  <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
    <img 
      src="/logo.svg" 
      alt="HelixQue Logo" 
      width={20} 
      height={20} 
      className="h-5 w-auto"
    />
    <div className="relative">
      <span className="font-heading text-lg leading-none font-semibold">HelixQue</span>
      <Badge 
        variant="secondary" 
        className="absolute -top-1 -right-1 translate-x-full text-[8px] px-0.5 py-0 h-auto"
      >
        Beta
      </Badge>
    </div>
  </div>
);



const StickyFooter = () => {
  return (
    <footer className="bg-background border-t border-border/40" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-20">
          {/* Brand Section */}
          <div className="flex w-full flex-col items-start space-y-6 md:max-w-80">
            <Link href="#hero" className="flex items-center gap-2" aria-label="Navigate to homepage">
              <BadtzLogo />
            </Link>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Match instantly by skills, industry, and language. Learn, mentor, and collaborate through text or video on our professional networking platform.
              </p>
              
              {/* Status Indicator */}
              <Pill>
                <PillIndicator pulse variant="success" />
                All Systems Operational
              </Pill>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid w-full grid-cols-1 gap-8 md:w-auto lg:grid-cols-2">
            {/* Useful Links */}
            <nav aria-label="Useful Links">
              <div className="flex flex-col md:text-sm">
                <div>
                  <h3 className="text-foreground mb-6 font-medium">Useful Links</h3>
                </div>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    <Link 
                      href="https://github.com/HXQLabs/" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group" 
                      aria-label="Visit our GitHub profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.github className="h-4 w-4" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://discord.com/invite/XC4YsUBg2" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#5865F2] transition-colors duration-200 group" 
                      aria-label="Join our Discord" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.discord className="h-4 w-4" />
                      <span className="text-sm font-medium">Discord</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://hacktoberfest.com" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#5A5AB5] transition-colors duration-200 group" 
                      aria-label="Hacktoberfest" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.hacktoberfest className="h-4 w-4" />
                      <span className="text-sm font-medium">Hacktoberfest</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Support */}
            <nav aria-label="Support">
              <div className="flex flex-col md:text-sm">
                <div>
                  <h3 className="text-foreground mb-6 font-medium">Support</h3>
                </div>
                <div className="space-y-3">
                  <BuyMeCoffee />
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} HXQLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-condition" className="hover:text-foreground transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
            {/* <Link href="/legal/license" className="hover:text-foreground transition-colors duration-200">
              License
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;

>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
