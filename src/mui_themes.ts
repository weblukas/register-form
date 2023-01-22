import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    status: { danger: '#e53e3e',  },
    palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: { main: '#15c630' },
    otherColor: { main: '#999' },
  },
});

export const fontTheme = createTheme({
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Jost',
                fontWeight: 600,
            }
        }
    }
});


export const radioTheme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#5F5F63',
                    fontWeight: '800',
                    fontSize: 23
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
                height: 73,
                border: '1px solid #EDEDED',

                "&.Mui-focused": {
                    border: " 1px solid red",
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
                    width: 743,
                    height: 68,
                    border: '1px solid #dfdfdf',
                    marginTop: 19.5,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 34
                }
            }
        }
    }
});

export const step4Themeform = createTheme({
    components: {
       MuiFormLabel: {
        styleOverrides: {
            root: {
                fontFamily: 'Jost',
                fontSize: 23,
                fontWeight: '700',
                color: '#5F5F63',
                marginBottom: 12,
                
            }
        }
       },
       MuiOutlinedInput: {
        styleOverrides: {
            root: {
                height: 73,
                border: '1px solid #EDEDED',
                 "&.Mui-hover": {
                    border: "1px solid red",
                    borderWidth: 2,
                    color: 'red',

                }
            }
        }
       }, 
       MuiSelect: {
        styleOverrides: {
            select: {
               fontSize: 18,
                color: '#959595',  
            }
        }
       },
       MuiMenuItem: {
        styleOverrides: {
            root: {
                fontSize: 18,
                color: '#959595',
            }
        }
       } 
    }

})

export const checkboxTheme = createTheme({
    palette: {
        primary: {
            main: '#6B59D3',
        },
        otherColor: { main: '#e31313' },
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: 245,
                    
                }
            }
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    justifyContent: 'space-between'
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    paddingLeft: 19
                }
            }
        }
         
    }
});

// "&.Mui-focused fieldset": {
//             borderColor: "#C52328"
//             borderWidth: "2px"
//         }

