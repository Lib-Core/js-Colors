import Color from "../types/Color";
import {colorAlphaMaxValue, colorPartMaxValue} from "../variables";

function parseHexStringPiece(piece: number): string {
    const convertedPiece = piece.toString(16);
    if (convertedPiece.length === 2) return convertedPiece;
    return '0' + convertedPiece;
}

export default function colorToHex(color: Color): string {
    const pieces = [
        parseHexStringPiece(color.red),
        parseHexStringPiece(color.green),
        parseHexStringPiece(color.blue),
    ];

    if (color.alpha && color.alpha !== colorAlphaMaxValue) {
        pieces.push(parseHexStringPiece(
            Math.round(color.alpha * colorPartMaxValue),
        ));
    }

    return '#' + pieces.join('');
}
