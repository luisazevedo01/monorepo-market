import { CircularProgress, Grid, Paper } from "@mui/material"

type ColorT = "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;

interface LoaderProps {
    color?: ColorT;
    variant?: "indeterminate" | "determinate" | undefined;
}

const Loader = ({ color = "secondary", variant = "indeterminate" }: LoaderProps) => {
    return (
        <Paper sx={{ width: '100%', height: '100%' }} elevation={3} >
            <Grid container alignItems={"center"} justifyContent={"center"} height={"100vh"}>
                <CircularProgress color={color} variant={variant} />
            </Grid>
        </Paper>
    )
}

export default Loader;