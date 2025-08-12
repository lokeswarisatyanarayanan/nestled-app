import { getCollection } from '@/library/firebase/firestore/client';
import type { WithId } from '@/library/firebase/firestore/client';

import type { GroceryCategory, GroceryItem } from './types';

export const getGroceryItems = async (): Promise<WithId<GroceryItem>[]> => {
  return await getCollection<GroceryItem>('groceryItems');
};

export const getGroceryCategories = async (): Promise<WithId<GroceryCategory>[]> => {
  return await getCollection<GroceryCategory>('groceryCategories');
};
