"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export function SimpleThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  if (!mounted) {
    return (
      <button
        className={cn(
          "group/theme hover:bg-muted inline-flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-md bg-transparent transition-colors duration-200",
          className
        )}
        disabled
      >
        <Sun className="h-4 w-4 text-muted-foreground" />
      </button>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "group/theme hover:bg-muted inline-flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-md bg-transparent transition-colors duration-200 relative cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-muted-foreground group-hover/theme:text-foreground" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-muted-foreground group-hover/theme:text-foreground" />
    </motion.button>
  )
}
