import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronUpSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M112 328l144-144 144 144"
      />
    </Svg>
  );
}

export default SvgChevronUpSharp;

