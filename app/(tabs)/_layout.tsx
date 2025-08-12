import React from 'react';

import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@library/design/hooks';

import { NestledTabIcon, type NestledTabIconProps } from '@/library/design/components/Tab';
import {
  NestledTabButton,
  type NestledTabButtonProps,
} from '@/library/design/components/Tab/NestledTabButton';

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { colors, spacing } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }: { route: { name: string } }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90 + insets.bottom,
          backgroundColor: colors.background,
          borderTopWidth: 0,
          paddingBottom: insets.bottom + spacing.small,
          paddingTop: spacing.medium,
        },
        tabBarShowLabel: false,
        tabBarButton: (props: NestledTabButtonProps) => <NestledTabButton {...props} />,
        tabBarIcon: ({ focused }: Pick<NestledTabIconProps, 'focused'>) => (
          <NestledTabIcon routeName={route.name} focused={focused} />
        ),
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="letters" />
      <Tabs.Screen name="inventory" />
    </Tabs>
  );
};

export default TabsLayout;
