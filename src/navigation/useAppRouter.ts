import { useRouter } from 'expo-router';

import { routes } from './routes';

export const useAppRouter = () => {
  const router = useRouter();

  return {
    goToHome: () => router.push(routes.home),
    goToCart: () => router.push(routes.cart),
    goToInventory: () => router.push(routes.inventory),
    goToLetters: () => router.push(routes.letters),
    back: () => router.back(),
    raw: router,
  };
};
