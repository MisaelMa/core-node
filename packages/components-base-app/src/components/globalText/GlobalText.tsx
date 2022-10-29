import React from 'react';
import { Text } from 'react-native';

import type IGlobalTextProps from './IGlobalText';
import { styles } from './styles';

/**
 * return component
 *
 * @param [props] component props
 * @param [props.children] - real text to show
 * @param [props.style] - custom style
 * @param [props.textType] - predefined styles like title, subtitle, body, button (TextType)
 */
const GlobalText = ({
  children,
  style,
  textType,
}: IGlobalTextProps): JSX.Element => {
  const predefinedStyle = styles[textType];

  return <Text style={[predefinedStyle, style]}>{children}</Text>;
};

export default GlobalText;
