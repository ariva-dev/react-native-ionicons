import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayCircleSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z" />
    </Svg>
  );
}

export default SvgPlayCircleSharp;

