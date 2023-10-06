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

import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  height: 750,
  ...theme.typography.body2,
  display: "flex", // 새로운 스타일 추가
  alignItems: "center", // 새로운 스타일 추가
  boxSizing: "border-box", // 새로운 스타일 추가
  //padding: 25,
}));

const options = ["보드선택", "보드<1>", "보드<2>", "확인용보드"];

interface State extends SnackbarOrigin {
  open1: boolean;
}

function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max));

  // messageExamples 배열을 차례대로 복사하여 새로운 배열 생성
  const randomMessages = Array.from(messageExamples).map((message) => ({
    primary: message.primary,
    secondary: message.secondary,
    person: message.person,
  }));

  return randomMessages;
}

function PinBuilder() {
  const [age, setAge] = React.useState();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const StyledRoot = styled("div")({
    display: "flex",
    padding: 150,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
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
    //  maxWidth: "100%",
    width: 450,
    verticalAlign: "middle",
    //borderRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  });

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    // setAnchorEl(anchorRef.current);
    // setAnchorEl(event.target as HTMLDivElement);
    // console.log(anchorEl);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const [state, setState] = React.useState<State>({
    open1: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open1 } = state;

  const handleClick1 = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open1: true });
  };

  const handleClose1 = () => {
    setState({ ...state, open1: false });
  };

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <>
      <StyledRoot sx={{ borderRadius: 5 }}>
        <PinNavBar />
        <MuiPaperRoot>
          <DemoPaper square={false} elevation={3} sx={{ borderRadius: 5 }}>
            <Box1>
              {/* <Grid
              container
              sx={{ float: "left", width: 450, height: 750, borderRadius: 20 }}
            > */}
              <ImageRoot src={img2} />
              {/* </Grid> */}
            </Box1>
            {/* <Box2> */}
            {/* <Box2Top> */}
            <Grid
              container
              direction="column"
              sx={{
                display: "flex",
                width: 450,
                height: 750,
                // backgroundColor: "#666666",
                //  ml: 10,
                //borderRadius: 5,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                position: "relative",
                flexDirection: "column",
              }}
            >
              <Grid
                item
                xs
                sx={{
                  width: 450,
                  height: 90,
                  display: "contents",
                  // backgroundColor: "yellow",
                  // borderRadius: 20,
                }}
              >
                <List
                  sx={{
                    width: 410,
                    ml: 2,
                    mb: 2,
                    bgcolor: "background.paper",
                    // overflowY: "scroll",
                    //flexGrow: 2,
                  }}
                >
                  <ListItem sx={{ p: 0 }}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ ml: 1, mr: 1, mt: 2 }}
                    >
                      <DownloadForOfflineIcon fontSize="s" />
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 1, mt: 2 }}
                      onClick={handleClick1({
                        vertical: "bottom",
                        horizontal: "center",
                      })}
                    >
                      <LinkIcon fontSize="medium" />
                      <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open1}
                        onClose={handleClose1}
                        autoHideDuration={3000}
                        message="클립보드에 공유할 링크를 복사했습니다" //링크 복사하는 함수 넣어줘야함. 알림만 띄우게 만들었음
                        key={vertical + horizontal}
                      />
                    </IconButton>
                    <React.Fragment>
                      <ButtonGroup
                        ref={anchorRef}
                        aria-label="split button"
                        sx={{ ml: 7, mr: 1, mt: 2 }}
                      >
                        <Button onClick={handleClick}>
                          {options[selectedIndex]}
                        </Button>
                        <Button
                          size="small"
                          aria-controls={open ? "split-button-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-label="select merge strategy"
                          aria-haspopup="menu"
                          onClick={handleToggle}
                        >
                          <ArrowDropDownIcon />
                        </Button>
                      </ButtonGroup>
                      <Popper
                        sx={{
                          zIndex: 1,
                        }}
                        open={open}
                        anchorEl={() => anchorRef.current!}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                  {options.map((option, index) => (
                                    <MenuItem
                                      key={option}
                                      disabled={index === 0}
                                      selected={index === selectedIndex}
                                      onClick={(event) =>
                                        handleMenuItemClick(event, index)
                                      }
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </React.Fragment>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ ml: 1, mr: 1, mt: 2 }}
                    >
                      저장
                    </Button>
                  </ListItem>
                </List>
                {/* </Box2Top> */}
              </Grid>
              {/* <Box2Middle> */}
              <Grid
                item
                xs
                sx={{
                  width: 450,
                  height: 550,
                  //  backgroundColor: "#666666",
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Container style={{ display: "flex", flex: "1 1 auto" }}>
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
                      댓글
                    </Typography>
                    <Box sx={{ p: 0 }} ref={ref}>
                      <CssBaseline />
                      <List
                        sx={{
                          p: 0,
                          bgcolor: "background.paper",
                        }}
                      >
                        {messages.map(
                          ({ primary, secondary, person }, index) => (
                            <ListItem key={index + person}>
                              <ListItemAvatar>
                                <IconButton>
                                  <Avatar alt="Profile Picture" src={person} />
                                </IconButton>
                              </ListItemAvatar>
                              <ListItemText
                                primary={primary}
                                secondary={secondary}
                              />
                            </ListItem>
                          ),
                        )}
                      </List>
                    </Box>
                  </Box>
                </Container>
              </Grid>
              {/* </Box2Middle> */}
              {/* <Box2Bottom> */}
              <Grid
                item
                //  xs="auto"
                sx={{
                  //  // bottom: "0",
                  // //  top: "auto",
                  //   backgroundColor: "white",
                  //   width: "100%",
                  //   borderRadius: "15px",
                  position: "sticky",
                }}
                style={{
                  bottom: "0",
                  top: "auto",
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <Typography variant="h6" fontWeight="bold" ml={2}>
                  댓글 4개
                </Typography>
                <List
                  sx={{
                    width: 410,
                    ml: 2,
                    bgcolor: "background.paper",
                    overflow: "hidden",
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
                        width: "320px",
                        //   maxHeight: "calc((100vh - 80px) - 16px)", // 수정: 계산식 수정
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
              {/* </Box2Bottom> */}
              {/* </Box2> */}
            </Grid>
          </DemoPaper>
        </MuiPaperRoot>
      </StyledRoot>
    </>
  );
}

export default PinBuilder;

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: "a",
    secondary:
      "Ha! Was literally just watching this movie and searching ‘high fashion’",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "karmiicharmii",
    secondary: "This outfit of andy honestly deserved more screentime",
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Hatis floarea",
    secondary: "Îmi place foarte mult!",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Janelle",
    secondary: "live, love, stanley tucci",
    person: "/static/images/avatar/2.jpg",
  },
];
