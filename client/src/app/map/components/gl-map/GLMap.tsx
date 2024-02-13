import { MOCKED_PRODUCTS } from "@client/src/constants/mocked-products";
import { ReactNode } from "react";
import Map, { Marker, ViewStateChangeEvent } from "react-map-gl";

enum MapStylesEnum {
  STANDARD = "mapbox://styles/mapbox/standard",
  DARK = "mapbox://styles/mapbox/dark-v11",
  LIGHT = "mapbox://styles/mapbox/light-v11",
  OUTDOORS = "mapbox://styles/mapbox/outdoors-v12",
  SATELLITE = "mapbox://styles/mapbox/satellite-v9",
  SATELLITE_STREETS = "mapbox://styles/mapbox/satellite-streets-v12",
}

export type MarkerPositionT = {
  longitude: number;
  latitude: number;
};

type ViewPortT = {
  longitude: number;
  latitude: number;
  zoom: number;
};
interface GLMapProps {
  viewport: ViewPortT;
  onMove?: (e: ViewStateChangeEvent) => void;
  handleMarkerClick: (marker: MarkerPositionT) => void;
  children?: ReactNode;
}

function GLMap({ viewport, onMove, handleMarkerClick }: GLMapProps) {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  return (
    <Map
      {...viewport}
      onMove={onMove}
      mapboxAccessToken={accessToken}
      style={{ width: "100%", height: "100%" }}
      mapStyle={MapStylesEnum.SATELLITE_STREETS}
    >
      {MOCKED_PRODUCTS.map((product) => {
        if (product?.longitude && product?.latitude) {
          return (
            <Marker
              longitude={product?.longitude}
              latitude={product?.latitude}
              color={"green"}
              onClick={() =>
                handleMarkerClick({
                  longitude: product?.longitude,
                  latitude: product?.latitude,
                })}
            >
              {
                /*<img width={"50px"} height="50px" src={product.image} />*/
              }
            </Marker>
          );
        }
      })}
    </Map>
  );
}

export default GLMap;
