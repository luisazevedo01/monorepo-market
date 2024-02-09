import mapboxgl from 'mapbox-gl';
import { ReactNode, useRef } from 'react';
import Map, { Marker, ViewStateChangeEvent } from 'react-map-gl';

enum MapStylesEnum {
    STANDARD = "mapbox://styles/mapbox/standard",
    DARK = "mapbox://styles/mapbox/dark-v11",
    LIGHT = "mapbox://styles/mapbox/light-v11",
    OUTDOORS = "mapbox://styles/mapbox/outdoors-v12",
    SATELLITE = "mapbox://styles/mapbox/satellite-v9",
    SATELLITE_STREETS = "mapbox://styles/mapbox/satellite-streets-v12"
}

export type MarkerPositionT = {
    longitude: number
    latitude: number
}

type ViewPortT = {
    longitude: number
    latitude: number
    zoom: number
}
interface GLMapProps {
    viewport: ViewPortT;
    onMove?: ((e: ViewStateChangeEvent) => void);
    handleMarkerClick: ((marker: MarkerPositionT) => void);
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
            mapStyle={MapStylesEnum.STANDARD}
        >
            <Marker
                longitude={-27.90}
                latitude={38.58}
                onClick={() => handleMarkerClick({ longitude: -27.90, latitude: 38.58 })}>
            </Marker>
        </Map>
    );
}

export default GLMap;