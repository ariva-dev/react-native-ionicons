import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlaySkipBackCircle(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-64a16 16 0 0132 0v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0z" />
    </Svg>
  );
}

export default SvgPlaySkipBackCircle;

