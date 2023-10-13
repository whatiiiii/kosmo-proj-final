import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import PinNavBar from "./PinNavBar";
import ProfileFooter from "./ProfileFooter";
import EditProfilePage from "./EditProfilePage";
import AccountSetting from "./AccountSetting";
import ProfileVisibility from "./ProfileVisibility";
import ProfileSecurity from "./ProfileSecurity";

export default function ProfileTab() {
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        overflowX: "hidden",
      }}
    >
      <PinNavBar />
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ marginTop: 16 }}
      ></List>
      <Divider sx={{ borderBottomWidth: "inherit" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <List
          component="nav"
          aria-label="secondary mailbox folder"
          sx={{ width: "400px", paddingRight: "100px", paddingBottom: "397px" }}
        >
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <Typography fontWeight="bold">프로필 수정</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <Typography fontWeight="bold">계정 관리</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <Typography fontWeight="bold">프로필 가시성</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <Typography fontWeight="bold">홈피드 조정</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <Typography fontWeight="bold">소유권이 표시된 계정</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <Typography fontWeight="bold">소셜 권한</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
          >
            <Typography fontWeight="bold">알림</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 9}
            onClick={(event) => handleListItemClick(event, 9)}
          >
            <Typography fontWeight="bold">개인정보 및 데이터</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 10}
            onClick={(event) => handleListItemClick(event, 10)}
          >
            <Typography fontWeight="bold">보안</Typography>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 11}
            onClick={(event) => handleListItemClick(event, 11)}
          >
            <Typography fontWeight="bold">브랜드 컨텐츠</Typography>
          </ListItemButton>
        </List>

        {selectedIndex === 2 && <EditProfilePage />}
        {selectedIndex === 3 && <AccountSetting />}
        {selectedIndex === 4 && <ProfileVisibility />}
        {selectedIndex === 10 && <ProfileSecurity />}
      </div>
      <ProfileFooter />
    </Box>
  );
}
