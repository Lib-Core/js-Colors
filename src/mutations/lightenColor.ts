import {makeColorPartInRange, percentInRange, percentToColorPart} from "../functions";
import Color from "../types/Color";
import validateColorType from "../validators/validateColorType";
import ColorConverterError from "../Errors/ColorConverterError";

export default function lightenColor(color: Color, percent: number) {
    if (!validateColorType(color)) throw new ColorConverterError('insert a valid color object');
    if (!percentInRange(percent)) throw new ColorConverterError('insert a valid float percent like 50% => 0.5');

    const colorPercent = percentToColorPart(percent);
    return {
        red: makeColorPartInRange(color.red + colorPercent),
        green: makeColorPartInRange(color.green + colorPercent),
        blue: makeColorPartInRange(color.blue + colorPercent),
        alpha: color.alpha,
    };
}
