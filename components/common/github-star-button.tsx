"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import NumberFlow, { useCanAnimate } from "@number-flow/react"
import { motion, MotionConfig } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/utils/icons"

const MotionNumberFlow = motion.create(NumberFlow)
const ANIMATION_DURATION = 900

export function GithubStarButton({ className }: { className?: string }) {
  const [stars, setStars] = useState<number | null>(null)
  const [displayValue, setDisplayValue] = useState<number | null>(null)
  const [isStarHovered, setIsStarHovered] = useState(false)
  const canAnimate = useCanAnimate()

  const generateRandomNumber = (length: number) => {
    const targetLength = length + 2
    const min = Math.pow(10, targetLength - 1)
    const max = Math.pow(10, targetLength) - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const animateValue = (value: number) => {
    const randomValue = generateRandomNumber(value.toString().length)
    setDisplayValue(randomValue)
    setTimeout(() => setDisplayValue(value), ANIMATION_DURATION)
  }

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/HXQLabs/helixque"
        )
        const data = await response.json()
        setStars(data.stargazers_count)
        setDisplayValue(data.stargazers_count)
      } catch (error) {
        console.error("Error fetching GitHub stars:", error)
      }
    }

    fetchStars()
  }, [])

  return (
    <MotionConfig
      transition={{
        layout: canAnimate
          ? { duration: ANIMATION_DURATION / 1000, bounce: 0, type: "spring" }
          : { duration: 0 },
      }}
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/HXQLabs/helixque"
        onMouseEnter={() => {
          setIsStarHovered(true)
          if (stars) animateValue(stars)
        }}
        onMouseLeave={() => setIsStarHovered(false)}
        onClick={() => {
          if (typeof window !== "undefined" && window.datafast) {
            window.datafast("clicked_github_from_nav")
          }
        }}
      >
        <motion.span
          className={cn(
            "group/contribute hover:bg-muted inline-flex h-[30px] items-center gap-2 overflow-hidden rounded-md bg-transparent px-2 text-[13.5px] transition-colors duration-200 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
            className
          )}
          layout
        >
          <Icons.github className="text-muted-foreground shrink-0" />
          {displayValue !== null && (
            <MotionNumberFlow
              value={displayValue}
              className="text-muted-foreground group-hover/contribute:text-foreground pt-[1px] text-right text-[13px]"
              format={{ style: "decimal", useGrouping: true }}
              style={
                {
                  "--number-flow-char-height": "0.85em",
                  "--number-flow-mask-height": "0.3em",
                  "--number-flow-direction": "up",
                } as React.CSSProperties
              }
              layout
              layoutRoot
            />
          )}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground mb-[1px] shrink-0 transition-all duration-200"
            animate={{
              fill: isStarHovered ? "#fbbf24" : "currentColor",
              color: isStarHovered ? "#fbbf24" : "currentColor",
              scale: isStarHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </motion.svg>
        </motion.span>
      </Link>
    </MotionConfig>
  )
}
