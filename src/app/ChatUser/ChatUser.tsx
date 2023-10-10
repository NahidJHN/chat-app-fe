import {
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import React from "react";
import UserList from "./UserList";

function ChatUser() {
  return (
    <Stack>
      <Typography variant="h5">Chats</Typography>
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "98%",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "grey.500",
          borderRadius: 15,
        }}
      >
        <IconButton type="button" sx={{ p: "2px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Messenger"
          inputProps={{ "aria-label": "search messenger" }}
        />
      </Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          height: "80vh",
          overflowX: "auto",
          marginTop: 3,
          paddingRight: 2,
        }}
      >
        <UserList
          lastMessage="Hello jan"
          time="2m"
          userName="Faiza akter min"
          userAvatar="s"
          isOnline={false}
          _id="sg"
        />
        <Divider sx={{ padding: 0 }} />,
        <UserList
          lastMessage="Hello jan"
          time="2m"
          userName="Faiza akter min"
          userAvatar="s"
          isOnline={false}
          _id="sg"
        />
      </List>
    </Stack>
  );
}

export default ChatUser;
