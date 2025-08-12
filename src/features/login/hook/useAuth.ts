import { useAppStore } from '@src/state';

export const useAuth = () => {
  const phoneNumber = useAppStore(state => state.auth.phoneNumber);
  const otp = useAppStore(state => state.auth.otp);
  const isLoading = useAppStore(state => state.auth.isLoading);
  const error = useAppStore(state => state.auth.error);

  const setPhoneNumber = useAppStore(state => state.auth.setPhoneNumber);
  const setOtp = useAppStore(state => state.auth.setOtp);
  const clearAuthState = useAppStore(state => state.auth.clearAuthState);
  const login = useAppStore(state => state.auth.login);

  return {
    phoneNumber,
    otp,
    isLoading,
    error,
    setPhoneNumber,
    setOtp,
    clearAuthState,
    login,
  };
};
