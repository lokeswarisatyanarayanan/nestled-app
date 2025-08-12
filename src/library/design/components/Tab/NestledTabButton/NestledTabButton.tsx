import React from 'react';
import { Pressable, GestureResponderEvent } from 'react-native';

import { tabButtonStyles } from './styles';

export interface NestledTabButtonProps {
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityState?: { selected?: boolean };
  routeName: string;
  focused: boolean;
}

export const NestledTabButton = ({ children, onPress }: NestledTabButtonProps) => {
  return (
    <Pressable onPress={onPress} style={tabButtonStyles.container}>
      {children}
    </Pressable>
  );
};
