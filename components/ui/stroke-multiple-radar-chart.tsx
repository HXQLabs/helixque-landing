"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 92 },
  { month: "February", desktop: 305, mobile: 178 },
  { month: "March", desktop: 237, mobile: 145 },
  { month: "April", desktop: 273, mobile: 203 },
  { month: "May", desktop: 209, mobile: 167 },
  { month: "June", desktop: 298, mobile: 132 },
  { month: "July", desktop: 245, mobile: 189 },
  { month: "August", desktop: 312, mobile: 156 },
  { month: "September", desktop: 187, mobile: 210 },
  { month: "October", desktop: 263, mobile: 124 },
  { month: "November", desktop: 229, mobile: 198 },
  { month: "December", desktop: 276, mobile: 172 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function StrokeMultipleRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>
          Radar Chart
          <Badge
            variant="outline"
            className="text-green-500 bg-green-500/10 border-none ml-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>5.2%</span>
          </Badge>
        </CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid strokeDasharray="3 3" />
            <Radar
              stroke="var(--color-desktop)"
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.1}
            />
            <Radar
              stroke="var(--color-mobile)"
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
