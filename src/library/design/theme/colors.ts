const palette = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  pink100: '#fff4f7',
  pink200: '#ffe5ec',
  pink300: '#fcdde6',
  pink400: '#ffb8cf',
  pink500: '#FFDFEB',
  pink700: '#FBB6CE',

  green500: '#99C5A3',
  green700: '#4CAF50',

  primary500: '#3b82f6',
  success500: '#10b981',
  warning500: '#f59e0b',
  error500: '#ef4444',

  neutral900: '#111827',
  neutral700: '#374151',
  neutral600: '#666666',
  neutral500: '#6b7280',
  neutral400: '#bbbbbb',
  neutral300: '#d1d5db',
  neutral100: '#f3f4f6',
  neutral50: '#f9fafb',

  gray999: '#999999',
  gray888: '#888888',
  pinkShadow: '#ffc4dd',
  pinkAccent: '#e86d92',
};

export const colors = {
  background: {
    primary: palette.pink100,
    secondary: palette.pink200,
    surface: palette.pink300,
    card: palette.white,
    elevated: palette.neutral100,
    tabBar: palette.pink500,
    sidebar: palette.pink200,
    overlay: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    primary: palette.neutral900,
    secondary: palette.neutral600,
    muted: palette.gray888,
    inverse: palette.white,
    placeholder: palette.neutral400,
  },
  border: {
    default: palette.pink200,
    soft: palette.pink300,
    highlight: palette.green500,
  },
  icon: {
    active: palette.pinkAccent,
    inactive: palette.gray999,
  },
  button: {
    primary: palette.green700,
    secondary: palette.pink700,
    text: palette.white,
  },
  shadow: {
    primary: palette.pinkAccent,
    soft: palette.pinkShadow,
    card: palette.black,
  },
  palette,
};
