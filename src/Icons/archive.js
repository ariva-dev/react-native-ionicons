import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgArchive(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M64 164v244a56 56 0 0056 56h272a56 56 0 0056-56V164a4 4 0 00-4-4H68a4 4 0 00-4 4zm267 151.63l-63.69 63.68a16 16 0 01-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0123.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v105.37l36.69-36.68a16 16 0 0123.16.56c5.8 6.37 5.24 16.29-.85 22.38z" />
      <Rect x={32} y={48} width={448} height={80} rx={32} ry={32} />
    </Svg>
  );
}

export default SvgArchive;

