import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgRadioButtonOnOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle cx={256} cy={256} r={144} />
    </Svg>
  );
}

export default SvgRadioButtonOnOutline;

