import React, {StrictMode} from 'react';
import Svg, {
  Path,
  } from 'react-native-svg';


export function BackArrow(props : any) {
  return (
    <Svg
      id="Capa_1"
      enable-background="new 0 0 451.111 451.111"
      height={props.size}
      viewBox="0 0 451.111 451.111"
      width={props.size}
      >
      <Path
        d="m451.111 193.333h-322.222l112.778-112.777-48.333-48.333-193.334 193.333 193.333 193.333 48.333-48.333-112.777-112.778h322.222z"
        fill={props.color}
      />
    </Svg>
  );
}
