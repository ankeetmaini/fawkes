import Colors from './colors';
import { Typography } from '../types/types';

export enum FontSizes {
  SMALL = 12,
  REGULAR = 14,
  LARGE = 16,
}

export enum FontWeights {
  REGULAR = 400,
  BOLD = 500,
}

// FIXME need to overrite this at app start with
// custom theme passed
const Typography: Typography = {
  SMALL: {
    regular: {
      color: Colors.primary.dark,
      size: FontSizes.SMALL,
      weight: FontWeights.REGULAR,
    },
    bold: {
      color: Colors.primary.darker,
      size: FontSizes.SMALL,
      weight: FontWeights.BOLD,
    },
  },
  REGULAR: {
    regular: {
      color: Colors.primary.dark,
      size: FontSizes.REGULAR,
      weight: FontWeights.REGULAR,
    },
    bold: {
      color: Colors.primary.darker,
      size: FontSizes.REGULAR,
      weight: FontWeights.BOLD,
    },
  },
  LARGE: {
    regular: {
      color: Colors.primary.darker,
      size: FontSizes.LARGE,
      weight: FontWeights.REGULAR,
    },
    bold: {
      color: Colors.primary.darker,
      size: FontSizes.LARGE,
      weight: FontWeights.BOLD,
    },
  },
};

export default Typography;
