"use client"
import { ArrowRight, Clock, DollarSign, Home, MoreHorizontal, PieChart, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarNav } from "@/components/sidebar-nav"
import { DealStatusCard } from "@/components/deal-status-card"
import { CountdownTimer } from "@/components/countdown-timer"
import { MonthlySummaryChart } from "@/components/monthly-summary-chart"
import { InvestmentSummary } from "@/components/investment-summary"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarNav className="hidden lg:block" />

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6 md:p-8 bg-background">
        <header className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Jason</h1>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline">
              <DollarSign className="mr-2 h-4 w-4 text-money dark:text-money-dark" />
              Transfer Funds
            </Button>
            <Button>
              <Home className="mr-2 h-4 w-4" />
              New Investment
            </Button>
          </div>
        </header>

        {/* Dashboard Overview */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
              <DollarSign className="h-4 w-4 text-money dark:text-money-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,248,750.00</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Return</CardTitle>
              <PieChart className="h-4 w-4 text-money dark:text-money-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,245.39</div>
              <p className="text-xs text-muted-foreground">+5.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <Home className="h-4 w-4 text-money dark:text-money-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+1 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">YTD ROI</CardTitle>
              <Users className="h-4 w-4 text-money dark:text-money-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7%</div>
              <p className="text-xs text-muted-foreground">+0.3% from previous year</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="in-progress">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="in-progress">In Progress Deals</TabsTrigger>
            <TabsTrigger value="owned">Owned Properties</TabsTrigger>
            <TabsTrigger value="summary">Financial Summary</TabsTrigger>
          </TabsList>

          {/* In Progress Deals */}
          <TabsContent value="in-progress" className="space-y-6">
            <h2 className="text-xl font-semibold mt-6">Deals in Progress</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inProgressDeals.map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full bg-muted">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${deal.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/40 hover:bg-black/60">
                              <MoreHorizontal className="h-4 w-4 text-white" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Modify Investment</DropdownMenuItem>
                            <DropdownMenuItem>Cancel Application</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-lg font-semibold text-white">{deal.address}</h3>
                        <p className="text-sm text-white/80">
                          {deal.city}, {deal.state}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant={getBadgeVariant(deal.status)}>{deal.status}</Badge>
                      <span className="text-sm font-medium">${formatCurrency(deal.investmentAmount)}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{deal.progress}%</span>
                        </div>
                        <Progress value={deal.progress} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Closing Date</span>
                          <span className="font-medium">{formatDate(deal.closingDate)}</span>
                        </div>
                        <div className="flex items-center text-sm text-amber-600">
                          <Clock className="mr-1 h-4 w-4" />
                          <CountdownTimer targetDate={deal.closingDate} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-4 py-3">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Owned Properties */}
          <TabsContent value="owned" className="space-y-6">
            <h2 className="text-xl font-semibold mt-6">Your Property Portfolio</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ownedDeals.map((deal) => (
                <Card key={deal.id}>
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full bg-muted">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${deal.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/40 hover:bg-black/60">
                              <MoreHorizontal className="h-4 w-4 text-white" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>View Documents</DropdownMenuItem>
                            <DropdownMenuItem>Contact Manager</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-lg font-semibold text-white">{deal.address}</h3>
                        <p className="text-sm text-white/80">
                          {deal.city}, {deal.state}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="bg-money/10 text-money dark:bg-money-dark/10 dark:text-money-dark border-money/30 dark:border-money-dark/30"
                      >
                        {deal.mortgageStatus}
                      </Badge>
                      <span className="text-sm font-medium">${formatCurrency(deal.investmentAmount)}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Monthly Return</p>
                          <p className="font-medium text-money dark:text-money-dark">
                            ${formatCurrency(deal.monthlyReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Annual ROI</p>
                          <p className="font-medium">{deal.annualReturn}%</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Occupancy</p>
                        <div className="flex items-center gap-2">
                          <Progress value={deal.occupancyRate} className="h-2" />
                          <span className="text-sm font-medium">{deal.occupancyRate}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-4 py-3">
                    <DealStatusCard
                      status={deal.propertyStatus}
                      lastPayment={deal.lastPaymentDate}
                      nextPayment={deal.nextPaymentDate}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Financial Summary */}
          <TabsContent value="summary" className="space-y-6">
            <h2 className="text-xl font-semibold mt-6">Financial Overview</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle>Monthly Returns</CardTitle>
                  <CardDescription>Your income over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <MonthlySummaryChart />
                </CardContent>
              </Card>
              <Card className="col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle>Investment Summary</CardTitle>
                  <CardDescription>Portfolio allocation by property type</CardDescription>
                </CardHeader>
                <CardContent>
                  <InvestmentSummary />
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Projected Return</CardTitle>
                  <CardDescription>Estimated monthly returns for the next 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-3">
                        <div className="text-sm font-medium">{getFutureMonthName(i)}</div>
                        <div className="mt-1 text-2xl font-bold text-money dark:text-money-dark">
                          ${formatCurrency(7500 + Math.random() * 2000)}
                        </div>
                        <div className="mt-1 flex items-center text-xs">
                          <span className={`${i % 2 === 0 ? "text-green-500" : "text-amber-500"}`}>
                            {i % 2 === 0 ? "+" : "-"}
                            {(Math.random() * 2).toFixed(1)}%
                          </span>
                          <span className="text-muted-foreground ml-1">from current</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Forecast
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Sample data
const inProgressDeals = [
  {
    id: 1,
    address: "742 Evergreen Terrace",
    city: "Springfield",
    state: "IL",
    status: "Under Review",
    investmentAmount: 150000,
    progress: 25,
    closingDate: new Date(Date.now() + 86400000 * 15), // 15 days from now
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    address: "1640 Riverside Drive",
    city: "Hill Valley",
    state: "CA",
    status: "Approved",
    investmentAmount: 225000,
    progress: 60,
    closingDate: new Date(Date.now() + 86400000 * 7), // 7 days from now
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    address: "221B Baker Street",
    city: "London",
    state: "UK",
    status: "Pending Funding",
    investmentAmount: 180000,
    progress: 85,
    closingDate: new Date(Date.now() + 86400000 * 3), // 3 days from now
    image: "/placeholder.svg?height=400&width=600",
  },
]

const ownedDeals = [
  {
    id: 101,
    address: "350 Fifth Avenue",
    city: "New York",
    state: "NY",
    mortgageStatus: "Current",
    propertyStatus: "Occupied",
    investmentAmount: 275000,
    monthlyReturn: 1650.75,
    annualReturn: 7.2,
    occupancyRate: 100,
    lastPaymentDate: "2023-05-01",
    nextPaymentDate: "2023-06-01",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 102,
    address: "1600 Pennsylvania Avenue",
    city: "Washington",
    state: "DC",
    mortgageStatus: "Current",
    propertyStatus: "Under Renovation",
    investmentAmount: 320000,
    monthlyReturn: 1920.5,
    annualReturn: 7.8,
    occupancyRate: 0,
    lastPaymentDate: "2023-05-01",
    nextPaymentDate: "2023-06-01",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 103,
    address: "123 Main Street",
    city: "Anytown",
    state: "OH",
    mortgageStatus: "Current",
    propertyStatus: "Partially Occupied",
    investmentAmount: 195000,
    monthlyReturn: 1170.25,
    annualReturn: 7.2,
    occupancyRate: 50,
    lastPaymentDate: "2023-05-01",
    nextPaymentDate: "2023-06-01",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Helper functions
function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function getBadgeVariant(status: string): "default" | "secondary" | "outline" | "destructive" {
  switch (status) {
    case "Under Review":
      return "secondary"
    case "Approved":
      return "default"
    case "Pending Funding":
      return "outline"
    default:
      return "outline"
  }
}

function getFutureMonthName(monthsAhead: number): string {
  const date = new Date()
  date.setMonth(date.getMonth() + monthsAhead)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

