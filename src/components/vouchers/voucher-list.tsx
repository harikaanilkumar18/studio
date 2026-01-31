"use client";

import * as React from "react";
import Image from "next/image";
import { type Voucher } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface VoucherListProps {
  vouchers: Voucher[];
}

export function VoucherList({ vouchers }: VoucherListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredVouchers = React.useMemo(() => {
    return vouchers.filter(
      (voucher) =>
        voucher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        voucher.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [vouchers, searchTerm]);

  const calculateDiscount = (price: number, originalValue: number) => {
    if (originalValue === 0) return 0;
    return Math.round(((originalValue - price) / originalValue) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Input
          placeholder="Search for vouchers (e.g., Amazon, Starbucks)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      {filteredVouchers.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredVouchers.map((voucher) => (
            <Card key={voucher.id} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <Image
                  src={voucher.vendorLogoUrl}
                  alt={`${voucher.vendor} logo`}
                  width={50}
                  height={50}
                  className="rounded-full border"
                  data-ai-hint={voucher.vendorImageHint}
                />
                <div className="flex-1">
                  <CardTitle className="font-headline text-lg">{voucher.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{voucher.vendor}</p>
                </div>
                <Badge variant="secondary" className="bg-accent/50 text-accent-foreground">
                  {calculateDiscount(voucher.price, voucher.originalValue)}% off
                </Badge>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {voucher.description}
                </p>
                <div className="mt-4 text-xs text-muted-foreground">
                  Expires: {new Date(voucher.expiryDate).toLocaleDateString()}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">₹{voucher.price.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground line-through">₹{voucher.originalValue.toFixed(2)}</p>
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Sparkles className="mr-2 h-4 w-4" /> Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-muted-foreground">
          <p>No vouchers found matching your search.</p>
        </div>
      )}
    </div>
  );
}
