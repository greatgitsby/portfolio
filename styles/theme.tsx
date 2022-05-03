import { createTheme, Theme } from "@mui/material";
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#98C1D9',
      contrastText: "#3D5A80"
    },
    secondary: {
      main: '#EE6C4D',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 200,
    },
    body2: {
      fontWeight: 100,
    },
    subtitle1: {
      fontWeight: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #FA5277 30%, #EE6C4D 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 6
};

const theme: Theme = createTheme(themeOptions);

export default theme;