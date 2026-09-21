export interface SaffronProduct {
  id: string;
  name: string;
  category: 'super-negin' | 'sargol' | 'gift-box' | 'accessory';
  categoryLabel: string;
  badge?: string;
  batchCode: string;
  price: number; // in Tomans
  originalPrice?: number;
  weightGrams: number;
  weightLabel: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  packagingType: string;
  crocinLevel: number;
  safranalLevel: number;
  picrocrocinLevel: number;
  origin: string;
  harvestYear: string;
  inStock: boolean;
}

export interface CartItem {
  product: SaffronProduct;
  quantity: number;
}

export interface BatchAnalysis {
  batchCode: string;
  productName: string;
  grade: string;
  harvestLocation: string;
  harvestDate: string;
  labTestDate: string;
  crocin: number; // Color strength (Std > 220, Zarrin > 290)
  safranal: number; // Aroma (Std 30-50)
  picrocrocin: number; // Flavor / Bitterness (Std > 70)
  moisture: number; // Humidity % (Max 10%)
  foreignMatter: number; // Floral waste % (Max 0.5%)
  microbiologyStatus: 'Pass' | 'Certified Grade A+';
  labInspector: string;
  isoStandard: string;
  healthLicense: string;
}
