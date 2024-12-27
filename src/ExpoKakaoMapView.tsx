import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoKakaoMapViewProps } from './ExpoKakaoMap.types';

const NativeView: React.ComponentType<ExpoKakaoMapViewProps> =
  requireNativeViewManager('ExpoKakaoMap');

export default function ExpoKakaoMapView(props: ExpoKakaoMapViewProps) {
  return <NativeView {...props} />;
}
