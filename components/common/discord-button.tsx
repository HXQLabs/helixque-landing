"use client"

import Link from "next/link"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/utils/icons"

export function DiscordButton({ className }: { className?: string }) {
  return (
    <Link
      target="_blank"
      href="https://discord.gg/dQUh6SY9Uk" // Replace with your actual Discord invite
      onClick={() => {
        if (typeof window !== "undefined" && window.datafast) {
          window.datafast("clicked_discord_from_nav")
        }
      }}
    >
      <motion.span
        className={cn(
          "group/discord hover:bg-muted inline-flex h-[30px] items-center gap-2 overflow-hidden rounded-md bg-transparent px-2 text-[13.5px] transition-colors duration-200 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icons.discord className="text-muted-foreground group-hover/discord:text-[#5865f2] shrink-0 transition-colors duration-200" />
        <span className="text-muted-foreground group-hover/discord:text-foreground text-[13px] font-medium">
          Join Discord
        </span>
      </motion.span>
    </Link>
  )
}
