import Color from "../types/Color";
import colorToColorArrayHex from "./colorToColorArrayHex";

export default function colorToHex(color: Color): string {
    return '#' + colorToColorArrayHex(color).values.join('');
}
