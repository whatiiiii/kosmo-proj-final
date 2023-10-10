import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12}>
          <Item>
            <Button
              variant="outlined"
              sx={{
                m: 1,
                color: "black",
                borderColor: "gray",
                bgcolor: "background.paper",
                fontWeight: "bold",
              }}
            >
              재설정
            </Button>
            <Button
              variant="outlined"
              sx={{
                m: 2,
                color: "black",
                borderColor: "gray",
                bgcolor: "background.paper",
                fontWeight: "bold",
              }}
            >
              저장
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
