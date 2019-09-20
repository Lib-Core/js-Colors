import Color from "../types/Color";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";
import {ColorArrayRgb} from "../types/ColorArray";
import {ColorTypeRgb} from "../types/ColorType";
import {percentMaxValue} from "../variables";

export default function colorToColorArrayRgb(color: Color): ColorArrayRgb {
    if (!validateColorType(color)) {
        throw new ColorConverterError('insert a valid color object');
    }

    let rgbHeader: ColorTypeRgb = 'rgb';
    const rgbString = [
        color.red,
        color.green,
        color.blue,
    ];

    if (color.alpha !== percentMaxValue) {
        rgbHeader = 'rgba';
        rgbString.push(color.alpha);
    }

    return {
        type: rgbHeader,
        values: rgbString,
    };
}
