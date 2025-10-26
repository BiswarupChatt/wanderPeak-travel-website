// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#1976D2' },
        secondary: { main: '#43A047' },
        warning: { main: '#FF6F00' },
        background: {
            default: '#F5FAFF',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0D1B2A',
            secondary: '#5F6C7B',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
        h1: { fontWeight: 700, fontSize: '2.5rem', color: '#0D1B2A' },
        h2: { fontWeight: 600, fontSize: '2rem' },
        body1: { fontSize: '1rem', color: '#5F6C7B' },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;
