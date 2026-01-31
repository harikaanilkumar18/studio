import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { transactions } from "@/lib/data";
import { CategoryChart } from "@/components/dashboard/category-chart";
import { SpendingSummary } from "@/components/dashboard/spending-summary";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { Recommendations } from "@/components/dashboard/recommendations";

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-headline">Your Financial Summary</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              An AI-powered summary of your spending habits based on your recent activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SpendingSummary />
          </CardContent>
        </Card>
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardTitle className="font-headline">Spending Breakdown</CardTitle>
            <CardDescription>
              Your spending distribution across different categories.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <CategoryChart transactions={transactions} />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle className="font-headline">Recent Transactions</CardTitle>
              <CardDescription>
                A log of your most recent financial activities.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <RecentTransactions transactions={transactions.slice(0, 5)} />
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle className="font-headline">AI Recommendations</CardTitle>
            <CardDescription>
              Personalized tips to help you save money.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Recommendations />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
