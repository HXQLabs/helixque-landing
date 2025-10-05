"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const baseSaleEndDate = new Date("2024-12-31T23:59:59")

const now = new Date()
const timeSinceBase = now.getTime() - baseSaleEndDate.getTime()
const weeksPassed = Math.max(
  0,
  Math.ceil(timeSinceBase / (7 * 24 * 60 * 60 * 1000))
)
const saleEndDate = new Date(
  baseSaleEndDate.getTime() + weeksPassed * 7 * 24 * 60 * 60 * 1000
)

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface BannerCountdownProps {
  className?: string
}

export function BannerCountdown({ className }: BannerCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = saleEndDate.getTime() - now.getTime()

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
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.isExpired) return null

  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      <span className="text-white/80  sm:inline">Hacktober starts in:</span>
      <div className="flex items-center gap-0.5 bg-white/10 rounded px-2 py-0.5 backdrop-blur-sm">
        <span className="tabular-nums text-white font-medium">
          {timeLeft.days}d
        </span>
        <span className="text-white/60">:</span>
        <span className="tabular-nums text-white font-medium">
          {timeLeft.hours.toString().padStart(2, "0")}h
        </span>
        <span className="text-white/60">:</span>
        <span className="tabular-nums text-white font-medium">
          {timeLeft.minutes.toString().padStart(2, "0")}m
        </span>
        <span className="text-white/60 hidden sm:inline">:</span>
        <span className="tabular-nums text-white font-medium hidden sm:inline">
          {timeLeft.seconds.toString().padStart(2, "0")}s
        </span>
      </div>
    </div>
  )
}
