import { Box, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import UserAvatar from "../ChatUser/UserAvater";

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
      </Stack>
    </Box>
  );
}

export default ChatBoxHeader;
