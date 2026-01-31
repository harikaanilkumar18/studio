import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoucherList } from "@/components/vouchers/voucher-list";
import { SellVoucherForm } from "@/components/vouchers/sell-voucher-form";
import { vouchers } from "@/lib/data";

export default function VouchersPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Tabs defaultValue="buy">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="buy">Buy Vouchers</TabsTrigger>
            <TabsTrigger value="sell">Sell a Voucher</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="buy">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Voucher Marketplace</CardTitle>
              <CardDescription>
                Discover and purchase unused vouchers at a discount.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VoucherList vouchers={vouchers} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sell">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Sell Your Voucher</CardTitle>
              <CardDescription>
                List your unused vouchers, gift cards, and coupons for others to buy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SellVoucherForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
