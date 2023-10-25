import Grid from "@mui/material/Grid";
import SignUp from "./SignUp";
import Paper from "@mui/material/Paper";
import PinNavBar from "./PinNavBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function WelcomePage() {
  return (
    <Box
      position="relative"
      overflow="auto"
      height="100vh"
      sx={{ scrollSnapType: "y mandatory" }}
    >
      <PinNavBar />
      <Box>
        <Grid container height="64px"></Grid>
        <Grid
          container
          alignContent="center"
          justifyContent="center"
          height="calc(100vh - 64px)"
          sx={{ scrollSnapAlign: "end" }}
        >
          <Grid item>
            <Typography
              color="primary"
              variant="h2"
              sx={{ fontWeight: "bold" }}
            >
              좋아하는 아이디어를 저장하세요.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          justifyContent="center"
          height="calc(100vh - 64px)"
          sx={{ scrollSnapAlign: "end" }}
        >
          <Grid item>
            <Typography
              color="primary"
              variant="h2"
              sx={{ fontWeight: "bold" }}
            >
              아이디어를 검색하세요.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          height="calc(100vh - 64px)"
          sx={{ scrollSnapAlign: "end" }}
        >
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <SignUp />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
