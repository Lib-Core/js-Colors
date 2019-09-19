import {ColorTypeHex, ColorTypeHsl, ColorTypeRgb} from "./ColorType";

export interface ColorArrayHex {
    type: ColorTypeHex;
    values: string[];
}

export interface ColorArrayRgb {
    type: ColorTypeRgb;
    values: number[];
}

export interface ColorArrayHsl {
    type: ColorTypeHsl;
    values: number[];
}

type ColorArray = ColorArrayHex | ColorArrayRgb | ColorArrayHsl;
export default ColorArray;
