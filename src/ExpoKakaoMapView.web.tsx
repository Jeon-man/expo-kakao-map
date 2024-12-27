import * as React from 'react';

import { ExpoKakaoMapViewProps } from './ExpoKakaoMap.types';

export default function ExpoKakaoMapView(props: ExpoKakaoMapViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
