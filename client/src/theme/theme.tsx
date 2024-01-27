import { createTheme } from '@mui/material/styles';
import { lightGreen, purple } from '@mui/material/colors';

// Create a custom theme
export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: lightGreen[500],
        },
        text: {
            primary: "#000000"
        },
    },
});
