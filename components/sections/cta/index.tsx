// "use client";
// import React from "react";
// import {ChevronRight, Users, Activity, Hash, Star } from "lucide-react";
// import { Icons } from '@/components/utils/icons';
// import { BorderBeam } from '@/components/ui/border-beam';
// import Link from "next/link";

// export function CTASection() {
//   return (
//     <section className="px-4 py-8 md:py-12">
//       <div className="bg-neutral-100 dark:bg-neutral-900 relative mx-auto max-w-6xl rounded-2xl border border-neutral-200 dark:border-neutral-800 px-4 py-8 md:py-12">
//         {/* Two Column Layout - Equal Heights */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[400px]">
//             {/* Left Content Section */}
//           <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:pl-12 lg:pr-8 h-full py-8 lg:py-12">
//             {/* Main Heading - Opensource Style */}
//             <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-neutral-900/80 via-neutral-900 to-neutral-900/60 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-5xl xl:tracking-tighter mb-6 lg:mb-8">
//               Join the Community
//                 </h2>

//             {/* Description - Opensource Style */}
//             <p className="text-muted-foreground text-sm md:text-base tracking-tight max-w-xl lg:max-w-2xl mb-8 lg:mb-12">
//               Have suggestions or improvements? Share feedback, request features, and help us shape the roadmap.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
//               <Link 
//                 href="https://discord.gg/dQUh6SY9Uk" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group/cta-button bg-[#5865f2] text-white hover:bg-[#4752c4] font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
//               >
//                 <Icons.discord className="w-4 h-4" />
//                 Join Discord
//                 <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/cta-button:translate-x-1" />
//               </Link>
              
//               <Link 
//                 href="https://github.com/HXQLabs/Helixque/issues" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group/cta-button bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600 font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
//               >
//                 <Icons.github className="w-4 h-4" />
//                 Report Issues
//               </Link>
//             </div>
//           </div>

//           {/* Right Discord Metrics Section */}
//           <div className="flex items-center justify-center px-6 lg:px-8">
//             {/* Discord Server Info Card */}
//             <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-4 md:p-6 w-full max-w-sm shadow-lg">
//               <BorderBeam 
//                 size={100}
//                 duration={12}
//                 delay={0}
//                 colorFrom="#5865f2"
//                 colorTo="#7289da"
//                 borderWidth={2}
//               />
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5865f2] flex items-center justify-center">
//                       <Icons.discord className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-foreground text-sm md:text-base">Community Server</h3>
//                       <p className="text-xs md:text-sm text-muted-foreground">Official Discord</p>
//                     </div>
//                   </div>

//                   {/* Server Metrics */}
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Users className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
//                         <span className="text-xs md:text-sm text-muted-foreground">Online Members</span>
//                       </div>
//                       <span className="font-semibold text-foreground text-xs md:text-sm">118</span>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Activity className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
//                         <span className="text-xs md:text-sm text-muted-foreground">Total Members</span>
//                       </div>
//                       <span className="font-semibold text-foreground text-xs md:text-sm">524</span>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Hash className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
//                         <span className="text-xs md:text-sm text-muted-foreground">Channels</span>
//                       </div>
//                       <span className="font-semibold text-foreground text-xs md:text-sm">18</span>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
//                         <span className="text-xs md:text-sm text-muted-foreground">Server Level</span>
//                       </div>
//                       <span className="font-semibold text-foreground text-xs md:text-sm">—</span>
//                     </div>
//             </div>

//               {/* Activity Indicator */}
//               <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-600">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//                   <span className="text-xs text-muted-foreground">Active community discussions</span>
//                 </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight, Users, Activity, Hash, Star } from "lucide-react";
import { Icons } from '@/components/utils/icons';
import { BorderBeam } from '@/components/ui/border-beam';
import Link from "next/link";

export function CTASection() {
  const [serverData, setServerData] = useState<any>(null);

  useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("/api/discord");

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const data = await res.json();
      setServerData(data);
    } catch (err) {
      console.error("Error fetching Discord data:", err);
    }
  }
  fetchData();
}, []);


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
              Have suggestions or improvements? Share feedback, request features, and help us shape the roadmap.
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
                href="https://github.com/HXQLabs/Helixque/issues" 
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta-button bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-600 font-medium flex h-10 items-center justify-center gap-2 rounded-full px-6 text-sm shadow-none transition-colors duration-300 w-full sm:w-auto"
              >
                <Icons.github className="w-4 h-4" />
                Report Issues
              </Link>
            </div>
          </div>

          {/* Right Server Info */}
          <div className="flex items-center justify-center px-6 lg:px-8">
            <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-4 md:p-6 w-full max-w-sm shadow-lg">
              <BorderBeam size={100} duration={12} delay={0} colorFrom="#5865f2" colorTo="#7289da" borderWidth={2} />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5865f2] flex items-center justify-center">
                  <Icons.discord className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {serverData?.guild.name || "Community Server"}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Official Discord</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                    <span className="text-xs md:text-sm text-muted-foreground">Online Members</span>
                  </div>
                  <span className="font-semibold text-foreground text-xs md:text-sm">{serverData?.approximate_presence_count ?? "118"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                    <span className="text-xs md:text-sm text-muted-foreground">Total Members</span>
                  </div>
                  <span className="font-semibold text-foreground text-xs md:text-sm">{serverData?.approximate_member_count ?? "524"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hash className="w-3 h-3 md:w-4 md:h-4 text-purple-500" />
                    <span className="text-xs md:text-sm text-muted-foreground">Channels</span>
                  </div>
                  <span className="font-semibold text-foreground text-xs md:text-sm">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                    <span className="text-xs md:text-sm text-muted-foreground">Server Level</span>
                  </div>
                  <span className="font-semibold text-foreground text-xs md:text-sm">—</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Active community discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
