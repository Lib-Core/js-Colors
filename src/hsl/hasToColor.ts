import ColorParseError from "../Errors/ColorParseError";
import {hslRegex} from "../regexps";
import {isEmptyMatchPart, parseAlphaFromColorMatches, percentToColorPart} from "../functions";

function parseHslHue(value: string) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 359) {
        throw new ColorParseError(`hsl hue must be or between 0 and 359. "${value}" given`);
    }
    return parsedValue;
}

function parseHslPercent(value: string) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 100) {
        throw new ColorParseError(`hsl hue must be or between 0% and 100%. "${value}%" given`);
    }
    return parsedValue / 100;
}

export default function hslToColor(hsl: string | any) {
    if (typeof hsl !== 'string') {
        throw new ColorParseError('input must be a string');
    }

    const matches = hsl.match(hslRegex);

    if (
        matches === null ||
        (matches[1] === 'hsl' && !isEmptyMatchPart(matches[5])) ||
        (matches[1] === 'hsla' && isEmptyMatchPart(matches[5]))
    ) {
        throw new ColorParseError('input must be a valid hsl or hsla string');
    }

    const hue = parseHslHue(matches[2]);
    const saturation = parseHslPercent(matches[3]);
    const lightness = parseHslPercent(matches[4]);

    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const nextChroma = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
    const channel = lightness - chroma / 2;

    let red = 0, green = 0, blue = 0;

    if (0 <= hue && hue < 60) {
        red = chroma;
        green = nextChroma;
        blue = 0;

    } else if (60 <= hue && hue < 120) {
        red = nextChroma;
        green = chroma;
        blue = 0;

    } else if (120 <= hue && hue < 180) {
        red = 0;
        green = chroma;
        blue = nextChroma;

    } else if (180 <= hue && hue < 240) {
        red = 0;
        green = nextChroma;
        blue = chroma;

    } else if (240 <= hue && hue < 300) {
        red = nextChroma;
        green = 0;
        blue = chroma;

    } else if (300 <= hue && hue < 360) {
        red = chroma;
        green = 0;
        blue = nextChroma;
    }

    return {
        red: percentToColorPart(red + channel),
        green: percentToColorPart(green + channel),
        blue: percentToColorPart(blue + channel),
        alpha: parseAlphaFromColorMatches(matches[5]),
    };
}
