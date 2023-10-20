import PinNavBar from "./PinNavBar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import LinkIcon from "@mui/icons-material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TextField from "@mui/material/TextField";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "../api/globals";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useUser } from "../api/user";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  height: 750,
  ...theme.typography.body2,
  display: "flex", // 새로운 스타일 추가
  alignItems: "center", // 새로운 스타일 추가
  boxSizing: "border-box", // 새로운 스타일 추가
  //padding: 25,
}));

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
  const [state, setState] = React.useState<State>({
    open1: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const handleClick1 = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open1: true });
  };

  const ref = React.useRef<HTMLDivElement>(null);
  const url = window.location.href;

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
    writer: {
      id: string;
    };
  }

  interface Member {
    id: string;
    upimage: {
      imgSeq: number;
    };
  }

  interface Image {
    imgSeq: number;
  }

  interface CommentMember {
    id: string;
  }

  interface Comment {
    comment: {
      content: string;
      writer: {
        id: string;
        upimage: {
          imgSeq: number;
        };
      };
      rdate: string;
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
  interface FollowAndFollower {
    followId: string;
    followerId: string;
  }

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const { seq: pinSeq } = useParams(); //pinsSeq 변수에 핀번호 할당
  const [content, setContent] = useState("");
  const [user] = useUser();
  const userId = user?.id;

  const contentInBuilder = async () => {
    const data = await fetch(`http://localhost:8080/commentInPins`, {
      method: "POST",
      body: JSON.stringify({
        content: content,
        pin: `${SERVER_URL}/pins/${pinSeq}`,
        writer: `${SERVER_URL}/members/${userId}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("댓글이 등록되었습니다");
        location.reload();
      }
    });
    return data.json() as Promise<Comment>;
  };

  const createFollow = () => {
    const data = fetch(`${SERVER_URL}/follows`, {
      method: "POST",
      body: JSON.stringify({
        id: {
          follow: `${SERVER_URL}/members/${userId}`,
          follower: `${SERVER_URL}/members/${memberData?.id}`,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  };

  const unFollow = () => {
    const data = fetch(`${SERVER_URL}/follows/${userId}_${memberData?.id}`, {
      method: "DELETE",
    });
    return data;
  };

  const { data: pinData, isLoading: isPinLoading } = useQuery<Data>({
    queryKey: ["pins", pinSeq],
    queryFn: () =>
      fetch(SERVER_URL + "/pins/" + pinSeq + "?projection=pinProjection").then(
        (res) => res.json(),
      ),
  });

  const getFollowerCount = () => {
    const data = fetch(
      `${SERVER_URL}/follows/search/countByIdFollowerId?follower=${pinData?.writer.id}`,
      {
        method: "GET",
      },
    );
    return data;
  };
  const [followerCount, setFollowerCount] = useState(-1);
  useEffect(() => {
    if (!pinData?.writer) {
      return;
    }
    getFollowerCount()
      .then((res) => {
        return res.json();
      })
      .then((count) => {
        setFollowerCount(count);
      });
  }, [getFollowerCount, pinData]);
  // useEffect(() => {
  //   setIsFollowing(followData);
  // }, [followData]);

  // console.log("isFollowing: ", isFollowing);

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
      fetch(SERVER_URL + "/pins/" + pinSeq + "?projection=pinProjection").then(
        (res) => res.json(),
      ),
  });

  const { data: followData } = useQuery<FollowAndFollower>({
    queryKey: ["follows", userId, memberData?.id],
    queryFn: () =>
      fetch(
        SERVER_URL +
          "/follows/search/existsByIdFollowIdAndIdFollowerId?follow=" +
          userId +
          "&follower=" +
          memberData?.id,
      ).then((res) => res.json()),
  });

  console.log("followData: ", followData);
  const [isFollowing, setIsFollowing] = useState(followData);

  useEffect(() => {
    setIsFollowing(followData);
  }, [followData]);

  console.log("isFollowing: ", isFollowing);

  const commentArray = commentData?.comment?.map(
    (comment) => comment as Comment,
  );

  if (!commentArray) {
    // _embedded 또는 commentInPins가 없을 경우에 대한 처리
    return null; // 또는 에러 메시지를 표시하거나 다른 처리를 수행
  }

  interface MessageExample {
    primary: string;
    secondary: string;
    person: string;
    date: string;
  }
  const updatedMessageExamples = messageExamples.slice();
  if (commentArray && commentArray.length > 0) {
    const comContents = commentArray.map((comment) => comment?.content);
    const comRdates = commentArray.map((comment) => comment?.rdate);
    const comIds = commentArray.map((comment) => comment?.writer?.id);
    const comImgSeqs = commentArray.map(
      (comment) => comment?.writer?.upimage?.imgSeq,
    );

    for (let i = 0; i < comContents.length; i++) {
      if (i < updatedMessageExamples.length) {
        updatedMessageExamples[i] = {
          primary: comIds[i],
          secondary: comContents[i],
          person: comImgSeqs[i], // 프로필 사진 경로
          date: comRdates[i],
        };
      } else {
        // commentArray의 길이가 messageExamples보다 크다면 새로운 항목을 추가
        updatedMessageExamples.push({
          primary: comIds[i],
          secondary: comContents[i],
          person: comImgSeqs[i],
          date: comRdates[i],
        });
      }
    }
  }

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

  return (
    <>
      <StyledRoot sx={{ borderRadius: 5 }}>
        <PinNavBar />
        <MuiPaperRoot>
          <DemoPaper elevation={3} sx={{ borderRadius: 5 }}>
            <Box1>
              {imageData && (
                <ImageRoot
                  sx={{
                    float: "left",
                    maxWidth: 450,
                    maxHeight: 750,
                    BorderRadiusTopleft: 5,
                    BorderRadiusBottomleft: 5,
                  }}
                  src={URL.createObjectURL(imageData)}
                />
              )}
            </Box1>
            <Grid
              container
              direction="column"
              sx={{
                display: "flex",
                width: 450,
                height: 750,
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
                }}
              >
                <List
                  sx={{
                    width: 410,
                    ml: 2,
                    mb: 2,
                    bgcolor: "background.paper",
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
                      onClick={() => {
                        handleCopyClipBoard(url).catch((e) => {
                          console.error(e);
                        });
                      }}
                    >
                      <LinkIcon fontSize="medium" />
                      <Snackbar
                        className="URL"
                        anchorOrigin={{ vertical, horizontal }}
                        autoHideDuration={3000}
                        message={"클립보드에 복사 되었습니다"}
                        key={vertical + horizontal}
                      />
                    </IconButton>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ ml: 28, mr: 1, mt: 2 }}
                    >
                      저장
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid
                item
                xs
                sx={{
                  width: 450,
                  height: 550,
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
                        {pinData?.pinTitle}
                      </Typography>
                    )}
                    {pinData && (
                      <Typography variant="body1" gutterBottom>
                        {pinData?.pinDesc}
                      </Typography>
                    )}
                    <List>
                      <ListItem sx={{ p: 0 }}>
                        <ListItemAvatar>
                          <IconButton sx={{ p: 0 }}>
                            {memberData && (
                              <Avatar
                                alt={memberData?.id}
                                src={`http://localhost:8080/upImages/${memberData?.upimage?.imgSeq}/content`}
                              />
                            )}
                          </IconButton>
                        </ListItemAvatar>
                        {memberData && (
                          <ListItemText
                            primary={memberData?.id}
                            secondary={`팔로우 ${followerCount}명`} //{getFollowerCount().catch((e) => {
                            //   console.error(e);})}
                          />
                        )}
                        {isFollowing ? (
                          // {followData === false && userId != memberData?.id && (
                          <Button
                            variant="contained"
                            //color="success"
                            sx={{ ml: 40, position: "absolute" }}
                            onClick={() => {
                              unFollow()
                                .then(() => {
                                  setIsFollowing(false); // 팔로우 성공 시 상태 변경
                                })
                                .catch((e) => {
                                  console.error(e);
                                });
                            }}
                          >
                            팔로잉
                          </Button>
                        ) : (
                          // )}
                          // {followData === true && (
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ ml: 40, position: "absolute" }}
                            onClick={() => {
                              createFollow()
                                .then(() => {
                                  setIsFollowing(true); // 팔로우 성공 시 상태 변경
                                })
                                .catch((e) => {
                                  console.error(e);
                                });
                            }}
                          >
                            팔로우
                          </Button>
                          //  )}
                          // {followData === true && userId === memberData?.id && (
                          //   <Button
                          //     variant="contained"
                          //     color="success"
                          //     sx={{ ml: 40, position: "absolute" }}
                          //     onClick={() => {
                          //       createFollow().catch((e) => {
                          //         console.error(e);
                          //       });
                          //     }}
                          //   ></Button>
                          // )}
                        )}
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
                        {commentArray == false && (
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            gutterBottom
                            mt={2}
                            color="#afafaf"
                          >
                            댓글이 없어요 =͟͟͞͞( ∩ ‘ヮ’=͟͟͞͞) ੭ु⁾⁾
                          </Typography>
                        )}

                        {updatedMessageExamples?.map(
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
                                  style={{ position: "absolute", top: 0 }}
                                >
                                  <Avatar
                                    alt={memberData?.id}
                                    src={`http://localhost:8080/upImages/${person}/content`}
                                    style={{ width: 30, height: 30 }}
                                  />
                                </IconButton>
                              </ListItemAvatar>
                              <ListItemText>
                                <Typography>
                                  <span
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {primary}
                                  </span>
                                  <span style={{ fontSize: "15px" }}>
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
              <Grid
                item
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
                  댓글 <span>{updatedMessageExamples.length}</span>개
                </Typography>
                <List
                  sx={{
                    width: 410,
                    ml: 2,
                    bgcolor: "background.paper",
                    overflow: "hidden",
                  }}
                >
                  <ListItem sx={{ p: 0 }}>
                    <ListItemAvatar>
                      <IconButton>
                        <Avatar alt="Remy Sharp" />
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
                      }}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                      color="error"
                      sx={{
                        marginLeft: 2,
                        backgroundColor: "red",
                      }}
                      onClick={() => {
                        contentInBuilder().catch((e) => {
                          console.error(e);
                        });
                      }}
                    >
                      <SendRoundedIcon sx={{ color: "white" }} />
                    </Button>
                  </ListItem>
                </List>
              </Grid>
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

const messageExamples: MessageExample[] = [];
