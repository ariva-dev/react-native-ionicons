import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigateOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 64L64 240.14h200a8 8 0 018 8V448z"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgNavigateOutline;

