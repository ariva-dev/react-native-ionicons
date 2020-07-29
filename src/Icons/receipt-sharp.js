import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReceiptSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z" />
      <Path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z" />
    </Svg>
  );
}

export default SvgReceiptSharp;

