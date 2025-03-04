"use client"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", amount: 5200 },
  { month: "Feb", amount: 5350 },
  { month: "Mar", amount: 6100 },
  { month: "Apr", amount: 5900 },
  { month: "May", amount: 6250 },
  { month: "Jun", amount: 7500 },
  { month: "Jul", amount: 7250 },
  { month: "Aug", amount: 7800 },
  { month: "Sep", amount: 8000 },
  { month: "Oct", amount: 8200 },
  { month: "Nov", amount: 8100 },
  { month: "Dec", amount: 8250 },
]

export function MonthlySummaryChart() {
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `$${value / 1000}k`
    }
    return `$${value}`
  }

  const formatTooltipValue = (value: number) => {
    return `$${value.toLocaleString()}`
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background text-foreground px-3 py-2 rounded-md shadow-md border border-muted text-sm">
          <p className="font-medium">{label}</p>
          <p>
            Income:{" "}
            <span className="text-money dark:text-money-dark font-medium">${payload[0].value.toLocaleString()}</span>
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--grid-color, #333)"
            className="dark:[--grid-color:#555]"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text-color, #888)" }}
            className="dark:[--text-color:#aaa]"
          />
          <YAxis
            tickFormatter={formatYAxis}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text-color, #888)" }}
            className="dark:[--text-color:#aaa]"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="amount"
            fill="var(--chart-color, #16a34a)"
            radius={[4, 4, 0, 0]}
            barSize={30}
            className="dark:[--chart-color:#22c55e]"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

