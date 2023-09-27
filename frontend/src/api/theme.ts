import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#e60023",
    },
    secondary: {
      main: "#efefef",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
