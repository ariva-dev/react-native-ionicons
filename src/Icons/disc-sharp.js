import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgDiscSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={32} />
      <Path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z" />
    </Svg>
  );
}

export default SvgDiscSharp;

