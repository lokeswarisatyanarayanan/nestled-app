import type { CreateSlice } from '@src/library/state';
import type { AppState } from '@src/state/createSlices';

import type { WithId } from '@/library/firebase/firestore/client';

import { getGroceryCategories, getGroceryItems } from '../service';
import type { GroceryCategory, GroceryItem } from '../service';

export interface HomeSlice {
  groceryItems: WithId<GroceryItem>[];
  groceryCategories: WithId<GroceryCategory>[];
  isLoading: boolean;
  error: string | null;
  fetchGroceryItems: () => Promise<void>;
  fetchGroceryCategories: () => Promise<void>;
  clearError: () => void;
}

export const createHomeSlice: CreateSlice<HomeSlice, AppState> = set => ({
  groceryItems: [],
  groceryCategories: [],
  isLoading: false,
  error: null,

  clearError: () => {
    set(state => {
      state.home.error = null;
    });
  },

  fetchGroceryItems: async () => {
    set(state => {
      state.home.isLoading = true;
      state.home.error = null;
    });

    try {
      const groceryData = await getGroceryItems();

      set(state => {
        state.home.groceryItems = groceryData;
      });
    } catch (error: any) {
      set(state => {
        state.home.error = error?.message ?? 'Failed to load grocery items';
      });
    } finally {
      set(state => {
        state.home.isLoading = false;
      });
    }
  },

  fetchGroceryCategories: async () => {
    try {
      const categories = await getGroceryCategories();
      const sorted = [...categories].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      set(state => {
        state.home.groceryCategories = sorted;
      });
    } catch (error: any) {
      set(state => {
        state.home.error = error?.message ?? 'Failed to load categories';
      });
    }
  },
});
