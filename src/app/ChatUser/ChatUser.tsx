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
import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import jwtDecode from "jwt-decode";
import baseUrl from "@/utils/baseURL";
import dayjs from "dayjs";

function ChatUser() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<any>([]);
  const [timerId, setTimerId] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<any>();

  const handleSelect = (user: any) => async () => {
    //create conversation
    const conversation = {
      creator: token._id,
      participant: user._id,
    };

    const createConversation = async () => {
      //hit create conversation api
      try {
        const { data } = await baseUrl.post("conversations", conversation);
        window.location.href = `?${data.data._id}`;
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
    const getToken = localStorage.getItem("chat-app-token");
    if (getToken) {
      const decodeToken: any = jwtDecode(getToken);
      setToken(decodeToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      // fetch conversation
      const getConversation = async () => {
        try {
          const { data } = await baseUrl(`conversations/${token._id}`);
          setConversations(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getConversation();
    }
  }, [token]);

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
            }}
          >
            {loading && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}

            <Typography variant="h5" margin={1}>
              users
            </Typography>
            <Divider />

            {users.map((user: any, index: number) => {
              const labelId = `checkbox-list-secondary-label-${user}`;
              return (
                <>
                  <ListItem
                    key={user}
                    disablePadding
                    sx={{ "&:hover": { backgroundColor: "grey.500" } }}
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
                </>
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
          const user =
            conversation?.creator._id === token._id
              ? conversation?.participant
              : conversation?.creator;
          return (
            <>
              <UserList
                lastMessage={conversation.lastMessage || "No message"}
                time={dayjs(conversation.lastUpdate).format("hh:mm A")}
                userName={user.name}
                userAvatar={user?.avatar}
                isOnline={user.isOnline}
                _id={conversation._id}
              />
              {index !== conversations.length - 1 && (
                <Divider sx={{ padding: 0 }} />
              )}
            </>
          );
        })}
      </List>
    </Stack>
  );
}

export default ChatUser;
