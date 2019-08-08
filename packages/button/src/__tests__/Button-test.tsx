import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ThemeProvider from '@fawkes/core';
import { matchers } from 'jest-emotion';
import Button from '../index';

expect.extend(matchers);
afterEach(cleanup);

describe('button', () => {
  test('button renders', async () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button label="Submit" size="l"></Button>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('button hover animation works', () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Button label="Submit" size="l"></Button>
        </ThemeProvider>,
      )
      .toJSON();

    // FIXME why is this not working?
    // button's :after element to have transform: scaleX(0)
    // expect(tree).toHaveStyleRule('transform', 'scaleX(0)', {
    //   target: ':after',
    // });

    expect(tree).toHaveStyleRule('transform', 'scaleX(1)', {
      target: ':active:after',
    });

    expect(tree).toHaveStyleRule('transform', 'scaleX(0.8)', {
      target: ':hover:after',
    });
  });

  test('props are propagated', async () => {
    const onClick = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <Button
          label="Submit"
          size="l"
          onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
        ></Button>
      </ThemeProvider>,
    );
    const button = await getByText(/Submit/);
    fireEvent.click(button);
    fireEvent.focus(button);
    fireEvent.blur(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
