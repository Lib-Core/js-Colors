export type ColorTypeAlpha = 'hex_alpha' | 'rgba' | 'hsla';
export type ColorTypeNormal = 'hex' | 'rgb' | 'hsl';
type ColorType = ColorTypeNormal | ColorTypeAlpha;
export default ColorType;
