import { StyleSheet } from 'react-native';

import { Theme } from '../../../theme';

export const createTextStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      color: theme.colors.text.primary,
    },
    italic: {
      fontStyle: 'italic',
    },
  });
