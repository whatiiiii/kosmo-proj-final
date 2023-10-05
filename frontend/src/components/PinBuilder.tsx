import PinNavBar from "./PinNavBar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import img2 from "/imggg/img2.png";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import IconButton from "@mui/material/IconButton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import LinkIcon from "@mui/icons-material/Link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemButton } from "@mui/material";
import TextField from "@mui/material/TextField";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  height: 750,
  ...theme.typography.body2,
  display: "flex", // 새로운 스타일 추가
  alignItems: "center", // 새로운 스타일 추가
  boxSizing: "border-box", // 새로운 스타일 추가
  //padding: 25,
}));

function PinBuilder() {
  const [age, setAge] = React.useState();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const StyledRoot = styled("div")({
    display: "center",
    padding: 150,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  });

  const MuiPaperRoot = styled("div")({});

  const Box1 = styled("div")({
    float: "left",
    width: 450,
    height: 750,
    borderRadius: 20,
  });

  const Box2 = styled("div")({
    display: "block",
    width: 450,
    height: 750,
    backgroundColor: "#666666",
    ml: 10,
    borderRadius: 20,
    position: "relative",
  });

  const Box2Top = styled("div")({
    width: 450,
    height: 90,
    backgroundColor: "yellow",
    borderRadius: 20,
  });

  const Box2Middle = styled("div")({
    width: 450,
    height: 550,
    backgroundColor: "#666666",
    overflow: "auto",
  });

  const Box2Bottom = styled("div")({});

  const ImageRoot = styled("img")({
    border: 0,
    height: "auto",
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: 20,
  });

  return (
    <>
      <StyledRoot>
        <PinNavBar />
        <MuiPaperRoot>
          <DemoPaper square={false} elevation={3} sx={{ borderRadius: 5 }}>
            <Box1>
              <ImageRoot src={img2} />
            </Box1>
            <Box2>
              <Box2Top>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ ml: 1, mr: 1, mt: 2 }}
                >
                  <DownloadForOfflineIcon fontSize="large" />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 1, mt: 2 }}
                >
                  <LinkIcon fontSize="large" />
                </IconButton>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-label">사진첩</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ ml: 1, mr: 1, mt: 2 }}
                >
                  저장
                </Button>
              </Box2Top>
              <Box2Middle>
                <Container>
                  <Box sx={{ width: "100%", maxWidth: 500 }}>
                    <Typography variant="h4" gutterBottom>
                      제목 입력창입니다. 확인해주세요.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      상세 설명이 들어가는 칸 입니다. body1. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Quos blanditiis
                      tenetur unde suscipit, quam beatae rerum inventore
                      consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>

                    <List
                      sx={
                        {
                          //width: "100%",
                          //  maxWidth: 360,
                          //bgcolor: "background.paper",
                        }
                      }
                    >
                      <ListItem sx={{ p: 0 }}>
                        <ListItemAvatar>
                          <IconButton sx={{ p: 0 }}>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/2.jpg"
                            />
                          </IconButton>
                        </ListItemAvatar>
                        <ListItemText
                          primary="The Fashion Feed"
                          secondary="팔로워 3,913명"
                        />
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ ml: 3 }}
                        >
                          팔로우
                        </Button>
                      </ListItem>
                    </List>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      mt={2}
                    >
                      댓글 body1. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quos blanditiis tenetur unde suscipit,
                      quam beatae rerum inventore consectetur, neque doloribus,
                      cupiditate numquam dignissimos laborum fugiat deleniti?
                      Eum quasi quidem quibusdam.body1. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Quos blanditiis
                      tenetur unde suscipit, quam beatae rerum inventore
                      consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.body1. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quos blanditiis tenetur unde suscipit,
                      quam beatae rerum inventore consectetur, neque doloribus,
                      cupiditate numquam dignissimos laborum fugiat deleniti?
                      Eum quasi quidem quibusdam.
                    </Typography>
                  </Box>
                </Container>
              </Box2Middle>
              <Box2Bottom>
                <Typography variant="h6" fontWeight="bold" ml={2}>
                  댓글 4개
                </Typography>
                <List
                  sx={{
                    width: 410,
                    ml: 2,
                    bgcolor: "background.paper",
                    // overflowY: "scroll",
                    //flexGrow: 2,
                  }}
                >
                  <ListItem sx={{ p: 0 }}>
                    <ListItemAvatar>
                      <IconButton>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </ListItemAvatar>
                    <TextField
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={4}
                      fullWidth
                      sx={{
                        height: "100%",
                        maxHeight: "calc((100vh, -80px) -16px)",
                      }}
                    />
                  </ListItem>
                </List>
              </Box2Bottom>
            </Box2>
          </DemoPaper>
        </MuiPaperRoot>
      </StyledRoot>
    </>
  );
}

export default PinBuilder;
