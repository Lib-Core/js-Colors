import Color from "../types/Color";

export default function colorToRgb(color: Color) {
    let rgbHeader = 'rgb';
    const rgbString = [
        color.red.toString(),
        color.green.toString(),
        color.blue.toString(),
    ];

    if (color.alpha !== 1) {
        rgbHeader += 'a';
        rgbString.push(color.alpha.toString());
    }

    return `${rgbHeader}(${rgbString.join(',')})`;
}
