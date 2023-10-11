import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import ChatBoxHeader from "./ChatBox-Header";
import SendIcon from "@mui/icons-material/SendOutlined";
import Message from "../../components/Message/Message";

function ChatBox() {
  return (
    <Stack>
      <ChatBoxHeader isOnline={false} lastActiveTime="" userName="Nahid" />
      <Divider />
      <Box>
        <Stack justifyContent="space-between" direction="column" height="85vh">
          <Box height="100%" sx={{ overflowY: "auto" }}>
            <Message
              isUser={true}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nulla ratione quisquam eveniet, ab alias ducimus facere repudiandae assumenda."
            />
            <Message
              isUser={false}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nulla ratione quisquam eveniet, ab alias ducimus facere repudiandae assumenda."
            />
            <Message
              isUser={true}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nulla ratione quisquam eveniet, ab alias ducimus facere repudiandae assumenda."
            />
            <Message
              isUser={true}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nulla ratione quisquam eveniet, ab alias ducimus facere repudiandae assumenda."
            />
            <Message
              isUser={true}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus nulla ratione quisquam eveniet, ab alias ducimus facere repudiandae assumenda."
            />
          </Box>
          <Box>
            <Stack direction="row">
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Type a message"
                sx={{
                  width: "90%",
                  margin: "auto",
                  ":focus": {
                    borderColor: "primary.main",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendIcon
                        sx={{ cursor: "pointer", color: "primary.main" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default ChatBox;
