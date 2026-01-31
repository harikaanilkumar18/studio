import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="rounded-lg bg-primary/10 p-2">
        <Wallet className="h-6 w-6 text-primary" />
      </div>
      <h1 className="font-headline text-xl font-bold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
        FinOptimize
      </h1>
    </div>
  );
}
