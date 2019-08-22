import React, { FunctionComponent } from 'react';

interface ProviderProps {
  theme?: Partial<Theme>;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  textColor: string;
}

const defaultTheme: Theme = {
  primaryColor: '#6979F8',
  secondaryColor: '#FFCF5C',
  fontFamily: 'Roboto',
  textColor: '#FFFFFF',
};

const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider: FunctionComponent<ProviderProps> = ({
  theme,
  children,
}) => {
  const themeContext = { ...defaultTheme, ...theme };
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Context = ThemeContext;
