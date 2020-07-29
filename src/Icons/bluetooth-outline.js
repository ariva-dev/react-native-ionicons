import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBluetoothOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M144 352l224-192L256 48v416l112-112-224-192"
      />
    </Svg>
  );
}

export default SvgBluetoothOutline;

