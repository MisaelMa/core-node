import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { TORCH_RED } from '@televisaunivision/commons/constants/colors';

import GlobalStyles from '../globalStyle/GlobalStyles';
import GlobalText from '../globalText/GlobalText';

import IDemoComponentProps from './IDemoComponent';

/**
 * return component
 *
 * @param [props] component props
 * @param [props.color] - background color
 * @param [props.screenName] - name to display
 */
const DemoComponent = ({
  color,
  screenName,
}: IDemoComponentProps): JSX.Element => {
  return (
    <View style={[styles.wrapper, { backgroundColor: color }]}>
      <Text testID="screen text" style={GlobalStyles.title1}>
        {screenName}
      </Text>
      <GlobalText textType="body" style={styles.customTextStyle}>
        Custom GlobalText
      </GlobalText>
      <GlobalText textType="title" style={styles.customTextStyle}>
        Custom GlobalText
      </GlobalText>
      <GlobalText textType="subtitle" style={styles.customTextStyle}>
        Custom GlobalText
      </GlobalText>
    </View>
  );
};

const styles = StyleSheet.create({
  customTextStyle: {
    color: TORCH_RED,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

DemoComponent.args = {
  color: 'tomato',
  screenName: 'Test name',
};

export default DemoComponent;
