import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowForwardCircleOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M262.62 336L342 256l-79.38-80M330.97 256H170"
      />
      <Path
        d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgArrowForwardCircleOutline;

