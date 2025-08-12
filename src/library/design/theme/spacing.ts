const baseUnit = 4;

export const spacing = {
  xxsmall: baseUnit * 0.5,
  xsmall: baseUnit,
  small: baseUnit * 2,
  medium: baseUnit * 3,
  large: baseUnit * 4,
  xlarge: baseUnit * 6,
  xxlarge: baseUnit * 8,
  screenPadding: baseUnit * 4,
  get: (multiplier = 1): number => baseUnit * multiplier,
};
