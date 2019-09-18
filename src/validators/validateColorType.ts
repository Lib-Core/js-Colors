import Color from "../types/Color";
import {colorAlphaInRange, colorPartInRange} from "../functions";

export default function validateColorType(color: Color | any): color is Color {
    return !!(
        color &&
        colorPartInRange(color.red) &&
        colorPartInRange(color.green) &&
        colorPartInRange(color.blue) &&
        colorAlphaInRange(color.alpha)
    );
}
