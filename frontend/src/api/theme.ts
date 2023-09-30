import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { koKR } from "@mui/x-date-pickers/locales";

// A custom theme for this app
const theme = createTheme(
  {
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
  },
  koKR,
);

export default theme;
