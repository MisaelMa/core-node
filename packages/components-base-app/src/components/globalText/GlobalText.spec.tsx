import { Platform } from 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import * as styleProps from './styles';
import GlobalText from './GlobalText';

jest.mock('./styles', () => ({
  styles: jest.fn(),
}));

const originalPlatform = Platform.OS;

describe('GlobalText component', () => {
  afterAll(() => {
    Platform.OS = originalPlatform;
  });
  it('should render demo correctly in Android', () => {
    Platform.OS = 'android';
    styleProps.styles.title = {
      fontFamily: 'RobotoFlex-VariableFont',
    };

    const screen = render(<GlobalText textType="title">test</GlobalText>);
    const comp = screen.getByText('test');
    const [{ fontFamily }] = comp.props.style;

    expect(fontFamily).toBe('RobotoFlex-VariableFont');
  });
  it('should render demo correctly in iOS', () => {
    Platform.OS = 'ios';
    styleProps.styles.title = {
      fontFamily: 'Roboto Flex',
    };
    const screen = render(<GlobalText textType="title">test</GlobalText>);
    const comp = screen.getByText('test');
    const [{ fontFamily }] = comp.props.style;

    expect(fontFamily).toBe('Roboto Flex');
  });
});
