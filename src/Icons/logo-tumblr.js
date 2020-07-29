import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoTumblr(props) { 
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88zm-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340z" />
    </Svg>
  );
}

export default SvgLogoTumblr;

