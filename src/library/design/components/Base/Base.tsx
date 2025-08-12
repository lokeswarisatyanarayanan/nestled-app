import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@providers/ThemeProvider';

type BaseProps = {
  children: React.ReactNode;
};

export const Base = ({ children }: BaseProps): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
};
