import type { CreateSlice } from '@src/library/state';
import type { AppState } from '@src/state/createSlices';

export interface AuthSlice {
  phoneNumber: string;
  otp: string;
  isLoading: boolean;
  error: string | null;

  setPhoneNumber: (value: string) => void;
  setOtp: (value: string) => void;
  clearAuthState: () => void;

  login: () => Promise<void>;
}

export const createAuthSlice: CreateSlice<AuthSlice, AppState> = set => ({
  phoneNumber: '',
  otp: '',
  isLoading: false,
  error: null,

  setPhoneNumber: value =>
    set(state => {
      state.auth.phoneNumber = value;
    }),

  setOtp: value =>
    set(state => {
      state.auth.otp = value;
    }),

  clearAuthState: () =>
    set(state => {
      state.auth.phoneNumber = '';
      state.auth.otp = '';
      state.auth.error = null;
      state.auth.isLoading = false;
    }),

  login: async () => {
    set(state => {
      state.auth.isLoading = true;
      state.auth.error = null;
    });

    try {
      await new Promise(res => setTimeout(res, 1200));
      set(state => {
        state.app.authenticated = true;
      });
    } catch (error: any) {
      set(state => {
        state.auth.error = error?.message ?? 'Login failed.';
      });
    } finally {
      set(state => {
        state.auth.isLoading = false;
      });
    }
  },
});
