"use client"
import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#4dabf5'
    },
    info: {
      main: '#3f50b5'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        disableElevation: false,
        color: 'info',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          // boxShadow: 'none',
          borderRadius: 30,
          ":hover": {
            // backgroundColor: '#2196f3',
            // color: '#212121',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});