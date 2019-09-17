import Color from "../types/Color";
import {colorPartToPercent} from "../functions";

export default function colorToHsl(color: Color) {

    const red = colorPartToPercent(color.red);
    const green = colorPartToPercent(color.green);
    const blue = colorPartToPercent(color.blue);

    const rgbMin = Math.min(red, green, blue);
    const rgbMax = Math.max(red, green, blue);
    const rgbDiff = rgbMax - rgbMin;

    // Calculate hue
    let hue;
    if (rgbDiff === 0) hue = 0;
    else if (rgbMax === red) hue = (green - blue) / rgbDiff + (green < blue ? 6 : 0);
    else if (rgbMax === green) hue = (blue - red) / rgbDiff + 2;
    else hue = (red - green) / rgbDiff + 4;
    hue /= 6;
    const hueString = (hue * 359).toFixed();

    const lightness = (rgbMax + rgbMin) / 2;
    const lightnessString = (lightness * 100).toFixed();

    let saturation = 0;
    if (rgbDiff !== 0) {
        if (lightness <= 0.5) saturation = rgbDiff / (rgbMax + rgbMin);
        else saturation = rgbDiff / (2 - rgbMax - rgbMin);
    }
    const saturationString = (saturation * 100).toFixed();

    let hslHeader = 'hsl';
    let alphaString = '';
    if (color.alpha !== 1) {
        hslHeader = 'hsla';
        alphaString = ',' + color.alpha;
    }

    return `${hslHeader}(${hueString},${saturationString}%,${lightnessString}%${alphaString})`;
}
