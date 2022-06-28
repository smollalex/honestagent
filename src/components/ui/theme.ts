import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#82B284',
      main: '#82B284',
      dark: '#82B284',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova Regular'
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {

        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          color: '#3B3B3B',
          font: '14px/20px Proxima Nova Regular',

          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#808080'
            }
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: '#3B3B3B'
          }

        },
        notchedOutline: {
          borderColor: '#CDCDCD',

          '&.Mui-focused': {
            borderWidth: '1px'
          }
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#808080',
          font: '14px/20px Proxima Nova Regular',
          textTransform: 'uppercase',

          '&.Mui-focused': {
            color: '#808080',
          }
        },
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          maxWidth: '400px',
          minHeight: '40px',
          borderRadius: '2px',
          font: '14px/22px Proxima Nova Semibold',

          '&:hover': {
            borderColor: '#CDCDCD',
            backgroundColor: 'transparent',
            color: '#98C88C'
          },

          '&:active': {
            color: '#58A742'
          }
        },
        outlined: {
          borderColor: '#E5E5E5'
        }
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: '320px',
          height: '198px',
          borderRadius: 0,

        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#3B3B3B',
          padding: '16px 24px !important'
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#3B3B3B'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          color: '#3B3B3B',
          padding: '24px 24px 0 24px'
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0 24px 24px 24px',
          justifyContent: 'space-between',
          color: '#B9B9B9',

          '& .MuiButton-text': {
            padding: 0,
            minHeight: 0,
            minWidth: 0,
            fontSize: '16px'
          }


        }
      }
    },

  },
});
