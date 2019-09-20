import Color from "../types/Color";
import getColorLuminance from "./getColorLuminance";

export default function getColorContrastRatio(firstColor: Color, secondColor: Color) {
    const firstLuminance = getColorLuminance(firstColor);
    const secondLuminance = getColorLuminance(secondColor);

    const min = Math.min(firstLuminance, secondLuminance) + 0.05;
    const max = Math.max(firstLuminance, secondLuminance) + 0.05;
    return max / min;
}
