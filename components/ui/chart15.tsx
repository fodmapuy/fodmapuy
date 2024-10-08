"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: "2019", men: 400, women: 600 },
  { year: "2020", men: 800, women: 1200 },
  { year: "2021", men: 1200, women: 1800 },
  { year: "2022", men: 1500, women: 2250 },
  { year: "2023", men: 1800, women: 2700 },
  { year: "2024", men: 2000, women: 3000 },
];

const chartConfig = {
  men: {
    label: "Men",
    color: "hsl(var(--chart-2))",
  },
  women: {
    label: "Women",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Chart15() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>FODMAP Consultation Demand by Gender</CardTitle>
        <CardDescription>
          Showing consultations for men and women from 2019 to 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillMen" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-men)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-men)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillWomen" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-women)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-women)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="men"
              type="monotone"
              fill="url(#fillMen)"
              fillOpacity={0.4}
              stroke="var(--color-men)"
              stackId="1"
            />
            <Area
              dataKey="women"
              type="monotone"
              fill="url(#fillWomen)"
              fillOpacity={0.4}
              stroke="var(--color-women)"
              stackId="1"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              400% increase in total consultations over 5 years{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Women consistently higher demand than men
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
