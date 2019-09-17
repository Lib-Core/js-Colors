import {colorAlphaMaxValue, colorAlphaMinValue, colorPartMaxValue, colorPartMinValue} from "./variables";

export const isEmptyMatchPart = (value: any) => value == undefined;
export const colorPartInRange = (value: number) => value < colorPartMinValue || value > colorPartMaxValue;
export const colorAlphaInRange = (value: number) => value < colorAlphaMinValue || value > colorAlphaMaxValue;
