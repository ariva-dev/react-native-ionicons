import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScanCircleSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-24 320h-44a44.05 44.05 0 01-44-44v-44h32v44a12 12 0 0012 12h44zm0-192h-44a12 12 0 00-12 12v44h-32v-44a44.05 44.05 0 0144-44h44zm136 148a44.05 44.05 0 01-44 44h-44v-32h44a12 12 0 0012-12v-44h32zm0-92h-32v-44a12 12 0 00-12-12h-44v-32h44a44.05 44.05 0 0144 44z" />
    </Svg>
  );
}

export default SvgScanCircleSharp;

