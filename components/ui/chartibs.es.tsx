"use client";

import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { stage: "Boca/Esófago", absorption: 0, fermentation: 0, osmotic: 0 },
  { stage: "Estómago", absorption: 10, fermentation: 0, osmotic: 5 },
  { stage: "Intestino Delgado", absorption: 70, fermentation: 10, osmotic: 20 },
  {
    stage: "Inicio Intestino Grueso",
    absorption: 80,
    fermentation: 40,
    osmotic: 50,
  },
  {
    stage: "Medio Intestino Grueso",
    absorption: 90,
    fermentation: 70,
    osmotic: 70,
  },
  {
    stage: "Final Intestino Grueso",
    absorption: 100,
    fermentation: 100,
    osmotic: 90,
  },
];

export function FODMAPChartES() {
  const [colors, setColors] = useState({
    chart1: "",
    chart2: "",
    chart3: "",
  });

  useEffect(() => {
    const root = document.documentElement;
    const chart1 = getComputedStyle(root).getPropertyValue("--chart-1").trim();
    const chart2 = getComputedStyle(root).getPropertyValue("--chart-2").trim();
    const chart3 = getComputedStyle(root).getPropertyValue("--chart-3").trim();

    setColors({
      chart1: `hsl(${chart1})`,
      chart2: `hsl(${chart2})`,
      chart3: `hsl(${chart3})`,
    });
  }, []);

  const chartConfig = {
    absorption: {
      label: "Absorción",
      color: colors.chart1,
    },
    fermentation: {
      label: "Fermentación",
      color: colors.chart2,
    },
    osmotic: {
      label: "Efecto Osmótico",
      color: colors.chart3,
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Efectos de los FODMAPs en el SII</CardTitle>
        <CardDescription>
          Mostrando el impacto acumulativo de los FODMAPs a través del sistema
          digestivo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="stage"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={{
                value: "Efecto Acumulativo (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="absorption"
              stroke={colors.chart1}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="fermentation"
              stroke={colors.chart2}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="osmotic"
              stroke={colors.chart3}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Los FODMAPs desencadenan síntomas del SII{" "}
              <Info className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              El gráfico muestra los efectos acumulativos a medida que los
              alimentos avanzan por el sistema digestivo
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
