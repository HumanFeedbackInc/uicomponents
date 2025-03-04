"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const deals = [
  {
    id: "DEAL-1234",
    borrower: "John Smith",
    status: "Active",
    amount: "$450,000",
    nextPayment: "2023-04-15",
    type: "Residential",
  },
  {
    id: "DEAL-1235",
    borrower: "Sarah Johnson",
    status: "Pending",
    amount: "$325,000",
    nextPayment: "2023-04-20",
    type: "Commercial",
  },
  {
    id: "DEAL-1236",
    borrower: "Michael Brown",
    status: "Active",
    amount: "$550,000",
    nextPayment: "2023-04-22",
    type: "Residential",
  },
  {
    id: "DEAL-1237",
    borrower: "Emily Davis",
    status: "Missed Payment",
    amount: "$275,000",
    nextPayment: "2023-04-10",
    type: "Residential",
  },
  {
    id: "DEAL-1238",
    borrower: "Robert Wilson",
    status: "Pending",
    amount: "$620,000",
    nextPayment: "2023-04-25",
    type: "Commercial",
  },
]

export function RecentDeals() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Recent Deals</CardTitle>
          <CardDescription>Manage your recent mortgage deals</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search deals..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>
          <Button>Add Deal</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deal ID</TableHead>
              <TableHead>Borrower</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Next Payment</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell className="font-medium">{deal.id}</TableCell>
                <TableCell>{deal.borrower}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      deal.status === "Active" ? "default" : deal.status === "Pending" ? "outline" : "destructive"
                    }
                    className={deal.status === "Active" ? "bg-emerald-500 hover:bg-emerald-600" : undefined}
                  >
                    {deal.status}
                  </Badge>
                </TableCell>
                <TableCell>{deal.amount}</TableCell>
                <TableCell>{deal.nextPayment}</TableCell>
                <TableCell>{deal.type}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit deal</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Send reminder</DropdownMenuItem>
                      <DropdownMenuItem>View documents</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Archive deal</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

