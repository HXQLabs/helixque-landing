"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, XIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Hacktoberfest ends on Oct 31, 2025 23:59:59 local time
const hacktoberfestEndDate = new Date("2025-10-31T23:59:59")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface OriginBannerCustomizableProps {
  className?: string
  variant?: "rainbow" | "blue"
}

export default function OriginBannerCustomizable({
  className,
  variant = "blue",
}: OriginBannerCustomizableProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now()
      const difference = hacktoberfestEndDate.getTime() - now

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    // Update faster than once per second for a snappier UI
    const timer = setInterval(calculateTimeLeft, 250)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible || timeLeft.isExpired) return null

  return (
    <div
      className={cn(
        "relative overflow-hidden px-4 py-3",
        variant === "rainbow" && "text-white dark:bg-zinc-950 bg-zinc-50",
        variant === "blue" && "text-white bg-gradient-to-b from-blue-500 to-blue-600",
        className
      )}
    >
      {variant === "rainbow" ? (
        <>
          <div className="absolute inset-0 z-[-1] rainbow-banner-gradient-1" />
          <div className="absolute inset-0 z-[-1] rainbow-banner-gradient-2" />
        </>
      ) : null}
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <picture className="max-md:mt-0.5">
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/513.gif"
              alt="🎃"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
              width="32"
              height="32"
            />
          </picture>
          <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
            <p className="flex flex-wrap gap-1 items-center leading-tight text-sm text-center md:text-left">
              <span className="font-semibold">Helixque</span> is participating in
              <span className="font-semibold"> Hacktoberfest 2025</span>
              <span className="md:inline-block hidden">- </span>
              <Link href="/announcements" className="md:inline-block hidden group hover:underline underline-offset-4 transition-all duration-200">
                Join us and contribute to open source !
                <ArrowUpRight
                  className="size-4 sm:size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0 inline"
                  strokeWidth={2}
                />
              </Link>
            </p>
            <div className="flex gap-3 max-md:flex-wrap">
              <div className="divide-border bg-secondary/80 backdrop-blur flex items-center divide-x overflow-hidden rounded-md border text-xs sm:text-sm tabular-nums">
                {timeLeft.days > 0 && (
                  <span className="flex h-8 items-center justify-center p-2">
                    <span className="font-medium text-foreground">{timeLeft.days}</span>
                    <span className="text-muted-foreground ml-0.5">d</span>
                  </span>
                )}
                <span className="flex h-8 items-center justify-center p-2">
                  <span className="font-medium text-foreground">{timeLeft.hours.toString().padStart(2, "0")}</span>
                  <span className="text-muted-foreground ml-0.5">h</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  <span className="font-medium text-foreground">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                  <span className="text-muted-foreground ml-0.5">m</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  <span className="font-medium text-foreground">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                  <span className="text-muted-foreground ml-0.5">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent cursor-pointer"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-80 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}


