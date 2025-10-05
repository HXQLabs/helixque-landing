import { Badge } from "@/components/ui/badge";
import { CleanCountdown } from "@/components/utils/clean-countdown";
import { BookOpen, Bug } from "lucide-react";
import { Icons } from "@/components/utils/icons";
import { AuroraText } from "@/components/ui/aurora-text";

export default function HacktoberfestPage() {
  // Determine the relevant Hacktoberfest year dynamically
  const now = new Date();
  const currentYear = now.getFullYear();
  // If we're in October, use current year; if before October, use current year; if after October, use next year
  const eventYear = now.getMonth() === 9
    ? currentYear
    : (now.getMonth() > 9 ? currentYear + 1 : currentYear);

  const start = new Date(`${eventYear}-10-01T00:00:00`);
  const end = new Date(`${eventYear}-10-31T23:59:59`);
  const active = now >= start && now <= end;
  const hacktoberfestEnd = end;

  return (
    <div className="bg-background relative overflow-x-hidden">
      {/* Decorative radial gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      {/* Page Title Section */}
      <div className={active ? "pt-10 pb-16" : "pt-10 pb-12"}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span role="img" aria-label="pumpkin" className="text-2xl">🎃</span>
            <Badge
              variant="secondary"
              className="px-3 py-1 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 shadow-sm"
            >
              {active ? "Hacktoberfest is Live!" : "Coming Soon"}
            </Badge>
            <span role="img" aria-label="pumpkin" className="text-2xl">🎃</span>
          </div>

          <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
            {/* Join Helixque for <span className="text-orange-500">Hacktoberfest</span> */}
             Join Helixque for <AuroraText>Hacktoberfest</AuroraText>
          </h1>

          <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
            {active 
              ? (
                <>
                  <span className="block">Join us in celebrating open source!</span>
                  <span className="block">Contribute to our projects and be part of the Hacktoberfest community.</span>
                </>
              )
              : "We understand your eagerness to contribute and we're thankful for that, but you'll need to wait until the event begins."
            }
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      {active && (
        <div className="mb-16 flex justify-center">
          <CleanCountdown 
            endDate={hacktoberfestEnd}
            label={`Time left in Hacktoberfest ${eventYear}`}
            expiredMessage={`🎉 Hacktoberfest ${eventYear} has ended! 🎉`}
          />
        </div>
      )}

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 mb-10 lg:px-10 text-center">
        <p className="text-lg text-muted-foreground mb-8">
          {active 
            ? "Ready to contribute? Check out our repositories and start making a difference!"
            : "Meanwhile, explore our work and get ready to contribute."
          }
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/orgs/HXQLabs/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <Icons.github className="w-4 h-4" />
            Browse our repositories
          </a>

          <a
            href="https://github.com/HXQLabs/HelixQue/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <BookOpen className="w-4 h-4" />
            See contributing guidelines
          </a>

          <a
            href="https://github.com/search?q=org%3AHXQLabs+state%3Aopen&type=Issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm sm:text-[13.5px] hover:bg-muted transition-colors bg-gradient-to-b from-background to-muted/30"
          >
            <Bug className="w-4 h-4" />
            Find issues
          </a>
        </div>

        <p className="mt-6 text-sm sm:text-base text-muted-foreground">
          Gear up your issues, sharpen those PRs, and let the commits roll in! ⚡️
        </p>
      </div>
    </div>
  );
}