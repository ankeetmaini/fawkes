import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { ThemeConsumer } from '../ThemeProvider';
import { ThemeType } from '../../types/index';

describe('theme provider', () => {
  test('provider injects default theme', () => {
    let theme: ThemeType | null = null;

    render(
      <ThemeProvider>
        <ThemeConsumer>
          {t => {
            theme = t;
            return <div />;
          }}
        </ThemeConsumer>
      </ThemeProvider>,
    );

    expect(theme).toBeTruthy();
  });
});
