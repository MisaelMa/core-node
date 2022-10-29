import { Platform, StyleProp, TextStyle } from 'react-native';

import {
  GOLDEN_RATIO,
  POPPINS_BOLD,
  POPPINS_REGULAR,
  ROBOTO_FLEX_ANDROID,
  ROBOTO_FLEX_IOS,
} from '@televisaunivision/commons/constants/native/fonts';

import IGlobalTextProps from './IGlobalText';

export const FONTS_FAMILY = {
  POPPINS_BOLD,
  POPPINS_REGULAR,
  ROBOTO_FLEX: Platform.select({
    android: ROBOTO_FLEX_ANDROID,
    ios: ROBOTO_FLEX_IOS,
  }),
} as const;

type TextTypeStyles = {
  [key in IGlobalTextProps['textType']]: StyleProp<TextStyle>;
};

export const styles: TextTypeStyles = {
  body: {
    fontFamily: FONTS_FAMILY.POPPINS_REGULAR,
    fontSize: 16 / GOLDEN_RATIO,
  },
  button: {
    fontFamily: FONTS_FAMILY.POPPINS_BOLD,
    fontSize: 26 / GOLDEN_RATIO,
  },
  subtitle: {
    fontFamily: FONTS_FAMILY.ROBOTO_FLEX,
    fontSize: 42 / GOLDEN_RATIO,
    fontWeight: '600',
  },
  title: {
    fontFamily: FONTS_FAMILY.ROBOTO_FLEX,
    fontSize: 68 / GOLDEN_RATIO,
    fontWeight: '700',
  },
} as const;
