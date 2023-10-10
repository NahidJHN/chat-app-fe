import { Stack } from "@mui/material";
import React from "react";
import ChatBoxHeader from "./ChatBox-Header";

function ChatBox() {
  return (
    <Stack>
      <ChatBoxHeader isOnline={false} lastActiveTime="" userName="Nahid" />
    </Stack>
  );
}

export default ChatBox;
