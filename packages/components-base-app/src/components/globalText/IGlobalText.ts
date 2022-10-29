import { StyleProp, TextStyle } from 'react-native';

import { TextType } from '@televisaunivision/commons/constants/native/fonts';

/**
 * Define Global Text props
 */
interface IGlobalTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  textType: keyof typeof TextType;
}

export default IGlobalTextProps;
