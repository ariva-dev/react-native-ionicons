import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPersonSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 256a112 112 0 10-112-112 112 112 0 00112 112zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
    </Svg>
  );
}

export default SvgPersonSharp;

