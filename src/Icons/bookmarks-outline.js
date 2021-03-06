import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookmarksOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgBookmarksOutline;

