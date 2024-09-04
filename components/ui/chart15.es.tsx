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
  { year: "2019", hombres: 400, mujeres: 600 },
  { year: "2020", hombres: 800, mujeres: 1200 },
  { year: "2021", hombres: 1200, mujeres: 1800 },
  { year: "2022", hombres: 1500, mujeres: 2250 },
  { year: "2023", hombres: 1800, mujeres: 2700 },
  { year: "2024", hombres: 2000, mujeres: 3000 },
];

const chartConfig = {
  hombres: {
    label: "Hombres",
    color: "hsl(var(--chart-2))",
  },
  mujeres: {
    label: "Mujeres",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Chart15Es() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Demanda de Consultas FODMAP por Género</CardTitle>
        <CardDescription>
          Mostrando consultas para hombres y mujeres de 2019 a 2024
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
              <linearGradient id="fillHombres" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-hombres)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-hombres)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMujeres" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mujeres)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mujeres)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="hombres"
              type="monotone"
              fill="url(#fillHombres)"
              fillOpacity={0.4}
              stroke="var(--color-hombres)"
              stackId="1"
            />
            <Area
              dataKey="mujeres"
              type="monotone"
              fill="url(#fillMujeres)"
              fillOpacity={0.4}
              stroke="var(--color-mujeres)"
              stackId="1"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Aumento del 400% en consultas totales en 5 años{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Demanda consistentemente más alta en mujeres que en hombres
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}