import { StyleSheet } from 'react-native';

import { Theme } from '../../../theme';

export const createTextInputStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    label: {
      fontFamily: theme.typography.fonts.secondary.regular,
      fontSize: theme.typography.sizes.small,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing.xsmall,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.border.soft,
      borderRadius: theme.radius.medium,
      backgroundColor: theme.colors.background.card,
      paddingHorizontal: theme.spacing.medium,
    },
    icon: {
      marginHorizontal: theme.spacing.xsmall,
    },
    input: {
      flex: 1,
      paddingVertical: theme.spacing.small,
      fontFamily: theme.typography.fonts.secondary.regular,
      fontSize: theme.typography.sizes.medium,
      color: theme.colors.text.primary,
    },
  });
