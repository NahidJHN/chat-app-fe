import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import ChatBoxHeader from "./ChatBox-Header";
import SendIcon from "@mui/icons-material/SendOutlined";
import { useSearchParams } from "next/navigation";
import baseUrl from "@/utils/baseURL";
import useAuthUser from "@/hooks/AuthUser";
import { SocketContext } from "@/context/Socket.context";
import Message from "@/components/Message/Message";

function ChatBox() {
  const boxRef = useRef<HTMLElement>(null);

  const [messages, setMessages] = useState<any[]>([]);
  const [participant, setParticipant] = useState<any>(null); //participant is the user with whom the current user is chatting

  const user = useAuthUser();
  const searchParams = useSearchParams();
  const conversationId = searchParams.get("conversationId");

  const { socket, onlineUsers } = useContext(SocketContext);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    e.preventDefault();
    const message = {
      sender: user?._id,
      content: formData.get("message"),
      conversation: conversationId,
      socketId: participant.socketId,
      receiver: participant._id,
    };

    socket?.emit("chat", message, (data: any) => {
      const prevState = [...messages];
      prevState.push(data);
      setMessages(prevState);
    });

    e.currentTarget.reset();
  };

  const handleFocus = () => {
    socket?.emit("readText", conversationId);
  };

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

    if (user && conversationId) {
      const fetchParticipant = async () => {
        try {
          const { data } = await baseUrl.get(
            `users/${user?._id}/${conversationId}`
          );
          if (onlineUsers.length) {
            console.log(onlineUsers);
            onlineUsers?.forEach((item: any) => {
              if (item._id === data.data._id) {
                data.data.isOnline = false;
                data.data.socketId = item.socketId;
              }
            });
          }
          console.log(data.data);
          setParticipant(data.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchParticipant();
    }
  }, [conversationId, user]);

  useEffect(() => {}, [messages]);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight + 500;
    }
  }, [messages]);

  socket?.on("message", (data: any) => {
    console.log(data);
    const prevState = [...messages];
    prevState.push(data);
    setMessages(prevState);
  });

  return (
    <Stack>
      <ChatBoxHeader
        isOnline={participant?.isOnline || false}
        lastActiveTime={participant?.lastActiveTime}
        userName={participant?.name}
        avatar={participant?.avatar}
      />
      <Divider />
      <Box>
        <Stack justifyContent="space-between" direction="column" height="85vh">
          <Box
            height="100%"
            sx={{
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
            ref={boxRef}
          >
            {messages.map((message) => {
              const isUser = message.sender === user?._id;
              return (
                <Message
                  key={message._id}
                  isUser={isUser}
                  message={message.content}
                />
              );
            })}
          </Box>
          <Box>
            <Stack
              direction="row"
              component="form"
              onSubmit={handleSendMessage}
            >
              <TextField
                fullWidth
                size="small"
                type="text"
                name="message"
                placeholder="Type a message"
                onFocus={handleFocus}
                sx={{
                  width: "90%",
                  margin: "auto",
                  ":focus": {
                    borderColor: "primary.main",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      component={Button}
                      type="submit"
                    >
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
