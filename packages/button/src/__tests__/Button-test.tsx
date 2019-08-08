import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '@fawkes/core';
import Button from '../index';
describe('button', () => {
  test('button renders', async () => {
    const { findByText } = render(
      <ThemeProvider>
        <Button label="Submit" size="l"></Button>
      </ThemeProvider>,
    );
    const text = await findByText(/button/);
    expect(text).toBeDefined();
  });
});
