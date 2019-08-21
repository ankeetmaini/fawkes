import * as ThemeProvider from './ThemeProvider';

export default ThemeProvider;

export type Omit<U, V> = Pick<U, Exclude<keyof U, V>>;
