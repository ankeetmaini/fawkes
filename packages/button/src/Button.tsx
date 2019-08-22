// ref https://tympanus.net/Development/CreativeButtons/

import React, { FunctionComponent, useContext } from 'react';
import styled from '@emotion/styled';
import ThemeProvider from '@fawkes/core';

type Size = 'regular' | 'large' | 'small';
interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  loading?: boolean;
  label: string;
  size: Size;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  secondary?: boolean;
}

interface ButtonStyles {
  padding: string;
  color: string;
  fontSize: number;
  width: number;
  height: number;
}
interface ButtonType {
  size: Size;
  secondary: boolean | undefined;
}

const getStyles = (
  { secondary, size }: ButtonType,
  theme: ThemeProvider.Theme,
): ButtonStyles => {
  const color = secondary ? theme.secondaryColor : theme.primaryColor;
  switch (size) {
    case 'small': {
      return {
        color,
        padding: '4px 16px',
        fontSize: 12,
        width: 86,
        height: 24,
      };
    }

    case 'regular': {
      return {
        color,
        padding: '6px 18px',
        fontSize: 14,
        width: 90,
        height: 32,
      };
    }

    case 'large': {
      return {
        color,
        padding: '6px 18px',
        fontSize: 16,
        width: 94,
        height: 32,
      };
    }
  }
};
const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const theme = useContext(ThemeProvider.Context);
  const { disabled, label, size, loading, secondary, ...rest } = props;
  const { padding, fontSize, color, width, height } = getStyles(
    { size, secondary },
    theme,
  );
  const StyledButton = styled.button`
    display: inline-block;
    padding: ${padding};
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
    background: ${disabled ? 'rgba(9, 30, 66, 0.04)' : color};
    cursor: ${disabled ? 'not-allowed' : 'auto'};
    border-radius: 3px;
    border: none;
    transition: transform 0.1s;
    &:active:not([disabled]) {
      transform: translateY(3px);
    }
  `;

  const StyledSpan = styled.span`
    font-family: ${theme.fontFamily};
    color: ${disabled ? '#A5ADBA' : theme.textColor};
  `;

  return (
    <StyledButton disabled={disabled} type="button" {...rest}>
      <StyledSpan>{label}</StyledSpan>
    </StyledButton>
  );
};

export default Button;
