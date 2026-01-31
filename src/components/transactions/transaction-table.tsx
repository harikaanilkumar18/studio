"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Transaction, type TransactionCategory } from "@/lib/types";
import { ArrowDown, ArrowUp } from "lucide-react";

type SortKey = keyof Transaction | "";

export default function TransactionTable({ data }: { data: Transaction[] }) {
  const [filter, setFilter] = React.useState("");
  const [categoryFilter, setCategoryFilter] =
    React.useState<TransactionCategory | "all">("all");
  const [sortConfig, setSortConfig] = React.useState<{
    key: SortKey;
    direction: "ascending" | "descending";
  } | null>({ key: "date", direction: "descending" });

  const sortedAndFilteredData = React.useMemo(() => {
    let sortableData = [...data];

    if (filter) {
      sortableData = sortableData.filter((item) =>
        item.description.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      sortableData = sortableData.filter(
        (item) => item.category === categoryFilter
      );
    }

    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  }, [data, filter, categoryFilter, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const categories: TransactionCategory[] = [
    "Shopping", "Food", "Travel", "Bills", "Entertainment", "Other"
  ];

  const SortableHeader = ({ sortKey, children }: { sortKey: SortKey, children: React.ReactNode }) => {
    const isSorted = sortConfig?.key === sortKey;
    return (
        <TableHead onClick={() => requestSort(sortKey)} className="cursor-pointer hover:bg-muted/50">
            <div className="flex items-center gap-2">
                {children}
                {isSorted && (sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />)}
            </div>
        </TableHead>
    );
  }

  return (
    <div>
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Filter by description..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
        <Select
          value={categoryFilter}
          onValueChange={(value) =>
            setCategoryFilter(value as TransactionCategory | "all")
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <SortableHeader sortKey="description">Description</SortableHeader>
              <SortableHeader sortKey="category">Category</SortableHeader>
              <SortableHeader sortKey="date">Date</SortableHeader>
              <SortableHeader sortKey="amount">Amount</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredData.length ? (
              sortedAndFilteredData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(transaction.date).toLocaleDateString("en-CA")}
                  </TableCell>
                  <TableCell className="text-right">
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
