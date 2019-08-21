import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Theme from '@fawkes/core';
import renderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import Button from '../Button';

expect.extend(matchers);
afterEach(cleanup);

describe('button', () => {
  test('button renders', async () => {
    const { asFragment } = render(
      <Theme.ThemeProvider>
        <Button label="Submit" size="regular"></Button>
      </Theme.ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('button hover animation works', async () => {
    const tree = renderer
      .create(
        <Theme.ThemeProvider>
          <Button label="Submit" size="regular"></Button>
        </Theme.ThemeProvider>,
      )
      .toJSON();

    expect(tree).toHaveStyleRule('transform', 'translateY(3px)', {
      target: ':active',
    });
  });

  test('button disabled works', async () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Theme.ThemeProvider>
        <Button
          label="Submit"
          size="regular"
          disabled
          onClick={onClick}
        ></Button>
      </Theme.ThemeProvider>,
    );
    const button = await getByText(/Submit/);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('props are propagated', async () => {
    const onClick = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByText } = render(
      <Theme.ThemeProvider>
        <Button
          size="regular"
          label="Submit"
          onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
        ></Button>
      </Theme.ThemeProvider>,
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
