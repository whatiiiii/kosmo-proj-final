import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useUser } from "../api/user";

function Profiletext() {
  const [user, setUser] = useUser();
  setUser(user);
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
              <Avatar alt={user!.id} src="/static/images/avatar/2.jpg" />
            </IconButton>
          </ListItemAvatar>
          <ListItemText primary={user!.id} secondary="팔로워 3,913명" />
        </ListItem>
      </List>
    </>
  );
}

export default Profiletext;
