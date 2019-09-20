import Color from "../types/Color";
import lightenColor, {lightenColorTransform} from "./lightenColor";

export default function darkenColor(color: Color, percent: number) {
    return lightenColor(color, 0 - percent);
}

export function darkenColorTransform(color: Color, percent: number) {
    return lightenColorTransform(color, 0 - percent);
}
