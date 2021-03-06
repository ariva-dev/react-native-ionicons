import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExit(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M336 376V272H191a16 16 0 010-32h145V136a56.06 56.06 0 00-56-56H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h192a56.06 56.06 0 0056-56zM425.37 272l-52.68 52.69a16 16 0 0022.62 22.62l80-80a16 16 0 000-22.62l-80-80a16 16 0 00-22.62 22.62L425.37 240H336v32z" />
    </Svg>
  );
}

export default SvgExit;

