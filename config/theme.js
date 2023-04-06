import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const eyYellow = "#FFE600";

export const cyan = "hsl(191, 58%, 46%)";
export const darkCyan = "#135362";

export const yellow = "hsl(52, 68%, 70%)";

export const pendingGrey = "#616161";
export const successGreen = "#57e188";
export const errorRed = "#f95d54";
export const warningAmber = "#ed6500";

export const headerBackground = "#2e2e38";
export const navBarBackground = "#2e2e38";

export const cardBackground = "#2e2e3c";
export const cardBackgroundMuted = "#23232E";

export const background = "#1A1A24";
export const containerBackground = "#23232f";
export const inputDisabledBg = "#282836";
export const disabledText = "#747480";
export const inputBorder = "#eaeaf2";
export const listItemColor = "#c4c4cd";

export const gridCellHoverBg = "#19283d";

export const divider = "#3A3A4A";

export const timestamp = "#f6f6fa";

export const white = "#ffffff";
export const subtitleGrey = grey[500];
export const shadow = "hsl(230, 15%, 16%)";
export const black = "black";

export const visualisationRange = [
  "#1c4a86",
  "#235ca7",
  "#3685c6",
  "#4ebdeb",
  "#88d0ef",
];
export const noVisualisationData = "#4d5162";

export const networkGraphPalette = [
  "#cc517f",
  "#519ecc",
  "#8ecc51",
  "#ccad51",
  "#cc5151",
  "#cc51ad",
  "#598aea",
  "#60cc51",
  "#cc9651",
  "#7f3333",
  "#b85eff",
  "#a5cc51",
  "#cc7f51",
  "#f64385",
  "#bc51cc",
  "#bccc51",
  "#ccad00",
  "#cc6851",
  "#51cccc",
  "#337f7f",
  "#597f33",
  "#8e51cc",
  "#7f6c33",
  "#51cc70",
  "#337f46",
  "#5170cc",
  "#7f336c",
  "#d07f13",
  "#d6e47c",
  "#3c7f33",
  "#51cc9e",
  "#337f62",
  "#33627f",
  "#6051cc",
  "#75337f",
];

export const heatmapGradient = [
  [0, "#2E2E38"],
  [0.25, "#235CA7"],
  [0.5, "#3685C6"],
  [0.75, "#4EBDEB"],
  [1, "#88D0EF"],
];

export default createTheme({
  palette: {
    type: "light",
    primary: {
      main: eyYellow,
    },
    secondary: {
      main: white,
    },
    background: {
      paper: containerBackground,
      default: white,
    },
    text: {
      primary: '#000'
    }
  },
  typography: {
    fontFamily: "EYInterstate, noto_sans, sans-serif",
    subtitle1: {
      color: subtitleGrey,
    },
    subtitle2: {
      color: subtitleGrey,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          /* total width */
          "*::-webkit-scrollbar": {
            backgroundColor: `${white} !important`,
            width: "16px",
            height: "16px",
          },
          /* background of the scrollbar except button or resizer */
          "*::-webkit-scrollbar-track": {
            backgroundColor: `${background} !important`,
          },
          "*::-webkit-scrollbar-track:hover": {
            backgroundColor: `${containerBackground} !important`,
          },
          /* scrollbar itself */
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: `${disabledText} !important`,
            borderRadius: "16px !important",
            border: `5px solid ${background} !important`,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            border: `4px solid ${containerBackground} !important`,
          },
          /* set button(top and bottom of the scrollbar) */
          "*::-webkit-scrollbar-button": {
            display: "none",
          },
        },
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1312px !important",
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: { backgroundColor: successGreen },
        label: {
          fontSize: 14,
          fontWeight: 300,
          lineHeight: "22px",
          letterSpacing: 0,
          textAlign: "center",
          color: 'white'
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        label: {
          fontWeight: 700,
          textTransform: "capitalize",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: inputBorder,
            borderColor: inputBorder,
            color: background,
          },
        },
        outlinedPrimary: {
          color: white,
          borderColor: eyYellow,
        },
        outlinedSecondary: {
          color: white,
          borderColor: inputBorder,
          "&:hover": {
            color: eyYellow,
            borderColor: eyYellow,
            backgroundColor: background,
          },
        },
        root: {
          "&.Mui-disabled": {
            color: `${disabledText} !important`,
            backgroundColor: `${inputDisabledBg} !important`,
            borderColor: `${inputDisabledBg} !important`,
          },  
      },
    }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: white,
        },
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: "#747480",
        },
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          background: containerBackground,
          marginTop: "0 !important",
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:before, &:after": {
            borderColor: `${inputBorder} !important`,
          },
          "&:before, &:hover:not(:disabled):not(.Mui-disabled):before": {
            borderBottom: `1px solid ${inputBorder} !important`,
          },
          "& .MuiIconButton-root": {
            padding: 0,
          },
          "& .MuiSvgIcon-root": {
            width: "1em",
            height: "1em",
            fontSize: "1.5rem",
          },
          "& .MuiSvgIcon-root.MuiSelect-icon": {
            position: "absolute",
            top: "0.85714rem",
            width: "1.71429rem",
            height: "1.71429rem",
          },
        },
        input: {
          border: 'none',
          fontWeight: "lighter",
          fontSize: 14,
          minHeight: "3.14286rem !important",
          padding: "1.2rem .7143rem 0.8rem",
          lineHeight: "16px",
          position: "relative",
          textAlign: "left",
          width: "100%",
          boxSizing: "border-box !important",
          "&.MuiSelect-select.MuiSelect-select": {
            paddingRight: "0.7143rem",
          },
        },
        adornedEnd: {
          paddingRight: "0.78571rem",
        },
      } 
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: containerBackground,
          marginTop: "0 !important",
        },
      }
    },
    MuiInputLabel: {
      root: {
        top: "-0.5rem !important",
        left: 0,
        lineHeight: "1.57143rem",
        display: "block",
        fontWeight: "lighter",
        fontSize: 14,
        zIndex: 999,
        pointerEvents: "none",
      },
      formControl: {
        transform: "translate(12px, 20px) scale(1)",
      },
      shrink: {
        transform: "translate(12px, 8px) scale(0.75)",
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& :not(.MuiFormHelperText-root).Mui-disabled": {
            color: disabledText,
            backgroundColor: containerBackground,
            cursor: "not-allowed",
            "&:before": {
              borderBottom: "none !important",
            },
          },
        },
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: divider,
        },
      }
    },
    MuiBadge: {
      styleOverrides: {
        anchorOriginTopRightRectangle: {
          right: "-35%",
        },
        badge: {
          height: "15px",
          minWidth: "15px",
          padding: "0 3px",
          fontSize: "11px",
        },
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: `${cardBackground} !important`,
          boxShadow: "0 0 16px 0 rgb(0 0 0 / 20%)",
          alignItems: "center",
        },
        message: {
          wordWrap: "break-word",
          fontWeight: "lighter",
          fontSize: "1rem",
          lineHeight: "1.57143rem",
        },
        filledSuccess: {
          "& .MuiAlert-icon": {
            color: successGreen,
          },
        },
        filledError: {
          "& .MuiAlert-icon": {
            color: errorRed,
          },
        },
        filledWarning: {
          "& .MuiAlert-icon": {
            color: warningAmber,
          },
        },
      }
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          maxWidth: "95%",
          "& .MuiAlert-root": {
            maxWidth: "100%",
            "& .MuiAlert-message": {
              maxWidth: "90%",
            },
          },
        },
        anchorOriginTopRight: {
          top: "70px !important",
        },
      }
    },
  },
});
