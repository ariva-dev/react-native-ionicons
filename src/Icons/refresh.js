import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefresh(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M320 146s24.36-12-64-12a160 160 0 10160 160"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M256 58l80 80-80 80"
      />
    </Svg>
  );
}

export default SvgRefresh;

