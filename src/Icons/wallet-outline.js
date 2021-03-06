import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgWalletOutline(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={144}
        width={416}
        height={288}
        rx={48}
        ry={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
    </Svg>
  );
}

export default SvgWalletOutline;

