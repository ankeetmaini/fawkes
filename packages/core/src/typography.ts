import { Typography, Color } from '../types/index';

export enum FontSizes {
  SMALL = 12,
  REGULAR = 14,
  LARGE = 16,
}

export enum FontWeights {
  REGULAR = 400,
  BOLD = 500,
}

export default function createTypography(colorScheme: Color) {
  const typography: Typography = {
    SMALL: {
      regular: {
        color: colorScheme.primary.dark,
        size: FontSizes.SMALL,
        weight: FontWeights.REGULAR,
      },
      bold: {
        color: colorScheme.primary.darker,
        size: FontSizes.SMALL,
        weight: FontWeights.BOLD,
      },
    },
    REGULAR: {
      regular: {
        color: colorScheme.primary.dark,
        size: FontSizes.REGULAR,
        weight: FontWeights.REGULAR,
      },
      bold: {
        color: colorScheme.primary.darker,
        size: FontSizes.REGULAR,
        weight: FontWeights.BOLD,
      },
    },
    LARGE: {
      regular: {
        color: colorScheme.primary.darker,
        size: FontSizes.LARGE,
        weight: FontWeights.REGULAR,
      },
      bold: {
        color: colorScheme.primary.darker,
        size: FontSizes.LARGE,
        weight: FontWeights.BOLD,
      },
    },
  };
  return typography;
}
