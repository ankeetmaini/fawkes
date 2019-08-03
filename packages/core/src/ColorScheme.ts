import { Color, ColorShades } from '../types/index';

const purple: ColorShades = {
  lightest: '#9560B1',
  lighter: '#884CA7',
  light: '#7B389D',
  base: '#6E2594',
  dark: '#642287',
  darker: '#5B1F7A',
  darkest: '#511B6C',
};
const lavendar: ColorShades = {
  lightest: '#EEE1F4',
  lighter: '#ECDEF3',
  light: '#EADAF2',
  base: '#E8D7F1',
  dark: '#D3C4DC',
  darker: '#BEB0C6',
  darkest: '#A99DB0',
};

const Colors: Color = {
  primary: purple,
  secondary: lavendar,
};

export default Colors;
