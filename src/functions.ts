import {colorAlphaMaxValue, colorAlphaMinValue, colorPartMaxValue, colorPartMinValue} from "./variables";
import ColorConverterError from "./Errors/ColorConverterError";

export const isEmptyMatchPart = (value: any) => value == undefined;
export const colorPartInRange = (value: number) => value < colorPartMinValue || value > colorPartMaxValue;
export const colorAlphaInRange = (value: number) => value < colorAlphaMinValue || value > colorAlphaMaxValue;
export const colorPartToPercent = (value: number) => value / colorPartMaxValue;
export const percentToColorPart = (value: number) => Math.round(value * colorPartMaxValue);

export function parseAlphaFromColorMatches(value: any): number {
    if (isEmptyMatchPart(value)) return colorAlphaMaxValue;

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || colorAlphaInRange(parsedValue)) {
        throw new ColorConverterError(`part alpha not valid. "${value}" inserted`);
    }
    return parsedValue;
}
