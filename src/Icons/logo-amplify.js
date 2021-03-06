import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoAmplify(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M112.31 268l40.36-68.69 34.65 59-67.54 115h135L289.31 432H16zm58.57-99.76l33.27-56.67L392.44 432h-66.68zM222.67 80h66.59L496 432h-66.68z"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgLogoAmplify;

