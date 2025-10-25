"use client"

import React, { useCallback, useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"

interface CursorCardsContainerProps {
  children: React.ReactNode
  className?: string
  proximityRange?: number | string // Allow both pixel numbers and CSS unit strings
}

interface CursorCardProps {
  children?: React.ReactNode
  className?: string
  illuminationRadius?: number | string // Allow both pixels and CSS units
  illuminationColor?: string
  illuminationOpacity?: number
  primaryHue?: string
  secondaryHue?: string
  borderColor?: string
}

interface InternalCursorCardProps extends CursorCardProps {
  globalMouseX?: number
  globalMouseY?: number
  isWithinRange?: boolean
}

function useMousePosition(proximityRange: number) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const proximityRangeRef = useRef(proximityRange)
  const [mouseState, setMouseState] = React.useState({
    mousePositionX: 0,
    mousePositionY: 0,
    isWithinRange: false,
  })

  // Update the ref when proximityRange changes
  proximityRangeRef.current = proximityRange

  const handlePointerMovement = useCallback(
    (event: PointerEvent) => {
      if (!wrapperRef.current) return

      const bounds = wrapperRef.current.getBoundingClientRect()
      const { clientX, clientY } = event

      const isInProximity =
        clientX >= bounds.left - proximityRangeRef.current &&
        clientX <= bounds.right + proximityRangeRef.current &&
        clientY >= bounds.top - proximityRangeRef.current &&
        clientY <= bounds.bottom + proximityRangeRef.current

      setMouseState({
        mousePositionX: clientX,
        mousePositionY: clientY,
        isWithinRange: isInProximity,
      })
    },
    []
  )

  useEffect(() => {
    document.addEventListener("pointermove", handlePointerMovement)
    return () =>
      document.removeEventListener("pointermove", handlePointerMovement)
  }, [handlePointerMovement])

  return { wrapperRef, mouseState }
}

function useCardActivation(
  elementRef: React.RefObject<HTMLDivElement | null>,
  globalMouseX: number,
  globalMouseY: number,
  isWithinRange: boolean,
  illuminationRadius: number
) {
  const localMouseX = useMotionValue(-illuminationRadius)
  const localMouseY = useMotionValue(-illuminationRadius)
  const [isCardActive, setIsCardActive] = React.useState(false)

  useEffect(() => {
    if (!elementRef.current || !isWithinRange) {
      setIsCardActive(false)
      localMouseX.set(-illuminationRadius)
      localMouseY.set(-illuminationRadius)
      return
    }

    const rect = elementRef.current.getBoundingClientRect()
    // Use relative proximity based on element size
    const extendedProximity = Math.min(rect.width, rect.height) * 0.2

    const isNearCard =
      globalMouseX >= rect.left - extendedProximity &&
      globalMouseX <= rect.right + extendedProximity &&
      globalMouseY >= rect.top - extendedProximity &&
      globalMouseY <= rect.bottom + extendedProximity

    setIsCardActive(isNearCard)

    if (isNearCard) {
      localMouseX.set(globalMouseX - rect.left)
      localMouseY.set(globalMouseY - rect.top)
    } else {
      localMouseX.set(-illuminationRadius)
      localMouseY.set(-illuminationRadius)
    }
  }, [
    globalMouseX,
    globalMouseY,
    isWithinRange,
    illuminationRadius,
    localMouseX,
    localMouseY,
  ])

  return { localMouseX, localMouseY, isCardActive }
}

export function CursorCardsContainer({
  children,
  className,
  proximityRange = "40vh", // Use viewport-relative units instead of fixed pixels
}: CursorCardsContainerProps & { proximityRange?: string }) {
  // Convert proximityRange to pixels based on viewport height
  const proximityRangePx = typeof window !== 'undefined' 
    ? (parseInt(proximityRange) / 100) * window.innerHeight 
    : 400;

  const { wrapperRef, mouseState } = useMousePosition(proximityRangePx)

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === CursorCard) {
      return React.cloneElement(
        child as React.ReactElement<InternalCursorCardProps>,
        {
          globalMouseX: mouseState.mousePositionX,
          globalMouseY: mouseState.mousePositionY,
          isWithinRange: mouseState.isWithinRange,
        }
      )
    }
    return child
  })

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      {enhancedChildren}
    </div>
  )
}

export function CursorCard({
  children,
  className,
  illuminationRadius = "20vh", // Use viewport-relative units
  illuminationColor = "#FFFFFF10",
  illuminationOpacity = 0.8,
  primaryHue = "#93C5FD",
  secondaryHue = "#2563EB",
  borderColor = "#E5E5E5",
  globalMouseX = 0,
  globalMouseY = 0,
  isWithinRange = false,
}: InternalCursorCardProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  
  // Convert illuminationRadius to pixels based on viewport height when needed
  const illuminationRadiusPx = typeof window !== 'undefined' && typeof illuminationRadius === 'string'
    ? (parseInt(illuminationRadius) / 100) * window.innerHeight
    : typeof illuminationRadius === 'number' 
      ? illuminationRadius 
      : 200;

  const { localMouseX, localMouseY, isCardActive } = useCardActivation(
    elementRef,
    globalMouseX,
    globalMouseY,
    isWithinRange,
    illuminationRadiusPx
  )

  const gradientBackground = useMotionTemplate`
    radial-gradient(min(${illuminationRadiusPx}px, 30%) circle at ${localMouseX}px ${localMouseY}px,
    ${primaryHue}, 
    ${secondaryHue},
    ${borderColor} 100%
    )
  `

  const illuminationBackground = useMotionTemplate`
    radial-gradient(min(${illuminationRadiusPx}px, 30%) circle at ${localMouseX}px ${localMouseY}px, 
    ${illuminationColor}, transparent 100%)
  `

  return (
    <div
      ref={elementRef}
      className={cn("group relative rounded-[inherit]", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: gradientBackground }}
      />
      <div className="absolute inset-px rounded-[inherit] bg-white dark:bg-neutral-950" />
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300",
          isCardActive && "opacity-100"
        )}
        style={{
          background: illuminationBackground,
          opacity: isCardActive ? illuminationOpacity : 0,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
