import { StyleSheet } from 'react-native';

import { spacing } from '@theme';

export const styles = StyleSheet.create({
  sidebar: {
    width: 90,
    alignItems: 'center',
    borderRightWidth: 1,
  },
  categoryWrapper: {
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  iconCircle: {
    padding: spacing.large,
    borderRadius: 999,
    marginBottom: spacing.xsmall,
  },
});
