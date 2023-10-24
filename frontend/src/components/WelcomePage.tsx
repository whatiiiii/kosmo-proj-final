import Grid from "@mui/material/Grid";
import SignUp from "./SignUp";
import Paper from "@mui/material/Paper";
import PinNavBar from "./PinNavBar";
import Typography from "@mui/material/Typography";

export default function WelcomePage() {
  return (
    <>
      <PinNavBar />
      <Grid container>
        <Grid container item sx={{ height: "64px" }}></Grid>
        <Grid
          item
          container
          alignContent="center"
          justifyContent="center"
          sx={{ height: "calc(100vh - 64px)" }}
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
          item
          container
          alignContent="center"
          justifyContent="center"
          sx={{ height: "calc(100vh - 64px)" }}
        >
          <Grid item>
            <Typography
              color="primary"
              variant="h2"
              sx={{ fontWeight: "bold" }}
            >
              저장해.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sx={{ height: "calc(100vh - 64px)" }}>
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
      </Grid>
    </>
  );
}
