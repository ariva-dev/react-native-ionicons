import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkDoneCircleOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
      />
    </Svg>
  );
}

export default SvgCheckmarkDoneCircleOutline;

