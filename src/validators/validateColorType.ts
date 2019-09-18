import Color from "../types/Color";
import {percentInRange, colorPartInRange} from "../functions";

export default function validateColorType(color: Color | any): color is Color {
    return !!(
        color &&
        colorPartInRange(color.red) &&
        colorPartInRange(color.green) &&
        colorPartInRange(color.blue) &&
        percentInRange(color.alpha)
    );
}
