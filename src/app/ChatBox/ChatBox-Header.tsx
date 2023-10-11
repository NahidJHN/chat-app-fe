import {
  Box,
  IconButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import UserAvatar from "../ChatUser/UserAvater";
import CallIcon from "@mui/icons-material/CallOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ChatBoxProps {
  userName: string;
  isOnline: boolean;
  lastActiveTime: string;
}

function ChatBoxHeader(props: ChatBoxProps) {
  return (
    <Box sx={{ border: "1 px solid #ddd" }}>
      <Stack direction="row" alignItems="center">
        <UserAvatar
          userAvatar="nai"
          userName={props.userName}
          isOnline={true}
        />
        <ListItemText
          primary={props.userName}
          secondary={
            props.isOnline ? "Active now" : props.lastActiveTime + "time ago"
          }
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            "& >*": {
              cursor: "pointer",
              color: "primary.main",
            },
          }}
        >
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ChatBoxHeader;
