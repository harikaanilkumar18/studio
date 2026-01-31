export type TransactionCategory = 'Shopping' | 'Food' | 'Travel' | 'Bills' | 'Entertainment' | 'Other';

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: TransactionCategory;
};

export type Voucher = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalValue: number;
  expiryDate: string;
  vendor: string;
  vendorLogoUrl: string;
  vendorImageHint: string;
};
