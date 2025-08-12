export type GroceryItem = {
  name: string;
  category: string;
  'category-id': string;
  defaultQuantity: number;
  unit: string;
  frequency: string;
  funFact?: string;
  iconUrl?: string;
};

export type GroceryCategory = {
  name: string;
  slug: string;
  icon: string;
  order?: number;
};
