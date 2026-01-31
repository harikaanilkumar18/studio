"use client";

import { useEffect, useState } from "react";
import { getSummaryAction } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot } from "lucide-react";

export function SpendingSummary() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const result = await getSummaryAction();
        setSummary(result.summary);
      } catch (e) {
        setSummary("Failed to load summary.");
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 text-sm">
        <div className="p-1.5 bg-primary/10 rounded-full">
            <Bot className="h-4 w-4 text-primary" />
        </div>
        <p className="text-muted-foreground leading-relaxed">
            {summary}
        </p>
    </div>
  );
}
