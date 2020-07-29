import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgStopwatch(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={272} r={16} />
      <Path d="M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z" />
    </Svg>
  );
}

export default SvgStopwatch;

