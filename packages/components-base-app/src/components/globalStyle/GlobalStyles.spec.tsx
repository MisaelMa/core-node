import GlobalStyles from './GlobalStyles';

describe('GlobalStyles Component', () => {
  it('should renders GlobalStyles correctly', () => {
    expect(GlobalStyles.title1).toHaveProperty('fontSize');
  });
});
