import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderTwoOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M112 304h288M112 208h288"
      />
    </Svg>
  );
}

export default SvgReorderTwoOutline;

