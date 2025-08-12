import { TextProps, TextStyle } from 'react-native';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'footnote';

export interface NestledTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
  align?: TextStyle['textAlign'];
  alignVertical?: TextStyle['textAlignVertical'];
  fontWeight?: TextStyle['fontWeight'];
  textTransform?: TextStyle['textTransform'];
  numberOfLines?: number;
  lineHeight?: number;
  letterSpacing?: number;
  fontSize?: number;
  italic?: boolean;
}
