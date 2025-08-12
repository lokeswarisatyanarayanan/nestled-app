import { getLineHeight } from '../utils/';

export const typography = {
  fonts: {
    primary: {
      regular: 'Nunito_700Bold',
      bold: 'Nunito_700Bold',
    },
    secondary: {
      regular: 'Quicksand_400Regular',
      bold: 'Quicksand_600SemiBold',
    },
  },
  sizes: {
    xxsmall: 9,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 24,
    xxxlarge: 32,
    display: 40,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
  letterSpacings: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
};

export const textVariants = {
  h1: {
    fontFamily: typography.fonts.primary.bold,
    fontSize: typography.sizes.xxxlarge,
    lineHeight: getLineHeight(typography.sizes.xxxlarge, typography.lineHeights.tight),
  },
  h2: {
    fontFamily: typography.fonts.primary.bold,
    fontSize: typography.sizes.xxlarge,
    lineHeight: getLineHeight(typography.sizes.xxlarge, typography.lineHeights.tight),
  },
  h3: {
    fontFamily: typography.fonts.primary.bold,
    fontSize: typography.sizes.xlarge,
    lineHeight: getLineHeight(typography.sizes.xlarge, typography.lineHeights.tight),
  },
  h4: {
    fontFamily: typography.fonts.primary.regular,
    fontSize: typography.sizes.large,
    lineHeight: getLineHeight(typography.sizes.large, typography.lineHeights.tight),
  },
  h5: {
    fontFamily: typography.fonts.secondary.bold,
    fontSize: typography.sizes.medium,
    lineHeight: getLineHeight(typography.sizes.medium, typography.lineHeights.tight),
  },
  h6: {
    fontFamily: typography.fonts.secondary.regular,
    fontSize: typography.sizes.large,
    lineHeight: getLineHeight(typography.sizes.small, typography.lineHeights.tight),
  },
  body1: {
    fontFamily: typography.fonts.secondary.regular,
    fontSize: typography.sizes.medium,
    lineHeight: getLineHeight(typography.sizes.medium, typography.lineHeights.normal),
  },
  body2: {
    fontFamily: typography.fonts.secondary.regular,
    fontSize: typography.sizes.small,
    lineHeight: getLineHeight(typography.sizes.small, typography.lineHeights.normal),
  },
  button: {
    fontFamily: typography.fonts.primary.bold,
    fontSize: typography.sizes.medium,
    lineHeight: getLineHeight(typography.sizes.medium, typography.lineHeights.normal),
  },
  caption: {
    fontFamily: typography.fonts.secondary.regular,
    fontSize: typography.sizes.xsmall,
    lineHeight: getLineHeight(typography.sizes.xsmall, typography.lineHeights.normal),
  },
  footnote: {
    fontFamily: typography.fonts.secondary.regular,
    fontSize: typography.sizes.xxsmall,
    lineHeight: getLineHeight(typography.sizes.xsmall, typography.lineHeights.normal),
  },
};
