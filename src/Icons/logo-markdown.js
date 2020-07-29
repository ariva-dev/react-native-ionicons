import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoMarkdown(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64zM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64zm96 0l-80-112h48.05L352 144h64v112h48z" />
    </Svg>
  );
}

export default SvgLogoMarkdown;

