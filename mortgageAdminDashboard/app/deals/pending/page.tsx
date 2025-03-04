import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search, Filter, Download, LinkIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const pendingDeals = [
  {
    id: "DEAL-2001",
    borrower: "James Wilson",
    amount: "$475,000",
    type: "Residential",
    submittedDate: "2023-04-01",
    status: "Document Review",
  },
  {
    id: "DEAL-2002",
    borrower: "Linda Martinez",
    amount: "$650,000",
    type: "Commercial",
    submittedDate: "2023-04-02",
    status: "Awaiting Approval",
  },
  {
    id: "DEAL-2003",
    borrower: "Robert Johnson",
    amount: "$320,000",
    type: "Residential",
    submittedDate: "2023-04-03",
    status: "Legal Review",
  },
  {
    id: "DEAL-2004",
    borrower: "Susan Taylor",
    amount: "$525,000",
    type: "Residential",
    submittedDate: "2023-04-05",
    status: "Document Review",
  },
  {
    id: "DEAL-2005",
    borrower: "Thomas Brown",
    amount: "$780,000",
    type: "Commercial",
    submittedDate: "2023-04-07",
    status: "Awaiting Approval",
  },
  {
    id: "DEAL-2006",
    borrower: "Patricia Davis",
    amount: "$410,000",
    type: "Residential",
    submittedDate: "2023-04-08",
    status: "Legal Review",
  },
  {
    id: "DEAL-2007",
    borrower: "Michael Garcia",
    amount: "$590,000",
    type: "Commercial",
    submittedDate: "2023-04-10",
    status: "Document Review",
  },
]

export default function PendingDealsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Pending Deals" text="Review and manage deals awaiting approval">
        <Button>
          <LinkIcon className="mr-2 h-4 w-4" />
          Lawyer Portal
        </Button>
      </DashboardHeader>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search deals..." className="w-full pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">Add Deal</Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Borrower</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell className="font-medium">{deal.id}</TableCell>
                  <TableCell>{deal.borrower}</TableCell>
                  <TableCell>{deal.amount}</TableCell>
                  <TableCell>{deal.type}</TableCell>
                  <TableCell>{deal.submittedDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        deal.status === "Awaiting Approval"
                          ? "border-amber-500 text-amber-500"
                          : deal.status === "Legal Review"
                            ? "border-blue-500 text-blue-500"
                            : "border-emerald-500 text-emerald-500"
                      }
                    >
                      {deal.status}
                    </Badge>
                  </TableCell>
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
                        <DropdownMenuItem>Review documents</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Send to lawyer</DropdownMenuItem>
                        <DropdownMenuItem>Request more info</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-emerald-500">Approve deal</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Reject deal</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

