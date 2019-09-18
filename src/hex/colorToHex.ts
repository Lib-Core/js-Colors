import Color from "../types/Color";
import {colorAlphaMaxValue} from "../variables";
import {percentToColorPart} from "../functions";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";

function parseHexStringPiece(piece: number): string {
    const convertedPiece = piece.toString(16);
    if (convertedPiece.length === 2) return convertedPiece;
    return '0' + convertedPiece;
}

export default function colorToHex(color: Color): string {
    if (!validateColorType(color)) {
        throw new ColorConverterError('insert a valid color object');
    }

    const pieces = [
        parseHexStringPiece(color.red),
        parseHexStringPiece(color.green),
        parseHexStringPiece(color.blue),
    ];

    if (color.alpha && color.alpha !== colorAlphaMaxValue) {
        pieces.push(parseHexStringPiece(
            percentToColorPart(color.alpha),
        ));
    }

    return '#' + pieces.join('');
}
