import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ThemeProvider from '@fawkes/core';
import { matchers } from 'jest-emotion';
import DancingDots from '../DancingDots';

expect.extend(matchers);
afterEach(cleanup);

describe('loaders', () => {
  test('dancing dots renders', async () => {
    const { asFragment } = render(
      <ThemeProvider>
        <DancingDots dotCount={3} />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('dancing dots animation delay is correct', () => {
    const { container } = render(<DancingDots dotCount={3} />);
    const spans = container.querySelectorAll('span');
    expect(spans[0]).toHaveStyleRule(
      'animation',
      'animation-0 1800ms linear infinite 0ms',
    );
    expect(spans[1]).toHaveStyleRule(
      'animation',
      'animation-0 1800ms linear infinite 100ms',
    );
    expect(spans[2]).toHaveStyleRule(
      'animation',
      'animation-0 1800ms linear infinite 300ms',
    );
  });
});
