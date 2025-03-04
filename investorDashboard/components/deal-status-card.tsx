"use client"

import { CircleCheck, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface DealStatusCardProps {
  status: "Occupied" | "Partially Occupied" | "Vacant" | "Under Renovation"
  lastPayment: string
  nextPayment: string
}

export function DealStatusCard({ status, lastPayment, nextPayment }: DealStatusCardProps) {
  const isOccupied = status === "Occupied" || status === "Partially Occupied"

  return (
    <div className="w-full flex items-center justify-between text-sm">
      <div className="flex items-center">
        <div
          className={cn(
            "rounded-full w-2 h-2 mr-2",
            status === "Occupied" && "bg-emerald-500",
            status === "Partially Occupied" && "bg-amber-500",
            status === "Vacant" && "bg-red-500",
            status === "Under Renovation" && "bg-blue-500",
          )}
        />
        <span>{status}</span>
      </div>
      <div className="flex items-center gap-3">
        {isOccupied ? (
          <>
            <span className="text-muted-foreground flex items-center gap-1">
              <CircleCheck className="h-3 w-3 text-emerald-500" />
              Last: {lastPayment}
            </span>
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3 text-amber-500" />
              Next: {nextPayment}
            </span>
          </>
        ) : (
          <span className="text-muted-foreground">No active payments</span>
        )}
      </div>
    </div>
  )
}

