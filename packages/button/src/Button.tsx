// ref https://tympanus.net/Development/CreativeButtons/

import React, { FunctionComponent, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '@fawkes/core';
import { ThemeType } from '@fawkes/core/types';
import DancingDots from '@fawkes/loader';

type Size = 's' | 'r' | 'l';
interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  loading?: boolean;
  label: string;
  size: Size;
  type?: 'button' | 'submit' | 'reset';
}

const getStyles = (buttonSize: Size, theme: ThemeType) => {
  const factor = {
    s: 0,
    r: 8,
    l: 14,
  };
  const font = {
    s: theme.typography.SMALL.bold,
    r: theme.typography.REGULAR.bold,
    l: theme.typography.LARGE.bold,
  }[buttonSize];

  const padding = {
    s: '6px 10px',
    r: '8px 12px',
    l: '10px 14px',
  }[buttonSize];
  const { size } = font;
  return { padding, size: size + factor[buttonSize] };
};
const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const { disabled, label, size, loading, ...rest } = props;
  const { padding, size: fontSize } = getStyles(size, theme);
  const StyledButton = styled.button`
    display: inline-block;
    position: relative;
    padding: ${padding};
    margin: 2px 0;
    font-size: ${fontSize}px;
    color: ${theme.colorScheme.secondary.base};
    background: ${theme.colorScheme.primary.base};
    cursor: ${disabled ? 'not-allowed' : 'default'};
    opacity: ${disabled ? 0.7 : 1};
    z-index: 0;
    border-radius: 4px;
    &:after {
      display: block;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: ${theme.colorScheme.secondary.base};
      transform-origin: 50% 50%;
      transition: transform 0.2s, opacity 0.2s;
      transform: scaleX(0);
      opacity: 0;
    }
    &:hover {
      color: ${theme.colorScheme.primary.base};
      &:after {
        transform: scaleX(0.8);
        opacity: 1;
      }
    }
    &:active {
      &:after {
        transform: scaleX(1);
      }
    }
  `;
  return (
    <StyledButton disabled={disabled} type="button" {...rest}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{loading && <DancingDots dotCount={3} />}</span>{' '}
        <span>{label}</span>
      </span>
    </StyledButton>
  );
};

export default Button;
