import ColorConverterError from "../Errors/ColorConverterError";
import Color from "../types/Color";
import {rgbRegex} from "../regexps";
import {colorPartInRange, isEmptyMatchPart, parseAlphaFromColorMatches} from "../functions";

function parseRgbPart(value: any, name: string): number {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || colorPartInRange(parsedValue)) {
        throw new ColorConverterError(`part "${name}" not valid. "${value}" inserted`);
    }
    return parsedValue;
}

export default function rgbToColor(rgb: string | any): Color {
    if (typeof rgb !== 'string') {
        throw new ColorConverterError('inout must be a string');
    }

    const matches = rgb.match(rgbRegex);

    if (
        matches === null ||
        (matches[1] === 'rgb' && !isEmptyMatchPart(matches[5])) ||
        (matches[1] === 'rgba' && isEmptyMatchPart(matches[5]))
    ) {
        throw new ColorConverterError('input must be a valid rgb or rgba string');
    }

    return {
        red: parseRgbPart(matches[2], 'red'),
        green: parseRgbPart(matches[3], 'green'),
        blue: parseRgbPart(matches[4], 'blue'),
        alpha: parseAlphaFromColorMatches(matches[5]),
    };
}
