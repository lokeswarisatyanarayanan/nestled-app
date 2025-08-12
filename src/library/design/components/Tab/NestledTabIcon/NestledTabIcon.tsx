import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';

import { NestledText } from '@components/Core';
import { useTheme } from '@library/design/hooks';

import { tabIconStyles } from './styles';

const ICONS = {
  home: require('@assets/icons/home.png'),
  cart: require('@assets/icons/cart.png'),
  letters: require('@assets/icons/letters.png'),
  inventory: require('@assets/icons/inventory.png'),
} as const;

const TAB_LABELS = {
  home: 'Home',
  cart: 'Cart',
  letters: 'Letters',
  inventory: 'Inventory',
} as const;

type IconKey = keyof typeof ICONS;

export interface NestledTabIconProps {
  routeName: string;
  focused: boolean;
}

export const NestledTabIcon = ({ routeName, focused }: NestledTabIconProps) => {
  const { colors, spacing } = useTheme();
  const icon = ICONS[routeName as IconKey];
  const label = TAB_LABELS[routeName as IconKey];

  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const tabLabelStyle = {
    marginTop: spacing.xxsmall,
    textAlign: 'center' as const,
    minWidth: 80,
    maxWidth: 90,
    fontFamily: focused ? 'Quicksand_600SemiBold' : 'Quicksand_400Regular',
  };

  const triggerAnimation = () => {
    cancelAnimation(scale);
    cancelAnimation(rotate);

    scale.value = 1;

    scale.value = withSpring(1.18, {
      damping: 14,
      stiffness: 400,
      mass: 0.5,
    });

    rotate.value = withSequence(
      withTiming(6, { duration: 150 }),
      withTiming(-6, { duration: 150 }),
      withTiming(0, { duration: 200 }),
    );
  };

  useEffect(() => {
    if (focused) {
      triggerAnimation();
    } else {
      scale.value = withSpring(1);
      rotate.value = withSpring(0);
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  return (
    <View style={tabIconStyles.wrapper}>
      <Animated.View
        style={[
          tabIconStyles.iconContainer,
          {
            backgroundColor: focused ? colors.background.secondary : colors.background.surface,
            borderColor: focused ? colors.border.highlight : colors.border.default,
            borderWidth: focused ? 2 : 1,
          },
          animatedStyle,
        ]}
      >
        <Image
          source={icon}
          style={{
            width: focused ? 26 : 22,
            height: focused ? 26 : 22,
            opacity: focused ? 1 : 0.7,
          }}
          resizeMode="contain"
        />
      </Animated.View>

      <NestledText numberOfLines={1} variant="caption" style={tabLabelStyle}>
        {label}
      </NestledText>
    </View>
  );
};
