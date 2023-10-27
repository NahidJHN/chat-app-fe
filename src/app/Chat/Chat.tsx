import React, { useContext, useEffect, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Tooltip } from "@mui/material";

import baseUrl from "@/utils/baseURL";
import useAuthUser from "@/hooks/AuthUser";
import { SocketContext } from "@/context/Socket.context";
import Conversations from "./Conversations";
import SearchUser from "./SearchUser";
import ChatHeader from "./Chat-Header";
import { useSearchParams } from "next/navigation";
import ChatBox from "./ChatBox";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - ${80}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundImage: "none",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    position: "relative",
    overflowX: "hidden",
  },
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [conversations, setConversations] = useState<any[]>([]);
  const [participant, setParticipant] = useState<any>(null); //participant is the user with whom the current user is chatting

  const user = useAuthUser();
  const searchParams = useSearchParams();
  const conversationId = searchParams.get("conversationId");

  const { onlineUsers, socket } = useContext(SocketContext);

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

  useEffect(() => {
    if (user && conversationId) {
      fetchParticipant(onlineUsers, user, conversationId);
    }
  }, [conversationId, user, onlineUsers]);

  socket?.on("conversation", (data: any) => {
    const prevState = [...conversations];
    const index = prevState.findIndex(
      (conversation) => conversation._id === data._id
    );
    prevState[index] = data;
    setConversations(prevState);
  });

  const fetchParticipant = async (
    onlineUsers: any[],
    user: any,
    conversationId: string
  ) => {
    try {
      const { data } = await baseUrl.get(`users/${user._id}/${conversationId}`);
      if (onlineUsers.length) {
        onlineUsers?.forEach((item: any) => {
          if (item._id === data.data._id) {
            data.data.socketId = item.socketId;
          }
        });
      }

      setParticipant(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex", position: "relative", maxHeight: "100%" }}>
      <AppBar position="absolute" open={open} elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "start" }}>
          <Box>
            {open ? (
              <Tooltip title="Close" placement="bottom">
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  onClick={handleDrawerClose}
                  edge="start"
                >
                  <MenuOpenIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Open" placement="bottom">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
          <Box sx={{ flexGrow: 1, marginLeft: { xs: 0.5, sm: 1, md: 3 } }}>
            {participant && (
              <ChatHeader
                avatar={participant.avatar}
                isOnline={participant.isOnline}
                lastActiveTime={participant.lastActiveTime}
                userName={participant.name}
                socketId={participant.socketId}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" flex={1} textAlign="center">
            Chats
          </Typography>
        </DrawerHeader>
        <Divider />
        <SearchUser user={user} />
        <Divider />
        <Conversations
          conversations={conversations}
          user={user}
          onlineUsers={onlineUsers}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <ChatBox participant={participant} user={user} />
      </Box>
    </Box>
  );
}
