import { Localization } from "../data/score";

export interface Point {
    x: number;
    y: number;
}

export interface Bounds {
    contains: (latLng: Localization) => boolean;
}

export interface Pane {
  appendChild: (element: Object) => void;
}


export interface Panes {
  overlayPane: Pane;
}

export interface Map {
    layerPointToLatLng: (lngLat: Point) => Localization;
    latLngToLayerPoint: (lngLat: Localization) => Point;
    on: (event: string, handler: () => void) => void;
    getBounds: () => Bounds;
    getPanes: () => Panes;
    invalidateSize: () => void;
    options: {};
}

export interface LeafletZoomEvent {
  zoom: number;
  center: Object;
}
