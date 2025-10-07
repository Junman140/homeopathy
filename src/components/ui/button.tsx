import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'medical' | 'healing'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variantClasses = {
      default: "bg-ucsf-blue text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800",
      outline: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-gray-500 dark:text-gray-100",
      secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:ring-gray-500",
      ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-500 dark:text-gray-100",
      link: "text-ucsf-blue dark:text-blue-400 underline-offset-4 hover:underline focus-visible:ring-blue-500",
      medical: "bg-ucsf-blue text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700",
      healing: "bg-medical-green text-white hover:bg-green-700 focus-visible:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800",
    }
    
    const sizeClasses = {
      default: "h-10 px-3 sm:px-4 py-2 text-xs sm:text-sm",
      sm: "h-8 sm:h-9 rounded-md px-2 sm:px-3 text-xs sm:text-sm",
      lg: "h-10 sm:h-11 rounded-md px-4 sm:px-8 text-sm sm:text-base",
      xl: "h-11 sm:h-12 rounded-lg px-6 sm:px-10 text-sm sm:text-base",
      icon: "h-9 w-9 sm:h-10 sm:w-10",
    }

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
