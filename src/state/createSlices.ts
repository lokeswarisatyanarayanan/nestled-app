import type { TypedStateCreator } from '@state';

import { type AuthSlice, createAuthSlice } from '@/features/login/state';

import { createAppStateSlice, type AppStateSlice } from './appStateSlice';
import { createHomeSlice, type HomeSlice } from '../features/home/state/slice';
/**
 * AppState interface that includes all slices.
 */
export interface AppState {
  app: AppStateSlice;
  home: HomeSlice;
  auth: AuthSlice;
  resetAppState: () => void;
}

/**
 * Combines all slices into the store.
 */

export const createSlices: TypedStateCreator<AppState, AppState> = (set, get, store) => {
  return {
    app: createAppStateSlice(set, get, store),
    home: createHomeSlice(set, get, store),
    auth: createAuthSlice(set, get, store),
    resetAppState: () => {
      set(() => ({
        app: createAppStateSlice(set, get, store),
        home: createHomeSlice(set, get, store),
        auth: createAuthSlice(set, get, store),
      }));
    },
  };
};
