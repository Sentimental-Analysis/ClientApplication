import { Localization } from "../data/score";

export interface Point {
    x: number;
    y: number;
}

export interface Bounds {
  contains: (latLng: Localization) => boolean;
}
