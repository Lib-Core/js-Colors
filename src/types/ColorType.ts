export type ColorTypeHex = 'hex' | 'hex_alpha';
export type ColorTypeRgb = 'rgb' | 'rgba';
export type ColorTypeHsl = 'hsla' | 'hsl';
type ColorType = ColorTypeHex | ColorTypeRgb | ColorTypeHsl;
export default ColorType;
