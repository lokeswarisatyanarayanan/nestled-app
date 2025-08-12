import { ReactNode } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';

export interface NestledTextInputProps extends TextInputProps {
  label?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
