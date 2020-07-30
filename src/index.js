import {Icons} from "./map"

export function Icon({name, size, color, fill, strokeWidth, style, borderWidth}) {
  const strokeWidthValue = strokeWidth ? strokeWidth : 32
  return Icons[name]({
    height: size,
    width: size,
    fill,
    color,
    style,
    strokeWidth: strokeWidthValue
   // borderWidth: borderWidth
  });
}
