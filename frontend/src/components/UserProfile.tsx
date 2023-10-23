import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PinNavBar from "./PinNavBar";
import Container from "@mui/material/Container";
import { getFollowerCount, useServerUser, useUser } from "../api/user";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { getImage } from "../api/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PinLayout from "./Pinlayout";
import ProfileAvatar from "./ProfileAvatar";

export default function UserProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useServerUser(id);
  const [self] = useUser();
  const [followerCount, setFollowerCount] = useState<number>(-1);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const isSelf = self?.id === id;

  useEffect(() => {
    if (!id) {
      return;
    }
    getFollowerCount(id)
      .then((count) => {
        setFollowerCount(count);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [followerCount, id]);

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
            <ProfileAvatar username={id} sx={{ width: 120, height: 120 }} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{data?.name ?? "이름없음"}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">@{id ?? "아이디"}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{followerCount}명이 팔로우</Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Grid item display={isSelf ? "none" : "flex"}>
              <Button variant="contained" onClick={handleFollowButton}>
                팔로우
              </Button>
            </Grid>
            <Grid item display={isSelf ? "flex" : "none"}>
              <Button variant="outlined" href="/profiletab">
                프로필 수정
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ paddingTop: "20px" }}>
            <Tabs
              value={selectedTab}
              onChange={(_, value) => {
                setSelectedTab(value as number);
                console.log(value);
              }}
            >
              <Tab label="생성됨" />
              <Tab label="저장됨" />
            </Tabs>
            {selectedTab === 0 && (
              <PinLayout username={id} type="created" hideNavBar />
            )}
            {selectedTab === 1 && (
              <PinLayout username={id} type="saved" hideNavBar />
            )}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
