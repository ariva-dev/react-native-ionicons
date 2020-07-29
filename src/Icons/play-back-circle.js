import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayBackCircle(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm69.23-9.3l114.45-69.14a10.78 10.78 0 0116.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0116.32 9.31v138.26a10.78 10.78 0 01-16.32 9.31L248 271.81v53.32a10.78 10.78 0 01-16.32 9.31L117.23 265.3a10.89 10.89 0 010-18.6z" />
    </Svg>
  );
}

export default SvgPlayBackCircle;

