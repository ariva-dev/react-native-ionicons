import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBugOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M370 378c28.89 23.52 46 46.07 46 86M142 378c-28.89 23.52-46 46.06-46 86M384 208c28.89-23.52 32-56.07 32-96M128 206c-28.89-23.52-32-54.06-32-94M464 288.13h-80M128 288.13H48M256 192v256"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M256 448h0c-70.4 0-128-57.6-128-128v-96.07c0-65.07 57.6-96 128-96h0c70.4 0 128 25.6 128 96V320c0 70.4-57.6 128-128 128z"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M179.43 143.52a49.08 49.08 0 01-3.43-15.73A80 80 0 01255.79 48h.42A80 80 0 01336 127.79a41.91 41.91 0 01-3.12 14.3"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgBugOutline;

