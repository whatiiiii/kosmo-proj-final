import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import Button from "@mui/material/Button";

function ListItemLink({ href, text }: { href: string; text: string }) {
  return (
    <ListItem disablePadding>
      <ListItemButton href={href}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default function TestPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              테스트 페이지
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <nav>
          <List>
            <ListItemLink href="/omok" text="오목판 테스트" />
            <ListItemLink href="/clock" text="시계 테스트" />
            <ListItemLink href="/button" text="버튼 테스트" />
            <ListItemLink href="/pin" text="핀 테스트" />
            <ListItemLink href="/signin" text="로그인" />
            <ListItemLink href="/signup" text="회원가입" />
            <ListItemLink href="/profile" text="프로필" />
            <ListItemLink href="/pin-builder" text="핀빌더" />
            <ListItemLink href="/makepin" text="핀만들기" />
            <ListItemLink href="/profiletab" text="프로필탭" />
            <ListItemLink href="/feed" text="피드" />
            <ListItemLink href="/image" text="이미지" />
            <ListItemLink href="/test" text="테스트" />
          </List>
        </nav>
      </Box>
    </Container>
  );
}
