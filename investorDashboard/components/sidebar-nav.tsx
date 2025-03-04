"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  BarChart3,
  Building,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  User,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: PieChart,
  },
  {
    title: "Investments",
    href: "/investments",
    icon: DollarSign,
  },
  {
    title: "Properties",
    href: "/properties",
    icon: Building,
  },
  {
    title: "Applications",
    href: "/applications",
    icon: FileText,
  },
  {
    title: "Marketplace",
    href: "/marketplace",
    icon: Home,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Account",
    href: "/account",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "w-64 bg-black dark:bg-black/90 text-white border-r border-border flex flex-col h-screen",
        className,
      )}
      {...props}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <DollarSign className="h-6 w-6 text-money" />
          <span>MortgageVest</span>
        </div>
      </div>

      <div className="px-3 mb-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-black dark:bg-black/80 border-border border rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-money dark:focus:ring-money-dark"
          />
        </div>
      </div>

      <nav className="space-y-1 px-3 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-money/10",
              pathname === item.href ? "bg-money/10 text-money" : "text-muted-foreground",
            )}
          >
            <item.icon className={cn("h-4 w-4", pathname === item.href ? "text-money" : "")} />
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-border flex items-center justify-between">
        <Button variant="ghost" className="justify-start text-muted-foreground hover:text-white hover:bg-money/10">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}

