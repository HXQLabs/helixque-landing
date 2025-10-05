"use client"

import { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"

import { cn } from "@/lib/utils"


interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface CleanCountdownProps {
  className?: string
  endDate: Date | string
  label?: string
  expiredMessage?: string
}

export function CleanCountdown({ className, endDate, label, expiredMessage }: CleanCountdownProps) {
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
      const targetTime = new Date(endDate).getTime()
      const difference = targetTime - now.getTime()

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
  }, [endDate])

  if (timeLeft.isExpired) {
    return (
      <div className={cn("flex justify-center w-full", className)}>
        <div className="text-center">
          <p className="text-lg font-semibold text-muted-foreground">
            {expiredMessage ?? "The event has ended!"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-bold text-foreground mb-1 tracking-wide">
          {label ?? "Time left"}
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto mt-2"></div>
      </div>
      
      <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col items-center w-12 sm:w-16 md:w-20 lg:w-24">
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg w-full aspect-square flex items-center justify-center">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-foreground tabular-nums tracking-tight">
              <NumberFlow value={timeLeft.days} format={{ minimumIntegerDigits: 2 }} />
            </div>
          </div>
          <div className="w-full text-center text-xs sm:text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
            Days
          </div>
        </div>

        <div className="self-center text-base sm:text-xl md:text-2xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center w-12 sm:w-16 md:w-20 lg:w-24">
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg w-full aspect-square flex items-center justify-center">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-foreground tabular-nums tracking-tight">
              <NumberFlow value={timeLeft.hours} format={{ minimumIntegerDigits: 2 }} />
            </div>
          </div>
          <div className="w-full text-center text-xs sm:text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
            Hours
          </div>
        </div>

        <div className="self-center text-base sm:text-xl md:text-2xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center w-12 sm:w-16 md:w-20 lg:w-24">
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg w-full aspect-square flex items-center justify-center">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-foreground tabular-nums tracking-tight">
              <NumberFlow value={timeLeft.minutes} format={{ minimumIntegerDigits: 2 }} />
            </div>
          </div>
          <div className="w-full text-center text-xs sm:text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
            Minutes
          </div>
        </div>

        <div className="self-center text-base sm:text-xl md:text-2xl text-muted-foreground/30 font-mono">:</div>

        <div className="flex flex-col items-center w-12 sm:w-16 md:w-20 lg:w-24">
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg w-full aspect-square flex items-center justify-center">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-foreground tabular-nums tracking-tight">
              <NumberFlow value={timeLeft.seconds} format={{ minimumIntegerDigits: 2 }} />
            </div>
          </div>
          <div className="w-full text-center text-xs sm:text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}