import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCafeSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M448 64H80v254.34a19.83 19.83 0 005.86 14.14l29.65 29.66a19.87 19.87 0 0014.15 5.86h204.68a19.87 19.87 0 0014.15-5.86l29.65-29.66a19.83 19.83 0 005.86-14.14V192h32a16 16 0 0011.31-4.69l32-32A16 16 0 00464 144V80a16 16 0 00-16-16zm-16 73.37L409.37 160H384V96h48zM48 400h368v32H48z" />
    </Svg>
  );
}

export default SvgCafeSharp;

