import Color from "../types/Color";
import {percentMaxValue} from "../variables";
import {percentToColorPart} from "../functions";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";
import {ColorTypeHex} from "../types/ColorType";
import {ColorArrayHex} from "../types/ColorArray";

function parseHexStringPiece(piece: number): string {
    const convertedPiece = piece.toString(16);
    if (convertedPiece.length === 2) return convertedPiece;
    return '0' + convertedPiece;
}

export default function colorToColorArrayHex(color: Color): ColorArrayHex {
    if (!validateColorType(color)) {
        throw new ColorConverterError('insert a valid color object');
    }

    let hexHeader: ColorTypeHex = 'hex';
    const pieces = [
        parseHexStringPiece(color.red),
        parseHexStringPiece(color.green),
        parseHexStringPiece(color.blue),
    ];

    if (color.alpha && color.alpha !== percentMaxValue) {
        hexHeader = 'hex_alpha';
        pieces.push(parseHexStringPiece(
            percentToColorPart(color.alpha),
        ));
    }

    return {
        type: hexHeader,
        values: pieces,
    };
}
