"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Single Family", value: 45, color: "#16a34a" },
  { name: "Multi-Family", value: 30, color: "#0ea5e9" },
  { name: "Commercial", value: 15, color: "#8b5cf6" },
  { name: "Mixed Use", value: 10, color: "#f59e" },
  { name: "Commercial", value: 15, color: "#8b5cf6" },
  { name: "Mixed Use", value: 10, color: "#f59e0b" },
]

export function InvestmentSummary() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background text-foreground px-3 py-2 rounded-md shadow-md border border-muted text-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p>
            <span className="text-money dark:text-money-dark font-medium">{payload[0].value}%</span> of portfolio
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-80 w-full flex items-center justify-center">
      <div className="h-64 w-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

