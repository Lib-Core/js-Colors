import {percentMaxValue, percentMinValue, colorPartMaxValue, colorPartMinValue} from "./variables";
import ColorParseError from "./Errors/ColorParseError";

export const isEmptyMatchPart = (value: any) => value == undefined;
export const colorPartInRange = (value: number) => value >= colorPartMinValue && value <= colorPartMaxValue;
export const percentInRange = (value: number) => value >= percentMinValue && value <= percentMaxValue;
export const colorPartToPercent = (value: number) => value / colorPartMaxValue;
export const percentToColorPart = (value: number) => Math.round(value * colorPartMaxValue);

export function roundToFloat(value: number, floatLength: number = 0) {
    const calculator = 10 ** floatLength;
    if (calculator !== 1) value *= calculator;
    value = Math.round(value);
    if (calculator !== 1) value /= calculator;
    return value;
}

export function makeColorPartInRange(value: number) {
    if (value < colorPartMinValue) return colorPartMinValue;
    if (value > colorPartMaxValue) return colorPartMaxValue;
    return value || 0;
}

export function parseAlphaFromColorMatches(value: any): number {
    if (isEmptyMatchPart(value)) return percentMaxValue;

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || !percentInRange(parsedValue)) {
        throw new ColorParseError(`part alpha not valid. "${value}" inserted. "${value}" => "${parsedValue}"`);
    }

    return parsedValue;
}
