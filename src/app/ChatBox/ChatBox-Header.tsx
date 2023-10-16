import { Box, IconButton, ListItemText, Stack } from "@mui/material";
import React from "react";
import UserAvatar from "../ChatUser/UserAvater";
import CallIcon from "@mui/icons-material/CallOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface ChatBoxProps {
  userName: string;
  isOnline: boolean;
  lastActiveTime: string;
  avatar: string;
}

function ChatBoxHeader(props: ChatBoxProps) {
  return (
    <Box sx={{ border: "1 px solid #ddd" }}>
      {props.userName && (
        <Stack direction="row" alignItems="center">
          <UserAvatar
            userAvatar={props.avatar}
            userName={props.userName}
            isOnline={props.isOnline}
          />
          <ListItemText
            primary={props.userName}
            secondary={
              props.isOnline
                ? "Active now"
                : dayjs(props.lastActiveTime).fromNow()
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
      )}
    </Box>
  );
}

export default ChatBoxHeader;
