import Color from "../types/Color";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";

export default function colorToRgb(color: Color) {
    if (!validateColorType(color)) {
        throw new ColorConverterError('insert a valid color object');
    }

    let rgbHeader = 'rgb';
    const rgbString = [
        color.red.toString(),
        color.green.toString(),
        color.blue.toString(),
    ];

    if (color.alpha !== 1) {
        rgbHeader += 'a';
        rgbString.push(color.alpha.toString());
    }

    return `${rgbHeader}(${rgbString.join(',')})`;
}
