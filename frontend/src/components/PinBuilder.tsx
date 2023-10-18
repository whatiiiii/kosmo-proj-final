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
import { ListItemButton, stepContentClasses } from "@mui/material";
import TextField from "@mui/material/TextField";

import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "../api/globals";
import Pin from "./Pin";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    date: message.date,
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
    if (ref.current) {
      ref.current.ownerDocument.body.scrollTop = 0;
      setMessages(refreshMessages());
    }
  }, [value, setMessages]);

  interface Data {
    pinSeq: number;
    pinTitle: string;
    pinDesc: number;
    image: number;
    pinRdate: Date;
    pinWriter: string;
    comment: string;
    saves: number;
    tags: number;
    id: string;
  }

  interface Member {
    id: string;
  }

  interface Image {
    imgSeq: number;
  }

  interface CommentMember {
    id: string;
  }

  interface Comment {
    _embedded: {
      commentInPins: Comment[];
    };
  }
  interface CommentWithContent extends Comment {
    content: string;
    rdate: string;
    _links: {
      writer: {
        href: string; // writer.href를 문자열로 지정
      };
    };
  }
  const { seq: pinSeq } = useParams(); //pinsSeq 변수에 핀번호 할당

  const { data: pinData, isLoading: isPinLoading } = useQuery<Data>({
    queryKey: ["pins", pinSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/" + pinSeq).then((res) => res.json()),
  });

  const { data: memberData, isLoading: isMemberLoading } = useQuery<Member>({
    queryKey: ["members", pinSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/" + pinSeq + "/pinWriter").then((res) =>
        res.json(),
      ),
  });

  const { data: image } = useQuery<Image>({
    queryKey: ["images", pinSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/" + pinSeq + "/PinImg").then((res) =>
        res.json(),
      ),
  });

  const { data: imageData, isLoading: isImageLoading } = useQuery<Blob>({
    queryKey: ["upImage", image?.imgSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/upImages/" + image?.imgSeq + "/content").then(
        (res) => res.blob(),
      ),
  });

  const { data: commentData, isLoading: isCommentLoading } = useQuery<Comment>({
    queryKey: ["commentInPins", pinSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/" + pinSeq + "/comment").then((res) =>
        res.json(),
      ),
  });

  // const { data: commentIdData } = useQuery<CommentMember>({
  //   queryKey: ["commentId"],
  //   queryFn: () => fetch(writerUrl).then((res) => res.json()),
  // });

  const commentArray = commentData?._embedded?.commentInPins?.map(
    (comment) => comment as CommentWithContent,
  );

  if (!commentArray) {
    // _embedded 또는 commentInPins가 없을 경우에 대한 처리
    return null; // 또는 에러 메시지를 표시하거나 다른 처리를 수행
  }

  // const rdateArray: string[] = commentData._embedded.commentInPins.map(
  //   (comment) => comment.rdate,
  // );
  // const writerLinks: string[] = commentData._embedded.commentInPins.map(
  //   (comment) => comment._links.writer.href,
  // );

  // if (commentArray && commentArray.length > 0) {
  //   //messageExamples[0].secondary = commentArray[0].content;
  //   //messageExamples[0].date = commentArray[0].rdate;
  //   const comContents = commentArray.map((comment) => comment.content);
  //   const comRdate = commentArray.map((comment)=> comment.rdate);

  // }

  // if (commentArray && commentArray.length > 0) {
  //   // for (let i = 0; i < commentArray.length; i++) {
  //   messageExamples[0].secondary = commentArray[0].content;
  //   // }
  // }

  if (commentArray && commentArray.length > 0) {
    const comContents = commentArray.map((comment) => comment.content);
    const comRdates = commentArray.map((comment) => comment.rdate);
    const comIds = commentArray.map((comment) => comment._links.writer.href);

    // Promise를 사용하여 데이터를 가져옴
    // const fetchData = async (url: string) => {
    //   const response = await fetch(url);
    //   const data = (await response.json()) as Promise<CommentMember>;
    //   return data;
    // };

    //const updateMessageExamples = async () => {
    for (let i = 0; i < commentArray.length; i++) {
      const comment = comContents[i];
      const rdate = comRdates[i];
      const writerUrl = comIds[i];

      const response = fetch(writerUrl, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response: ", response);
      //  const commentIdData = await fetchData(writerUrl);
      // console.log("commentIdData.id", commentIdData.id);
      // console.log("comment", comment);
      // commentIdData를 받아와서 messageExamples에 추가
      messageExamples.push({
        primary: "  dsd",
        secondary: comment,
        person: "/static/images/avatar/5.jpg", // 프로필 사진 경로
        date: rdate,
      });
    }
    // };

    // 함수를 호출하여 messageExamples를 업데이트
    // updateMessageExamples();
  }
  // console.log("commentArray", commentArray);
  // console.log("contentArray: ", commentArray[0].content);
  // console.log("rdateArray: ", commentArray[0].rdate);
  // console.log("writerLinks: ", commentArray[0]._links.writer.href);

  if (isImageLoading) {
    return <div>actually ImageLoading..</div>;
  }

  if (isPinLoading) {
    return <div>actually PinLoading..</div>;
  }

  if (isMemberLoading) {
    return <div>actually MemberLoading..</div>;
  }

  if (isCommentLoading) {
    return <div>actually CommentLoading..</div>;
  }

  // if (isCommentIdLoading) {
  //   return <div>actually CommentIdLoading..</div>;
  // }

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
              {imageData && <ImageRoot src={URL.createObjectURL(imageData)} />}
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
                      <DownloadForOfflineIcon fontSize="medium" />
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
                    {pinData && (
                      <Typography
                        variant="h4"
                        gutterBottom
                        style={{ fontWeight: "bold" }}
                      >
                        {pinData.pinTitle}
                      </Typography>
                    )}
                    {pinData && (
                      <Typography variant="body1" gutterBottom>
                        {pinData.pinDesc}
                      </Typography>
                    )}
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
                        {memberData && (
                          <ListItemText
                            primary={memberData.id}
                            secondary="팔로워 3,913명"
                          />
                        )}
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
                          ({ primary, secondary, person, date }, index) => (
                            <ListItem
                              key={index + person}
                              style={{
                                paddingTop: 0,
                                paddingBottom: 8,
                                paddingLeft: 0,
                                paddingRight: 16,
                              }}
                            >
                              <ListItemAvatar>
                                <IconButton
                                  // size="small"
                                  style={{ position: "absolute", top: 0 }}
                                >
                                  <Avatar
                                    alt="Profile Picture"
                                    src={person}
                                    style={{ width: 30, height: 30 }}
                                  />
                                </IconButton>
                              </ListItemAvatar>
                              <ListItemText>
                                <Typography
                                // variant="h6"
                                // style={{ fontSize: "15px" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {primary}
                                  </span>
                                  <span style={{ fontSize: "15px" }}>
                                    {" "}
                                    {secondary}
                                  </span>
                                </Typography>
                                <Typography>
                                  <span style={{ fontSize: "11px" }}>
                                    {date}
                                  </span>
                                </Typography>
                              </ListItemText>
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
                  position: "sticky",
                  borderTop: 0.2,
                  borderColor: "lightgray",
                }}
                style={{
                  bottom: "0",
                  top: "auto",
                  backgroundColor: "white",
                  width: "100%",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 15,
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
  date: string;
}

// const messageExamples: readonly MessageExample[] = [
//   {
//     primary: "dsdddsd",
//     secondary: "dsdsd",
//     person: "/static/images/avatar/5.jpg",
//     date: "날dsd짜",
//   },
// ];

let messageExamples: MessageExample[] = [];
