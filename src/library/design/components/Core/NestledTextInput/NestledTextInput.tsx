import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { useTheme } from '@library/design/hooks';

import { createTextInputStyles } from './styles';
import { NestledTextInputProps } from './types';

export const NestledTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  editable = true,
  multiline = false,
  keyboardType = 'default',
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  inputContainerStyle,
  style,
  ...props
}: NestledTextInputProps) => {
  const theme = useTheme();
  const styles = createTextInputStyles(theme);

  return (
    <View style={[styles.container, inputContainerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputWrapper}>
        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          multiline={multiline}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
      </View>
    </View>
  );
};
