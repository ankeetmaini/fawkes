import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { Context } from '../ThemeProvider';
import { ThemeType } from '../../types/index';

describe('theme provider', () => {
  test('provider injects default theme', () => {
    let theme: ThemeType | null = null;

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
