import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpCircleSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3z" />
    </Svg>
  );
}

export default SvgArrowUpCircleSharp;

