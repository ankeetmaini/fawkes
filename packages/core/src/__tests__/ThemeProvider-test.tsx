import React from 'react';
import { render } from '@testing-library/react';
import { Context, ThemeProvider, Theme } from '../ThemeProvider';

describe('theme provider', () => {
  test('provider injects default theme', () => {
    let theme: Theme | null = null;

    render(
      <ThemeProvider>
        <Context.Consumer>
          {t => {
            theme = t;
            return <div />;
          }}
        </Context.Consumer>
      </ThemeProvider>,
    );

    expect(theme).toBeTruthy();
  });
});
