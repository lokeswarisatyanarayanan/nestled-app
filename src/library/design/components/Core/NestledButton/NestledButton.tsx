import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';

import { useTheme } from '@library/design/hooks';

import { createButtonStyles } from './styles';
import { NestledButtonProps } from './types';

export const NestledButton = ({
  label,
  onPress,
  variant = 'solid',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}: NestledButtonProps) => {
  const theme = useTheme();
  const styles = createButtonStyles(theme);

  const containerStyle = [
    styles.base,
    variant === 'solid' && styles.solid,
    variant === 'outlined' && styles.outlined,
    variant === 'link' && styles.link,
    disabled && { opacity: 0.6 },
    style,
  ];

  const labelStyle = [
    styles.text,
    variant === 'solid' && styles.solidText,
    variant === 'outlined' && styles.outlinedText,
    variant === 'link' && styles.linkText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.button.text} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
          <Text style={labelStyle}>{label}</Text>
          {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
        </View>
      )}
    </TouchableOpacity>
  );
};
