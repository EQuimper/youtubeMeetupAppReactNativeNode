import { Font } from 'exponent';

export const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font));
