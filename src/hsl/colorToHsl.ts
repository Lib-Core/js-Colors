import Color from "../types/Color";
import colorToColorArrayHsl from "./colorToColorArrayHsl";

export default function colorToHsl(color: Color) {
    const {type, values} = colorToColorArrayHsl(color);
    let colorParts = `${values[0]},${values[1]}%,${values[2]}%`;
    if (type === 'hsla') colorParts += `,${values[3]}`;
    return `${type}(${colorParts})`;
}
