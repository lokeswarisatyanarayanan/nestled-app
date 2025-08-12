import { CreateSlice } from '@state';

import { AppState } from './createSlices';

export interface AppStateSlice {
  authenticated: boolean;
  onboarded: boolean;
  setAuthenticated: (value: boolean) => void;
  setOnboarded: (value: boolean) => void;
}

export const createAppStateSlice: CreateSlice<AppStateSlice, AppState> = set => ({
  authenticated: false,
  onboarded: false,

  setAuthenticated: value =>
    set(state => {
      state.app.authenticated = value;
    }),

  setOnboarded: value =>
    set(state => {
      state.app.onboarded = value;
    }),
});
