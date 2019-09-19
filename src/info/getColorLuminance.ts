import Color from "../types/Color";
import colorToColorArrayHsl from "../hsl/colorToColorArrayHsl";

export default function getColorLuminance(color: Color) {
    const hslColorArray = colorToColorArrayHsl(color);
    return hslColorArray.values[2] / 100;
}
