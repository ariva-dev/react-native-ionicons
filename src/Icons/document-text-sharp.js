import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDocumentTextSharp(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z" />
      <Path d="M248 224a8 8 0 01-8-8V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224zm104 160H160v-32h192zm0-80H160v-32h192z" />
    </Svg>
  );
}

export default SvgDocumentTextSharp;

