import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreateSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M464.37 49.2a22.07 22.07 0 00-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 001.01-30.68zM252.76 336H176V259.24l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z" />
      <Path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z" />
    </Svg>
  );
}

export default SvgCreateSharp;

