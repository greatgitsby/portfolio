import { createTheme, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#98C1D9"
    },
    secondary: {
      main: "#EE6C4D"
    },
    text: {
      primary: "#293241",
      secondary: "#fff"
    }
  },
  typography: {
    fontFamily: "Inter, Roboto"
  }
});

export default theme;