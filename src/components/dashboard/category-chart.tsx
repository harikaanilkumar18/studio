"use client";

import * as React from "react";
import { ChartContainer, DonutChart, type ChartConfig } from "@/components/ui/chart";
import { type Transaction } from "@/lib/types";

interface CategoryChartProps {
  transactions: Transaction[];
}

const chartConfig = {
  amount: {
    label: "Amount",
  },
  Shopping: {
    label: "Shopping",
    color: "hsl(var(--chart-1))",
  },
  Food: {
    label: "Food",
    color: "hsl(var(--chart-2))",
  },
  Travel: {
    label: "Travel",
    color: "hsl(var(--chart-3))",
  },
  Bills: {
    label: "Bills",
    color: "hsl(var(--chart-4))",
  },
  Entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-5))",
  },
  Other: {
    label: "Other",
    color: "hsl(var(--muted))",
  },
} satisfies ChartConfig;

export function CategoryChart({ transactions }: CategoryChartProps) {
  const chartData = React.useMemo(() => {
    const categoryTotals = transactions.reduce((acc, transaction) => {
      acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryTotals).map(([category, amount]) => ({
      category,
      amount: Math.round(amount),
      fill: `var(--color-${category})`,
    }));
  }, [transactions]);
  
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, [chartData]);


  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-48"
    >
        <DonutChart
            data={chartData}
            category="amount"
            index="category"
            valueFormatter={(value) =>
                `₹${new Intl.NumberFormat("en-IN").format(value)}`
            }
            colors={["Shopping", "Food", "Travel", "Bills", "Entertainment", "Other"]}
            showLabel={true}
            showAnimation={true}
            label={
              <div className="text-center">
                <p className="text-2xl font-bold">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-muted-foreground">Total Spent</p>
              </div>
            }
        />
    </ChartContainer>
  );
}
