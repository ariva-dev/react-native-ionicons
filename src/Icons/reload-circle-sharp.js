import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReloadCircleSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm120 190.77h-89l36.88-36.88-5.6-6.51a87.38 87.38 0 10-62.94 148 87.55 87.55 0 0082.42-58.25l5.37-15.13 30.17 10.67-5.3 15.13a119.4 119.4 0 11-112.62-159.18 118.34 118.34 0 0186.36 36.95l.56.62 4.31 5L376 149.81z" />
    </Svg>
  );
}

export default SvgReloadCircleSharp;

