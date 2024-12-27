import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoKakaoMap.web.ts
// and on native platforms to ExpoKakaoMap.ts
import ExpoKakaoMapModule from './ExpoKakaoMapModule';
import ExpoKakaoMapView from './ExpoKakaoMapView';
import { ChangeEventPayload, ExpoKakaoMapViewProps } from './ExpoKakaoMap.types';

// Get the native constant value.
export const PI = ExpoKakaoMapModule.PI;

export function hello(): string {
  return ExpoKakaoMapModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoKakaoMapModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoKakaoMapModule ?? NativeModulesProxy.ExpoKakaoMap);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoKakaoMapView, ExpoKakaoMapViewProps, ChangeEventPayload };
