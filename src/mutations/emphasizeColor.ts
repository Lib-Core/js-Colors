import Color from "../types/Color";
import getColorLuminance from "../info/getColorLuminance";
import {darkenColorTransform} from "./darkenColor";
import {lightenColorTransform} from "./lightenColor";
import {percentInRange} from "../functions";
import ColorConverterError from "../Errors/ColorConverterError";

export default function emphasizeColor(color: Color, coefficient: number = 0.15) {
    if (!percentInRange(coefficient)) {
        throw new ColorConverterError('insert a valid float coefficient like 50% => 0.5');
    }

    return getColorLuminance(color) > 0.5
        ? darkenColorTransform(color, coefficient)
        : lightenColorTransform(color, coefficient);
}
