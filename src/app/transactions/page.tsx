import { transactions } from "@/lib/data";
import TransactionTable from "@/components/transactions/transaction-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TransactionsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Transactions</CardTitle>
          <CardDescription>
            A detailed log of all your financial activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTable data={transactions} />
        </CardContent>
      </Card>
    </main>
  );
}
