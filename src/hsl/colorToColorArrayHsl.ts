import Color from "../types/Color";
import {colorPartToPercent, roundToFloat} from "../functions";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";
import ColorArray from "../types/ColorArray";
import ColorType from "../types/ColorType";

export default function colorToColorArrayHsl(color: Color): ColorArray {
    if (!validateColorType(color)) {
        throw new ColorConverterError('insert a valid color object');
    }

    const red = colorPartToPercent(color.red);
    const green = colorPartToPercent(color.green);
    const blue = colorPartToPercent(color.blue);

    const rgbMin = Math.min(red, green, blue);
    const rgbMax = Math.max(red, green, blue);
    const rgbDiff = rgbMax - rgbMin;

    // Calculate hue
    let hue;
    if (rgbDiff === 0) hue = 0;
    else if (rgbMax === red) hue = (green - blue) / rgbDiff + (green < blue ? 6 : 0);
    else if (rgbMax === green) hue = (blue - red) / rgbDiff + 2;
    else hue = (red - green) / rgbDiff + 4;
    hue /= 6;

    const lightness = (rgbMax + rgbMin) / 2;

    let saturation = 0;
    if (rgbDiff !== 0) {
        if (lightness <= 0.5) saturation = rgbDiff / (rgbMax + rgbMin);
        else saturation = rgbDiff / (2 - rgbMax - rgbMin);
    }

    const colorPartValues = [
        roundToFloat(hue * 359),
        roundToFloat(saturation * 100),
        roundToFloat(lightness * 100),
    ];

    let hslHeader: ColorType = 'hsl';
    if (color.alpha !== 1) {
        hslHeader = 'hsla';
        colorPartValues.push(color.alpha);
    }

    return {
        type: hslHeader,
        values: colorPartValues,
    };
}
