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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  {
    id: "USR-1001",
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    status: "Active",
    role: "Investor",
    lastLogin: "Today, 10:45 AM",
    deals: 8,
  },
  {
    id: "USR-1002",
    name: "Jessica Miller",
    email: "jessica.miller@example.com",
    status: "Pending",
    role: "Borrower",
    lastLogin: "Never",
    deals: 0,
  },
  {
    id: "USR-1003",
    name: "David Wilson",
    email: "david.wilson@example.com",
    status: "Active",
    role: "Investor",
    lastLogin: "Yesterday, 3:20 PM",
    deals: 12,
  },
  {
    id: "USR-1004",
    name: "Rachel Green",
    email: "rachel.green@example.com",
    status: "Inactive",
    role: "Borrower",
    lastLogin: "2 weeks ago",
    deals: 1,
  },
  {
    id: "USR-1005",
    name: "Michael Scott",
    email: "michael.scott@example.com",
    status: "Pending",
    role: "Investor",
    lastLogin: "Never",
    deals: 0,
  },
]

export function UserActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>User Activity</CardTitle>
          <CardDescription>Monitor and manage platform users</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search users..." className="w-[200px] pl-8 md:w-[300px]" />
          </div>
          <Button>Add User</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Deals</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "default" : user.status === "Pending" ? "outline" : "secondary"}
                    className={user.status === "Active" ? "bg-emerald-500 hover:bg-emerald-600" : undefined}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>{user.deals}</TableCell>
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
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit user</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Reset password</DropdownMenuItem>
                      <DropdownMenuItem>View deals</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Deactivate user</DropdownMenuItem>
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

