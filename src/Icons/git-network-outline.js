import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgGitNetworkOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={128}
        cy={96}
        r={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={256}
        cy={416}
        r={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M256 256v112"
      />
      <Circle
        cx={384}
        cy={96}
        r={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M128 144c0 74.67 68.92 112 128 112M384 144c0 74.67-68.92 112-128 112"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgGitNetworkOutline;

