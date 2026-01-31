"use client";

import { useEffect, useState } from "react";
import { getRecommendationsAction } from "@/app/actions";
import { type PersonalizedRecommendationsOutput } from "@/ai/flows/personalized-spending-recommendations";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb } from "lucide-react";

export function Recommendations() {
  const [data, setData] = useState<PersonalizedRecommendationsOutput | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const result = await getRecommendationsAction();
        setData(result);
      } catch (e) {
        setData({ recommendations: [] });
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    );
  }

  if (!data?.recommendations.length) {
    return <p className="text-sm text-muted-foreground">No recommendations available at this time.</p>;
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {data.recommendations.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-sm text-left hover:no-underline">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-4 w-4 flex-shrink-0 text-primary" />
              <span className="font-medium">{item.recommendation}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10 text-muted-foreground">
            {item.reason}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
