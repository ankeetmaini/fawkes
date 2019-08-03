import React, { FunctionComponent } from 'react';
import { Color } from '../types/index';
import Theme from './index';

interface ProviderProps {
  customColorScheme?: Color;
}

const { colorScheme, createTypography } = Theme;
const initialContext = {
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
