import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { useFonts } from 'expo-font';
import { Slot, Redirect, Href } from 'expo-router';

import { Base } from '@components';
import { hydrateStoreFromSecureStorage, useAppStore } from '@src/state';

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Quicksand_400Regular,
    Quicksand_600SemiBold,
  });

  const authenticated = useAppStore(state => state.app.authenticated);
  const onboarded = useAppStore(state => state.app.onboarded);

  useEffect(() => {
    const bootstrap = async () => {
      const set = useAppStore.setState;
      await hydrateStoreFromSecureStorage(set);
      setReady(true);
    };

    bootstrap();
  }, []);

  if (!ready || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  let redirectTo: Href = '/(unauthenticated)/onboarding';

  if (!onboarded) {
    redirectTo = '/(unauthenticated)/onboarding';
  } else if (!authenticated) {
    redirectTo = '/(unauthenticated)/login';
  } else {
    redirectTo = '/(tabs)/home';
  }

  return (
    <Base>
      <Redirect href={redirectTo} />
      <Slot />
    </Base>
  );
}
