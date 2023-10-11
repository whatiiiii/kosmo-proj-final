import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

function Profiletext() {
  return (
    <>
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
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </ListItemAvatar>
          <ListItemText primary="The Fashion Feed" secondary="팔로워 3,913명" />
        </ListItem>
      </List>
    </>
  );
}

export default Profiletext;
