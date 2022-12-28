import { createTheme } from '@mui/material/styles';

export const fontTheme = createTheme({
    typography: {
        fontFamily: [
            'Jost',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    }
});


export const radioTheme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#5F5F63',
                    fontWeight: '800',
                    fontSize: '23px'
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#6684F2'
                }
            }
        }
    }
});

