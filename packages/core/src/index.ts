import ThemeProvider, { Context } from './ThemeProvider';
import { Omit as OmitType } from '../types/index';
export default ThemeProvider;

export const ThemeContext = Context;
export type Omit<U, V> = OmitType<U, V>;
