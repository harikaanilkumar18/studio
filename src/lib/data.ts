import type { Transaction, Voucher } from './types';
import { PlaceHolderImages } from './placeholder-images';

function getVendorLogo(vendor: string) {
  const image = PlaceHolderImages.find(img => img.description.toLowerCase().includes(vendor.toLowerCase()));
  return image ? { url: image.imageUrl, hint: image.imageHint } : { url: 'https://picsum.photos/seed/default/100/100', hint: 'logo' };
}

export const transactions: Transaction[] = [
  { id: 'txn_1', date: '2024-07-25', description: 'Starbucks Coffee', amount: 460, category: 'Food' },
  { id: 'txn_2', date: '2024-07-25', description: 'Amazon Purchase', amount: 7199, category: 'Shopping' },
  { id: 'txn_3', date: '2024-07-24', description: 'Netflix Subscription', amount: 1239, category: 'Entertainment' },
  { id: 'txn_4', date: '2024-07-24', description: 'Uber Ride', amount: 1784, category: 'Travel' },
  { id: 'txn_5', date: '2024-07-23', description: 'Grocery Store', amount: 9960, category: 'Food' },
  { id: 'txn_6', date: '2024-07-22', description: 'Electricity Bill', amount: 6000, category: 'Bills' },
  { id: 'txn_7', date: '2024-07-21', description: 'Zara', amount: 12000, category: 'Shopping' },
  { id: 'txn_8', date: '2024-07-20', description: 'Dinner at Italian Restaurant', amount: 6816, category: 'Food' },
  { id: 'txn_9', date: '2024-07-19', description: 'Movie Tickets', amount: 2560, category: 'Entertainment' },
  { id: 'txn_10', date: '2024-07-18', description: 'Train Ticket', amount: 3640, category: 'Travel' },
  { id: 'txn_11', date: '2024-07-17', description: 'Internet Bill', amount: 4800, category: 'Bills' },
  { id: 'txn_12', date: '2024-07-16', description: 'Lunch with friends', amount: 3424, category: 'Food' },
  { id: 'txn_13', date: '2024-07-15', description: 'H&M', amount: 4799, category: 'Shopping' },
  { id: 'txn_14', date: '2024-07-14', description: 'Spotify Premium', amount: 799, category: 'Entertainment' },
  { id: 'txn_15', date: '2024-07-13', description: 'Gasoline', amount: 4400, category: 'Travel' },
  { id: 'txn_16', date: '2024-07-12', description: 'Water Bill', amount: 3200, category: 'Bills' },
  { id: 'txn_17', date: '2024-07-11', description: 'Bookstore', amount: 2000, category: 'Shopping' },
  { id: 'txn_18', date: '2024-07-10', description: 'Takeout Pizza', amount: 2280, category: 'Food' },
  { id: 'txn_19', date: '2024-07-09', description: 'Concert Tickets', amount: 9600, category: 'Entertainment' },
  { id: 'txn_20', date: '2024-07-08', description: 'Flight to NYC', amount: 28000, category: 'Travel' },
  { id: 'txn_21', date: '2024-07-07', description: 'Phone Bill', amount: 7600, category: 'Bills' },
  { id: 'txn_22', date: '2024-07-06', description: 'Sephora', amount: 6144, category: 'Shopping' },
  { id: 'txn_23', date: '2024-07-05', description: 'Breakfast Cafe', amount: 1512, category: 'Food' },
  { id: 'txn_24', date: '2024-07-04', description: 'Video Game Purchase', amount: 4799, category: 'Entertainment' },
  { id: 'txn_25', date: '2024-07-03', description: 'Parking Fee', amount: 1200, category: 'Travel' },
];

export const vouchers: Voucher[] = [
  { 
    id: 'v_1', 
    name: '₹4000 Amazon Gift Card',
    description: 'Use this gift card for any purchase on Amazon.in.',
    price: 3600.00,
    originalValue: 4000.00,
    expiryDate: '2025-12-31',
    vendor: 'Amazon',
    vendorLogoUrl: getVendorLogo('Amazon').url,
    vendorImageHint: getVendorLogo('Amazon').hint
  },
  { 
    id: 'v_2', 
    name: '₹2000 Starbucks Card',
    description: 'Enjoy your favorite coffee or treat at any Starbucks location.',
    price: 1600.00,
    originalValue: 2000.00,
    expiryDate: '2025-08-01',
    vendor: 'Starbucks',
    vendorLogoUrl: getVendorLogo('Starbucks').url,
    vendorImageHint: getVendorLogo('Starbucks').hint
  },
  { 
    id: 'v_3', 
    name: '1 Month Netflix Premium',
    description: 'Binge-watch your favorite shows and movies in Ultra HD.',
    price: 600.00,
    originalValue: 799.00,
    expiryDate: '2024-11-30',
    vendor: 'Netflix',
    vendorLogoUrl: getVendorLogo('Netflix').url,
    vendorImageHint: getVendorLogo('Netflix').hint
  },
  { 
    id: 'v_4', 
    name: '₹8000 Zara e-Gift Card',
    description: 'Update your wardrobe with the latest trends from Zara.',
    price: 6800.00,
    originalValue: 8000.00,
    expiryDate: '2026-01-15',
    vendor: 'Zara',
    vendorLogoUrl: getVendorLogo('Zara').url,
    vendorImageHint: getVendorLogo('Zara').hint
  },
  { 
    id: 'v_5', 
    name: '₹1500 Uber Credit',
    description: 'Get a discount on your next ride with Uber.',
    price: 1200.00,
    originalValue: 1500.00,
    expiryDate: '2024-10-01',
    vendor: 'Uber',
    vendorLogoUrl: getVendorLogo('Uber').url,
    vendorImageHint: getVendorLogo('Uber').hint
  },
  { 
    id: 'v_6', 
    name: '₹2400 Zomato Voucher',
    description: 'Order from your favorite local restaurants.',
    price: 2000.00,
    originalValue: 2400.00,
    expiryDate: '2024-09-22',
    vendor: 'Zomato',
    vendorLogoUrl: getVendorLogo('Zomato').url,
    vendorImageHint: getVendorLogo('Zomato').hint
  },
  {
    id: 'v_7',
    name: '₹4000 Sephora Gift Card',
    description: 'For all your beauty and skincare needs.',
    price: 3400.00,
    originalValue: 4000.00,
    expiryDate: '2025-06-30',
    vendor: 'Sephora',
    vendorLogoUrl: getVendorLogo('Sephora').url,
    vendorImageHint: getVendorLogo('Sephora').hint
  },
  {
    id: 'v_8',
    name: '1 Year Spotify Premium',
    description: 'Ad-free music listening for a whole year.',
    price: 1199.00,
    originalValue: 1428.00,
    expiryDate: '2025-03-01',
    vendor: 'Spotify',
    vendorLogoUrl: getVendorLogo('Spotify').url,
    vendorImageHint: getVendorLogo('Spotify').hint
  },
  {
    id: 'v_9',
    name: '₹8000 Airbnb Voucher',
    description: 'Book your next vacation stay with Airbnb.',
    price: 7200.00,
    originalValue: 8000.00,
    expiryDate: '2026-07-01',
    vendor: 'Airbnb',
    vendorLogoUrl: getVendorLogo('Airbnb').url,
    vendorImageHint: getVendorLogo('Airbnb').hint
  },
];
