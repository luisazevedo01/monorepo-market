'use client'
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import GLMap, { MarkerPositionT } from "./components/gl-map/GLMap"; // Assuming this renders the MapContainer
import mapboxgl from "mapbox-gl";


function MapPage() {
    const [viewport, setViewport] = useState({
        longitude: -27.90,
        latitude: 38.58,
        zoom: 10,
    });
    const [activeMarker, setActiveMarker] = useState<MarkerPositionT | null>(null);
    const popupRef = useRef<mapboxgl.Popup | null>(null);


    const handleMarkerClick = (marker: MarkerPositionT) => {
        setActiveMarker(marker);
        if (popupRef.current) {
            popupRef.current.setLngLat([marker.longitude, marker.latitude]);
            //popupRef.current?.addTo(mapRef.current?.getMap());
        }
    };

    useEffect(() => {
        if (!activeMarker) {
            popupRef.current?.remove();
        }
    }, [activeMarker]);

    return (
        <Grid sx={{ width: "100vw", height: "100vh" }}>
            <GLMap
                viewport={viewport}
                onMove={(evt) => setViewport(evt.viewState)}
                handleMarkerClick={handleMarkerClick}>

            </GLMap>
        </Grid>
    );
}

export default MapPage;