import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatBoxHeader from "./ChatBox-Header";
import SendIcon from "@mui/icons-material/SendOutlined";
import Message from "../../components/Message/Message";
import { useSearchParams } from "next/navigation";
import baseUrl from "@/utils/baseURL";
import jwtDecode from "jwt-decode";
import useAuthUser from "@/hooks/AuthUser";

function ChatBox() {
  const [token, setToken] = useState<any>(null); //token._id
  const [messages, setMessages] = useState<any[]>([]);
  const user = useAuthUser();
  const searchParams = useSearchParams();

  const conversationId = searchParams.get("conversationId");

  useEffect(() => {
    const getToken = localStorage.getItem("chat-app-token");
    if (!getToken) return;
    const token = jwtDecode(getToken);
    setToken(token);
  }, []);

  useEffect(() => {
    //fetch messages function
    const fetchMessages = async () => {
      try {
        const { data } = await baseUrl.get(`messages/${conversationId}`);
        setMessages(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [conversationId]);

  return (
    <Stack>
      <ChatBoxHeader isOnline={false} lastActiveTime="" userName="Nahid" />
      <Divider />
      <Box>
        <Stack justifyContent="space-between" direction="column" height="85vh">
          <Box height="100%" sx={{ overflowY: "auto" }}>
            {messages.map((message) => {
              const isUser = message.sender._id === token._id;

              return <Message isUser={isUser} message={message.content} />;
            })}
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
