"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Icons } from '@/components/utils/icons';
import { BorderBeam } from '@/components/ui/border-beam';
import Link from "next/link";

export function CTASection() {
  

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="bg-neutral-100 dark:bg-neutral-900 relative mx-auto max-w-6xl rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[400px]">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:pl-12 lg:pr-8 h-full py-8 lg:py-12">
            <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-neutral-900/80 via-neutral-900 to-neutral-900/60 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-5xl xl:tracking-tighter mb-6 lg:mb-8">
              Join the Community
            </h2>
            <p className="text-muted-foreground text-sm md:text-base tracking-tight max-w-xl lg:max-w-2xl mb-8 lg:mb-12">
              Star the repo, join our Discord, and contribute ideas or code. Help shape a better way to learn, mentor, and collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link 
                href="https://discord.gg/dQUh6SY9Uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta-button bg-[#5865f2] text-white hover:bg-[#4752c4] font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
              >
                <Icons.discord className="w-4 h-4" />
                Join Discord
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/cta-button:translate-x-1" />
              </Link>
              <Link 
                href="https://github.com/orgs/HXQLabs/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta-button bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600 font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
              >
                <Icons.github className="w-4 h-4" />
                Explore Repos
              </Link>
              <Link 
                href="https://helixque.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta-button bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600 font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
              >
                Start Free
              </Link>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="flex items-center justify-center px-6 lg:px-8">
            <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-4 md:p-6 w-full max-w-sm shadow-lg">
              <BorderBeam size={100} duration={12} delay={0} colorFrom="#5865f2" colorTo="#7289da" borderWidth={2} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5865f2] flex items-center justify-center">
                  <Icons.discord className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">Get involved</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Community & contribution</p>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-[#5865f2]">★</span>
                  <p className="text-sm text-muted-foreground">Star the project on GitHub to support development.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-[#5865f2]">💬</span>
                  <p className="text-sm text-muted-foreground">Join Discord to share ideas and meet collaborators.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-[#5865f2]">🛠️</span>
                  <p className="text-sm text-muted-foreground">Pick an issue or read the Contributing Guide to get started.</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-600 flex items-center gap-3">
                <Link href="https://github.com/HXQLabs/helixque" target="_blank" className="text-xs underline">Repo</Link>
                <span className="text-neutral-400">•</span>
                <Link href="https://github.com/HXQLabs/helixque/issues" target="_blank" className="text-xs underline">Issues</Link>
                <span className="text-neutral-400">•</span>
                <Link href="https://github.com/HXQLabs/helixque-landing/blob/main/CONTRIBUTING.md" target="_blank" className="text-xs underline">Contributing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
