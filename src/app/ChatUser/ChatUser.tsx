import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext, useEffect, useState } from "react";
import UserList from "./UserList";
import baseUrl from "@/utils/baseURL";
import dayjs from "dayjs";
import useAuthUser from "@/hooks/AuthUser";
import { SocketContext } from "@/context/Socket.context";

function ChatUser() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<any>([]);
  const [timerId, setTimerId] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const user = useAuthUser();
  const { onlineUsers, socket } = useContext(SocketContext);
  const handleSelect = (participant: any) => async () => {
    //create conversation
    const conversation = {
      creator: user?._id,
      participant: participant._id,
    };

    const createConversation = async () => {
      //hit create conversation api
      try {
        const { data } = await baseUrl.post("conversations", conversation);
        window.location.href = `?conversationId=${data.data._id}`;
      } catch (error) {
        console.log(error);
      }
    };

    await createConversation();
  };

  const fetchUsers = async (searchTerms: string) => {
    setLoading(true);
    try {
      const { data } = await baseUrl.get(`users?name=${searchTerms}`);
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onkeyDown = (_event: React.KeyboardEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId);
  };

  const onkeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    clearTimeout(timerId);
    const value = event.currentTarget.value;
    setSearch(value);
    setTimerId(
      setTimeout(() => {
        if (value) fetchUsers(value);
      }, 1000)
    );
  };

  useEffect(() => {
    if (user) {
      // fetch conversation
      const getConversation = async () => {
        try {
          const { data } = await baseUrl(`conversations/${user._id}`);
          setConversations(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getConversation();
    }
  }, [user]);

  socket?.on("conversation", (data: any) => {
    const prevState = [...conversations];
    const index = prevState.findIndex(
      (conversation) => conversation._id === data._id
    );
    prevState[index] = data;
    setConversations(prevState);
  });

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
          position: "relative",
        }}
      >
        <IconButton type="button" sx={{ p: "2px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Messenger"
          inputProps={{ "aria-label": "search messenger" }}
          onKeyDown={onkeyDown}
          onKeyUp={onkeyUp}
        />

        {search && (
          <List
            dense
            sx={{
              width: "85%",
              position: "absolute",
              zIndex: 1,
              top: 40,
              left: "2.3rem",
              minHeight: 400,
              overflow: "auto",
              borderRadius: 2,
              backgroundColor: "background.paper",
              border: "1px solid green",
              padding: 2,
            }}
          >
            {loading && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}

            <Typography variant="h5" margin={1} color="InfoText">
              users
            </Typography>
            <Divider />

            {users.map((user: any, index: number) => {
              const labelId = `checkbox-list-secondary-label-${user}`;

              return (
                <React.Fragment key={user?._id}>
                  <ListItem
                    disablePadding
                    sx={{
                      borderRadius: 1,
                      "&:hover": { backgroundColor: "info.main" },
                    }}
                    onClick={handleSelect(user)}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${user + 1}`}
                          src={user.avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={user.name} />
                    </ListItemButton>
                  </ListItem>
                  {index !== users.length - 1 && (
                    <Divider sx={{ padding: 0 }} />
                  )}
                </React.Fragment>
              );
            })}
          </List>
        )}
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
        {conversations.map((conversation: any, index: number) => {
          const participant =
            conversation?.creator._id === user?._id
              ? conversation?.participant
              : conversation?.creator;

          if (onlineUsers.length) {
            onlineUsers.forEach((item: any) => {
              if (item._id === participant._id) {
                participant.isOnline = true;
                participant.socketId = item.socketId;
              }
            });
          }
          // if (isRead._id === conversation._id) {
          //   conversation.isRead = true;
          // }
          return (
            <React.Fragment key={conversation._id}>
              <UserList
                lastMessage={
                  conversation.lastMessage.slice(0, 30) + "..." || "No message"
                }
                time={dayjs(conversation.lastUpdate).format("hh:mm A")}
                userName={participant.name}
                userAvatar={participant?.avatar}
                isOnline={participant.isOnline}
                isRead={conversation.isRead}
                _id={conversation._id}
              />
              {index !== conversations.length - 1 && (
                <Divider sx={{ padding: 0 }} />
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Stack>
  );
}

export default ChatUser;
