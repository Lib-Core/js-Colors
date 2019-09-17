import ColorConverterError from "./Errors/ColorConverterError";
import Color from "./types/Color";
import {hexRegex} from "./regexps";
import {colorPartInRange, isEmptyMatchPart} from "./functions";
import {colorAlphaMaxValue, colorPartMaxValue} from "./variables";

function parseHexPart(value: any, name: string): number {
    const parsedValue = parseInt(value, 16);
    if (isNaN(parsedValue) || colorPartInRange(parsedValue)) {
        throw new ColorConverterError(`part "${name}" not valid. "${value}" inserted`);
    }
    return parsedValue;
}

function parseHexAlpha(value: any): number {
    if (isEmptyMatchPart(value)) return colorAlphaMaxValue;
    return parseHexPart(value, 'alpha') / colorPartMaxValue;
}

export default function hexToColor(hex: string | any): Color {
    if (typeof hex !== 'string') {
        throw new ColorConverterError('inout must be a string');
    }

    const matches = hex.match(hexRegex);
    if (matches === null) {
        throw new ColorConverterError('input must be a valid hex string');
    }

    if (isEmptyMatchPart(matches[2])) {
        const [r, g, b] = matches[1].split('');
        return {
            red: parseHexPart(r + r, 'red'),
            green: parseHexPart(g + g, 'green'),
            blue: parseHexPart(b + b, 'blue'),
            alpha: colorAlphaMaxValue,
        };
    }

    return {
        red: parseHexPart(matches[3], 'red'),
        green: parseHexPart(matches[4], 'green'),
        blue: parseHexPart(matches[5], 'blue'),
        alpha: parseHexAlpha(matches[6]),
    };
}
