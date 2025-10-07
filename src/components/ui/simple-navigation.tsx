"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationMenuProps {
  children: React.ReactNode
  className?: string
}

const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

interface NavigationMenuItemProps {
  children: React.ReactNode
  className?: string
}

const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuItemProps>(
  ({ className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </li>
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

const navigationMenuTriggerStyle = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-800 focus:text-gray-900 dark:focus:text-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"

interface NavigationMenuTriggerProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isOpen?: boolean
}

const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
  ({ className, children, onClick, isOpen = false, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(navigationMenuTriggerStyle, "group", className)}
      onClick={onClick}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  )
)
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

interface NavigationMenuContentProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
}

const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuContentProps>(
  ({ className, children, isOpen = false, ...props }, ref) => {
    if (!isOpen) return null
    
    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-0 top-full mt-1.5 w-full min-w-[400px] rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationMenuContent.displayName = "NavigationMenuContent"

interface NavigationMenuLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ className, children, href, onClick, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn(navigationMenuTriggerStyle, "dark:text-gray-100", className)}
      {...props}
    >
      {children}
    </a>
  )
)
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
}