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
        },
    }});
    
    export const inputTheme = createTheme({
        components: {
        MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "&.Mui-focused": {
                    borderColor: "#C52328",
                    borderWidth: "2px",
                    color: 'red',

                }
              }
            }
          }

}})

export const formControlLabelTheme = createTheme({
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    width: '743px',
                    height: '68px',
                    border: '1px solid #dfdfdf',
                    marginTop: '19.5px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '34px'
                }
            }
        }
    }
});

export const step4Themeform = createTheme({
    components: {
       MuiInputLabel: {
        styleOverrides: {
            root: {
                fontSize: '23px',
                fontWeight: '700',
                color: '#5F5F63',
            }
        }
       } 
    }
})