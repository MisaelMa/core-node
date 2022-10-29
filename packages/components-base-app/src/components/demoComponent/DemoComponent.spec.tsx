import React from 'react';
import { render } from '@testing-library/react-native';

import DemoComponent from './DemoComponent';

describe('demo tests', () => {
  it('renders demo', () => {
    const comp = render(<DemoComponent screenName="test" />);
    expect(comp.getByTestId('screen text').props.children).toBe('test');
  });
});
