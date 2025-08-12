import { useEffect, useMemo, useState } from 'react';

import { useAppStore } from '@src/state';

import type { WithId } from '@/library/firebase/firestore/client';

import type { GroceryCategory, GroceryItem } from '../service';

export interface UseHomeReturn {
  groceryItems: WithId<GroceryItem>[];
  groceryCategories: WithId<GroceryCategory>[];
  isLoading: boolean;
  error: string | null;
  searchResults: WithId<GroceryItem>[];
  categoryFilteredItems: WithId<GroceryItem>[];
  selectedCategory: string;
  searchText: string;
  clearError: () => void;
  setSelectedCategory: (category: string) => void;
  setSearchText: (text: string) => void;
}

export const useHome = (): UseHomeReturn => {
  const groceryItems = useAppStore(state => state.home.groceryItems);
  const groceryCategories = useAppStore(state => state.home.groceryCategories);
  const isLoading = useAppStore(state => state.home.isLoading);
  const error = useAppStore(state => state.home.error);
  const fetchGroceryItems = useAppStore(state => state.home.fetchGroceryItems);
  const fetchGroceryCategories = useAppStore(state => state.home.fetchGroceryCategories);
  const clearError = useAppStore(state => state.home.clearError);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchGroceryItems();
    fetchGroceryCategories();
  }, [fetchGroceryItems, fetchGroceryCategories]);

  useEffect(() => {
    if (!selectedCategory && groceryCategories.length > 0) {
      setSelectedCategory(groceryCategories[0].slug);
    }
  }, [groceryCategories]);

  const searchResults = useMemo(() => {
    const normalized = searchText.trim().toLowerCase();
    if (!normalized) return [];

    return groceryItems.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(normalized);
      return nameMatch;
    });
  }, [groceryItems, groceryCategories, searchText]);

  const categoryFilteredItems = useMemo(() => {
    if (!selectedCategory) return [];
    return groceryItems.filter(
      item => item['category-id']?.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [groceryItems, selectedCategory]);

  return {
    groceryItems,
    groceryCategories,
    isLoading,
    error,
    searchResults,
    categoryFilteredItems,
    selectedCategory,
    searchText,
    clearError,
    setSelectedCategory,
    setSearchText,
  };
};
