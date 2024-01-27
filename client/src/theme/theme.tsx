import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

// Create a custom theme
export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: green[800],
        },
        text: {
            primary: "#000000",
        },
    },
});
