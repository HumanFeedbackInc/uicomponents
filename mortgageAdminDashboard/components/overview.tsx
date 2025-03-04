"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    "New Deals": 45,
    "Completed Deals": 32,
  },
  {
    name: "Feb",
    "New Deals": 52,
    "Completed Deals": 38,
  },
  {
    name: "Mar",
    "New Deals": 61,
    "Completed Deals": 43,
  },
  {
    name: "Apr",
    "New Deals": 58,
    "Completed Deals": 47,
  },
  {
    name: "May",
    "New Deals": 65,
    "Completed Deals": 52,
  },
  {
    name: "Jun",
    "New Deals": 74,
    "Completed Deals": 58,
  },
]

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal Overview</CardTitle>
        <CardDescription>Monthly deal activity for the current year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="New Deals" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Completed Deals" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

