import type { Transaction, Voucher } from './types';
import { PlaceHolderImages } from './placeholder-images';

function getVendorLogo(vendor: string) {
  const image = PlaceHolderImages.find(img => img.description.toLowerCase().includes(vendor.toLowerCase()));
  return image ? { url: image.imageUrl, hint: image.imageHint } : { url: 'https://picsum.photos/seed/default/100/100', hint: 'logo' };
}

export const transactions: Transaction[] = [
  { id: 'txn_1', date: '2024-07-25', description: 'Starbucks Coffee', amount: 5.75, category: 'Food' },
  { id: 'txn_2', date: '2024-07-25', description: 'Amazon Purchase', amount: 89.99, category: 'Shopping' },
  { id: 'txn_3', date: '2024-07-24', description: 'Netflix Subscription', amount: 15.49, category: 'Entertainment' },
  { id: 'txn_4', date: '2024-07-24', description: 'Uber Ride', amount: 22.30, category: 'Travel' },
  { id: 'txn_5', date: '2024-07-23', description: 'Grocery Store', amount: 124.50, category: 'Food' },
  { id: 'txn_6', date: '2024-07-22', description: 'Electricity Bill', amount: 75.00, category: 'Bills' },
  { id: 'txn_7', date: '2024-07-21', description: 'Zara', amount: 150.00, category: 'Shopping' },
  { id: 'txn_8', date: '2024-07-20', description: 'Dinner at Italian Restaurant', amount: 85.20, category: 'Food' },
  { id: 'txn_9', date: '2024-07-19', description: 'Movie Tickets', amount: 32.00, category: 'Entertainment' },
  { id: 'txn_10', date: '2024-07-18', description: 'Train Ticket', amount: 45.50, category: 'Travel' },
  { id: 'txn_11', date: '2024-07-17', description: 'Internet Bill', amount: 60.00, category: 'Bills' },
  { id: 'txn_12', date: '2024-07-16', description: 'Lunch with friends', amount: 42.80, category: 'Food' },
  { id: 'txn_13', date: '2024-07-15', description: 'H&M', amount: 59.99, category: 'Shopping' },
  { id: 'txn_14', date: '2024-07-14', description: 'Spotify Premium', amount: 9.99, category: 'Entertainment' },
  { id: 'txn_15', date: '2024-07-13', description: 'Gasoline', amount: 55.00, category: 'Travel' },
  { id: 'txn_16', date: '2024-07-12', description: 'Water Bill', amount: 40.00, category: 'Bills' },
  { id: 'txn_17', date: '2024-07-11', description: 'Bookstore', amount: 25.00, category: 'Shopping' },
  { id: 'txn_18', date: '2024-07-10', description: 'Takeout Pizza', amount: 28.50, category: 'Food' },
  { id: 'txn_19', date: '2024-07-09', description: 'Concert Tickets', amount: 120.00, category: 'Entertainment' },
  { id: 'txn_20', date: '2024-07-08', description: 'Flight to NYC', amount: 350.00, category: 'Travel' },
  { id: 'txn_21', date: '2024-07-07', description: 'Phone Bill', amount: 95.00, category: 'Bills' },
  { id: 'txn_22', date: '2024-07-06', description: 'Sephora', amount: 76.80, category: 'Shopping' },
  { id: 'txn_23', date: '2024-07-05', description: 'Breakfast Cafe', amount: 18.90, category: 'Food' },
  { id: 'txn_24', date: '2024-07-04', description: 'Video Game Purchase', amount: 59.99, category: 'Entertainment' },
  { id: 'txn_25', date: '2024-07-03', description: 'Parking Fee', amount: 15.00, category: 'Travel' },
];

export const vouchers: Voucher[] = [
  { 
    id: 'v_1', 
    name: '$50 Amazon Gift Card',
    description: 'Use this gift card for any purchase on Amazon.com.',
    price: 45.00,
    originalValue: 50.00,
    expiryDate: '2025-12-31',
    vendor: 'Amazon',
    vendorLogoUrl: getVendorLogo('Amazon').url,
    vendorImageHint: getVendorLogo('Amazon').hint
  },
  { 
    id: 'v_2', 
    name: '$25 Starbucks Card',
    description: 'Enjoy your favorite coffee or treat at any Starbucks location.',
    price: 20.00,
    originalValue: 25.00,
    expiryDate: '2025-08-01',
    vendor: 'Starbucks',
    vendorLogoUrl: getVendorLogo('Starbucks').url,
    vendorImageHint: getVendorLogo('Starbucks').hint
  },
  { 
    id: 'v_3', 
    name: '1 Month Netflix Premium',
    description: 'Binge-watch your favorite shows and movies in Ultra HD.',
    price: 12.00,
    originalValue: 19.99,
    expiryDate: '2024-11-30',
    vendor: 'Netflix',
    vendorLogoUrl: getVendorLogo('Netflix').url,
    vendorImageHint: getVendorLogo('Netflix').hint
  },
  { 
    id: 'v_4', 
    name: '$100 Zara e-Gift Card',
    description: 'Update your wardrobe with the latest trends from Zara.',
    price: 85.00,
    originalValue: 100.00,
    expiryDate: '2026-01-15',
    vendor: 'Zara',
    vendorLogoUrl: getVendorLogo('Zara').url,
    vendorImageHint: getVendorLogo('Zara').hint
  },
  { 
    id: 'v_5', 
    name: '$20 Uber Credit',
    description: 'Get a discount on your next ride with Uber.',
    price: 16.00,
    originalValue: 20.00,
    expiryDate: '2024-10-01',
    vendor: 'Uber',
    vendorLogoUrl: getVendorLogo('Uber').url,
    vendorImageHint: getVendorLogo('Uber').hint
  },
  { 
    id: 'v_6', 
    name: '$30 DoorDash Voucher',
    description: 'Order from your favorite local restaurants.',
    price: 25.00,
    originalValue: 30.00,
    expiryDate: '2024-09-22',
    vendor: 'DoorDash',
    vendorLogoUrl: getVendorLogo('DoorDash').url,
    vendorImageHint: getVendorLogo('DoorDash').hint
  },
  {
    id: 'v_7',
    name: '$50 Sephora Gift Card',
    description: 'For all your beauty and skincare needs.',
    price: 42.50,
    originalValue: 50.00,
    expiryDate: '2025-06-30',
    vendor: 'Sephora',
    vendorLogoUrl: getVendorLogo('Sephora').url,
    vendorImageHint: getVendorLogo('Sephora').hint
  },
  {
    id: 'v_8',
    name: '1 Year Spotify Premium',
    description: 'Ad-free music listening for a whole year.',
    price: 90.00,
    originalValue: 119.88,
    expiryDate: '2025-03-01',
    vendor: 'Spotify',
    vendorLogoUrl: getVendorLogo('Spotify').url,
    vendorImageHint: getVendorLogo('Spotify').hint
  },
  {
    id: 'v_9',
    name: '$100 Airbnb Voucher',
    description: 'Book your next vacation stay with Airbnb.',
    price: 90.00,
    originalValue: 100.00,
    expiryDate: '2026-07-01',
    vendor: 'Airbnb',
    vendorLogoUrl: getVendorLogo('Airbnb').url,
    vendorImageHint: getVendorLogo('Airbnb').hint
  },
];
