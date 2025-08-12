import type { SpacingKey, BackgroundColorKey } from '../components/Screen/types';
import type { Theme } from '../theme';

export const getSpacingValue = (
  theme: Theme,
  spacing?: SpacingKey | number,
): number | undefined => {
  if (typeof spacing === 'number') return spacing;
  if (typeof spacing === 'string') return theme.spacing[spacing];
  return undefined;
};

export const getBackgroundColor = (
  theme: Theme,
  colorKey?: BackgroundColorKey | string,
): string | undefined => {
  if (!colorKey) return undefined;
  if (typeof colorKey === 'string') {
    if (colorKey === 'primary' || colorKey === 'secondary') {
      return theme.colors.background[colorKey as BackgroundColorKey];
    }
    return colorKey;
  }
  return theme.colors.background[colorKey];
};

export const getLineHeight = (fontSize: number, multiplier: number): number => {
  return Math.round(fontSize * multiplier);
};
