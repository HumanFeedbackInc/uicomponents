"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { NotificationsButton } from "@/components/notifications-button"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <div className="flex flex-1 items-center gap-4">
              <div className="md:hidden">{/* Mobile menu trigger */}</div>
              <div className="flex-1" />
              <div className="flex items-center gap-2">
                <NotificationsButton />
                <ModeToggle />
                <UserNav />
              </div>
            </div>
          </header>
          <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

