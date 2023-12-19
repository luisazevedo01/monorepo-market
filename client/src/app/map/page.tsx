'use-client'
import { Grid } from "@mui/material";
import React from "react";


const position = [51.505, -0.09];
const mapStyle = { height: "90vh" };

const Map = () => {

    return (
        <Grid sx={mapStyle}>
            {position}
        </Grid>
    )

}

export default Map;