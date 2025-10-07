"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      className={cn("relative", className)}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {showLabel && (
        <span className="ml-2">{theme === "light" ? "Dark" : "Light"} Mode</span>
      )}
    </Button>
  )
}

