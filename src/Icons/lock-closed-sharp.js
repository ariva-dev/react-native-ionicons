import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLockClosedSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M420 192h-68v-80a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12zm-106 0H198v-80.75a58 58 0 11116 0z" />
    </Svg>
  );
}

export default SvgLockClosedSharp;

