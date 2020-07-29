import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M256 112v288M400 256H112"
      />
    </Svg>
  );
}

export default SvgAddSharp;

