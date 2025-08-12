import { StyleSheet, Dimensions } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@library/design/hooks';

export const useStyles = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const sidebarWidth = 100;
  const horizontalPadding = theme.spacing.large * 2;
  const gap = theme.spacing.large;
  const availableWidth = screenWidth - sidebarWidth - horizontalPadding - gap;
  const cardWidth = availableWidth / 2;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
    main: {
      flex: 1,
      paddingTop: theme.spacing.large + insets.top,
    },
    searchWrapper: {
      paddingHorizontal: theme.spacing.large,
      marginBottom: theme.spacing.medium,
    },
    listContent: {
      paddingBottom: theme.spacing.xlarge,
      paddingHorizontal: theme.spacing.large,
      rowGap: theme.spacing.large,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    card: {
      width: cardWidth,
    },
  });

  return { styles };
};
