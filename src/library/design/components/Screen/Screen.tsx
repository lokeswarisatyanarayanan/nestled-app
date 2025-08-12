import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, type ViewStyle } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@library/design/hooks';
import { getSpacingValue, getBackgroundColor } from '@library/design/utils';

import { screenStyles } from './styles';
import type { ScreenProps } from './types';

export const Screen: React.FC<ScreenProps> = ({
  children,
  padding = 'screenPadding',
  paddingHorizontal,
  paddingVertical,
  backgroundColor = 'primary',
  scroll = false,
  keyboardAvoiding = true,
  safeArea = true,
  style,
  contentContainerStyle,
  scrollViewProps,
  ...rest
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const resolvedPadding = getSpacingValue(theme, padding);

  const screenStyle: ViewStyle = {
    padding: resolvedPadding,
    paddingHorizontal: getSpacingValue(theme, paddingHorizontal),
    paddingVertical: getSpacingValue(theme, paddingVertical),
    backgroundColor: getBackgroundColor(theme, backgroundColor),
    paddingTop: safeArea ? insets.top + Number(resolvedPadding) : resolvedPadding,
    paddingBottom: safeArea ? insets.bottom + Number(resolvedPadding) : resolvedPadding,
  };

  const content = scroll ? (
    <ScrollView
      style={[screenStyles.scrollView, style]}
      contentContainerStyle={[screenStyle, screenStyles.scrollContent, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[screenStyles.container, screenStyle, style]} {...rest}>
      {children}
    </View>
  );

  const wrappedContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={screenStyles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      {content}
    </KeyboardAvoidingView>
  ) : (
    content
  );

  return (
    <View
      style={[screenStyles.root, { backgroundColor: getBackgroundColor(theme, backgroundColor) }]}
    >
      {wrappedContent}
    </View>
  );
};
