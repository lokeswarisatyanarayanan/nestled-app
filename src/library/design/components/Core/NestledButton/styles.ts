import { StyleSheet } from 'react-native';

import type { Theme } from '@theme';

export const createButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius.medium,
      paddingVertical: theme.spacing.medium,
      paddingHorizontal: theme.spacing.large,
    },
    solid: {
      backgroundColor: theme.colors.button.primary,
    },
    outlined: {
      borderWidth: 1,
      borderColor: theme.colors.button.primary,
      backgroundColor: 'transparent',
    },
    link: {
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
    },
    text: {
      fontFamily: theme.typography.fonts.primary.bold,
      fontSize: theme.typography.sizes.medium,
    },
    solidText: {
      color: theme.colors.button.text,
    },
    outlinedText: {
      color: theme.colors.button.primary,
    },
    linkText: {
      color: theme.colors.button.primary,
    },
    icon: {
      marginHorizontal: 4,
    },
  });
