import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToggle(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144zm0 256a112 112 0 11112-112 112.12 112.12 0 01-112 112z" />
    </Svg>
  );
}

export default SvgToggle;

