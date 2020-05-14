import {decode} from '@mapbox/polyline';

enum ScreeNames {
  'LOGIN' = 'Login',
  'SIGNUP' = 'SignUp',
  'Home' = 'Home',
}

export class Utils {
  static readonly screenNames = ScreeNames;
}

export const decodePolyline = (polyline: any) =>
  decode(polyline).map(([latitude, longitude]) => ({
    latitude,
    longitude,
  }));
