import React, { FunctionComponent } from 'react';
import { Color, ThemeType } from '../types/index';
import colorScheme from './ColorScheme';
import createTypography from './Typography';
interface ProviderProps {
  customColorScheme?: Color;
}

const initialContext: ThemeType = {
  colorScheme,
  typography: createTypography(colorScheme),
};

const ThemeContext = React.createContext(initialContext);

const ThemeProvider: FunctionComponent<ProviderProps> = ({
  customColorScheme,
  children,
}) => {
  const themeContext = customColorScheme
    ? {
        colorScheme: customColorScheme,
        typography: createTypography(customColorScheme),
      }
    : initialContext;
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const Context = ThemeContext;
