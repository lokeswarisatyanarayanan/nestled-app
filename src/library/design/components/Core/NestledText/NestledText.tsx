import React from 'react';
import { Text } from 'react-native';

import { useTheme } from '@library/design/hooks';
import { textVariants } from '@theme';

import { createTextStyles } from './styles';
import { NestledTextProps } from './types';

export const NestledText = ({
  children,
  variant = 'body1',
  color,
  align = 'left',
  alignVertical,
  textTransform = 'none',
  numberOfLines,
  letterSpacing,
  fontWeight,
  italic,
  style,
  ...props
}: NestledTextProps) => {
  const theme = useTheme();
  const styles = createTextStyles(theme);

  const baseStyle = textVariants[variant];

  const dynamicStyles = {
    color: color ?? theme.colors.text.primary,
    textAlign: align,
    fontWeight,
    textAlignVertical: alignVertical,
    textTransform,
    letterSpacing,
  };

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[baseStyle, styles.base, italic && styles.italic, dynamicStyles, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
