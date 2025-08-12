import { StyleSheet } from 'react-native';

import { useTheme } from '@library/design/hooks';

export function useStyles() {
  const theme = useTheme();

  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background.surface,
        padding: theme.spacing.large,
      },
      hero: {
        backgroundColor: '#FFF4F7',
        paddingHorizontal: theme.spacing.large,
        paddingVertical: theme.spacing.xlarge,
        borderBottomLeftRadius: theme.radius.xlarge,
        borderBottomRightRadius: theme.radius.xlarge,
        alignItems: 'center',
        marginBottom: theme.spacing.xlarge,
      },
      title: {
        color: theme.colors.text.primary,
        marginBottom: theme.spacing.small,
      },
      subtitle: {
        color: theme.colors.text.secondary,
        textAlign: 'center',
      },
    }),
  };
}
