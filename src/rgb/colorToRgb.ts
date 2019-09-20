import Color from "../types/Color";
import colorToColorArrayRgb from "./colorToColorArrayRgb";

export default function colorToRgb(color: Color) {
    const {type, values} = colorToColorArrayRgb(color);
    return `${type}(${values.join(',')})`;
}
