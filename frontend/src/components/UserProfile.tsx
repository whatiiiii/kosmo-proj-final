import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PinNavBar from "./PinNavBar";
import Container from "@mui/material/Container";
import { useServerUser, useUser } from "../api/user";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export default function UserProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const userQuery = useServerUser(id);
  const [self] = useUser();
  const isSelf = self?.id === id;

  function handleFollowButton() {
    if (self) {
      // TODO: follow
      alert(`팔로우 버튼 클릭: ${self.id} -> ${id}`);
    } else {
      navigate("/signin");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <PinNavBar position="static" />
      <Container maxWidth="md" sx={{ padding: "1.5em" }}>
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Avatar sx={{ width: 120, height: 120 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {userQuery.data?.name ?? "이름"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">@{id ?? "아이디"}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{"n"}명이 팔로우</Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Grid item display={isSelf ? "none" : "flex"}>
              <Button variant="contained" onClick={handleFollowButton}>
                팔로우
              </Button>
            </Grid>
            <Grid item display={isSelf ? "flex" : "none"}>
              <Button variant="outlined">프로필 수정</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
