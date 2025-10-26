"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from "lucide-react";
import { Icons } from '@/components/utils/icons';
import { 
  AvatarGroup, 
  AvatarGroupTooltip, 
  AvatarGroupTooltipArrow 
} from '@/components/animate-ui/primitives/animate/avatar-group';
import { Button } from '@/components/ui/button';
import { fetchAll, Repo as GhRepo, ContributorAPI as GhContributor, getRepo } from '@/lib/github';

// types moved to lib/github; reuse them here as GhRepo / GhContributor

// --- Tiny UI helpers ---
function StatRow({ repo }: { repo: GhRepo | null }) {
  if (!repo) return null;
  return (
    <div className="mt-6 text-sm text-muted-foreground">
      <a href={repo.html_url} target="_blank" className="underline">
        {repo.full_name}
      </a>
      {" · ⭐ "}{repo.stargazers_count}
      {" · 🍴 "}{repo.forks_count}
      {" · 👀 "}{repo.watchers_count}
      {" · 🐞 "}{repo.open_issues_count}
      <div className="mt-1">
        Lang: {repo.language ?? "Unknown"}
        {repo.topics && repo.topics.length ? (
          <>
            {" · Topics: "}
            {repo.topics.join(", ")}
          </>
        ) : null}
      </div>
      <div className="mt-1">
        Homepage:{" "}
        {repo.homepage ? (
          <a className="underline" target="_blank" href={repo.homepage}>
            {repo.homepage}
          </a>
        ) : (
          "—"
        )}
      </div>
      <div className="mt-1">Updated: {new Date(repo.updated_at).toLocaleString()}</div>
    </div>
  );
}

function LanguagesBars({ languages }: { languages: Record<string, number> | null }) {
  const entries = useMemo(() => {
    if (!languages) return [];
    return Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [languages]);
  if (!entries.length) return null;

  const total = entries.reduce((s, [, v]) => s + v, 0) || 1;

  return (
    <div className="mt-6 w-full max-w-xl text-left">
      <h3 className="text-sm font-medium mb-2">Languages</h3>
      <div className="space-y-2">
        {entries.map(([lang, bytes]) => (
          <div key={lang} className="flex items-center gap-3 text-xs">
            <span className="w-24 text-muted-foreground">{lang}</span>
            <div className="flex-1 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${Math.max(4, Math.round((bytes / total) * 100))}%` }}
              />
            </div>
            <span className="w-16 text-right">{bytes.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const OpensourceSection = () => {
  const [repo, setRepo] = useState<GhRepo | null>(null);
  const [contributors, setContributors] = useState<GhContributor[]>([]);
  const [languages, setLanguages] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const token = process.env.NEXT_PUBLIC_GH_TOKEN;
        const { repo: r, contributors: c, languages: l } = await fetchAll(token);
        if (!mounted) return;
        setRepo(r);
        setContributors(Array.isArray(c) ? c : []);
        setLanguages(l || {});
      } catch (e) {
        if (mounted && e instanceof Error && e.name !== 'AbortError') {
          setErr(e.message || 'Failed to load GitHub data');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  const top20 = contributors
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, 20);

  return (
    <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:py-32 bg-white dark:bg-neutral-950">
      <div className="flex flex-col items-center text-center">
        <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-neutral-900/80 via-neutral-900 to-neutral-900/60 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
          Built by professionals, for professionals
        </h2>
        <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
          Join an early community of developers, designers, founders, and learners practicing together in a safe, structured environment. Share knowledge, grow your network, and improve with every conversation.
        </p>

        {/* Repo facts */}
        {err ? (
          <div className="mt-6 text-sm text-red-500">Error: {err}</div>
        ) : (
          <>
            {/* <StatRow repo={repo} /> */}
            {/* <LanguagesBars languages={languages} /> */}
          </>
        )}
      </div>

      {/* Contributors Row */}
      <div className="mt-16 w-full">
        <div className="mb-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <AvatarGroup
              translate="-20%"
              transition={{ type: 'spring', stiffness: 300, damping: 17 }}
              tooltipTransition={{ type: 'spring', stiffness: 300, damping: 35 }}
              side="top"
              sideOffset={20}
              align="center"
              openDelay={100}
              closeDelay={150}
              className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            >
              {(loading ? Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`s-${i}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"
                />
              )) : top20.length ? top20 : []).map((c, index) =>
                // when loading, c is a div already; when loaded, c is a ContributorAPI
                React.isValidElement(c) ? (
                  <React.Fragment key={`sk-${index}`}>{c}</React.Fragment>
                ) : (
                  <motion.div
                    key={(c as GhContributor).login + index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="relative group flex-shrink-0"
                  >
                    <img
                      src={(c as GhContributor).avatar_url}
                      alt={(c as GhContributor).login}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-neutral-300 dark:border-neutral-600 group-hover:border-purple-400 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg"
                      onClick={() => window.open((c as GhContributor).html_url, "_blank")}
                    />
                    <AvatarGroupTooltip className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-2 rounded-lg shadow-xl z-50">
                      <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white whitespace-nowrap">
                        {(c as GhContributor).login} · {(c as GhContributor).contributions} contribs
                      </span>
                      <AvatarGroupTooltipArrow className="fill-white dark:fill-neutral-800" />
                    </AvatarGroupTooltip>
                  </motion.div>
                )
              )}
            </AvatarGroup>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center px-4 mt-8 sm:mt-6">
          <Button
            onClick={() => window.open("https://github.com/hxqlabs/helixque", "_blank")}
            className="cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 py-3 sm:py-2 has-[>svg]:px-4 sm:has-[>svg]:px-3 h-10 sm:h-8 rounded-lg px-5 sm:px-4 text-sm sm:text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20] w-full sm:w-auto"
          >
            <Icons.github className="w-4 h-4" />
            Join Community
          </Button>
          
          <Button
            onClick={() => window.open("https://github.com/hxqlabs/helixque/fork", "_blank")}
            className="cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 py-3 sm:py-2 has-[>svg]:px-4 sm:has-[>svg]:px-3 h-10 sm:h-8 rounded-lg px-5 sm:px-4 text-sm sm:text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20] w-full sm:w-auto"
          >
            <Heart className="w-4 h-4" />
            Network Now
          </Button>
        </div>
      </div>
    </section>
  );
};
