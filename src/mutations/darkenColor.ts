import Color from "../types/Color";
import lightenColor from "./lightenColor";

export default function darkenColor(color: Color, percent: number) {
    return lightenColor(color, 0 - percent);
}
