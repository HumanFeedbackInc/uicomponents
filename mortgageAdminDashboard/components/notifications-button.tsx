"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function NotificationsButton() {
  const [notificationCount, setNotificationCount] = useState(5)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
              {notificationCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-80 overflow-auto">
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">New Pending Deal</p>
              <p className="text-xs text-muted-foreground">Deal #12345 requires your approval</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Missed Payment Alert</p>
              <p className="text-xs text-muted-foreground">Deal #10982 has missed a scheduled payment</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">New User Registration</p>
              <p className="text-xs text-muted-foreground">3 new users are pending approval</p>
              <p className="text-xs text-muted-foreground">3 hours ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">System Update</p>
              <p className="text-xs text-muted-foreground">Platform will undergo maintenance tonight</p>
              <p className="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Lawyer Portal Update</p>
              <p className="text-xs text-muted-foreground">Documents for Deal #11456 have been uploaded</p>
              <p className="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

