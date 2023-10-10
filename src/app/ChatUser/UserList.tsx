"use client";

import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Badge, Link, Stack, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import NextLink from "next/link";
import UserAvatar from "./UserAvater";

interface PropTypes {
  userName: string;
  lastMessage: string;
  time: string;
  userAvatar: string;
  isOnline: false;
  _id: string;
}
interface BadgeOwnProps {
  isOnline: boolean;
}

const StyledBadge = styled(Badge)<BadgeOwnProps>(({ theme, isOnline }) => ({
  "& .MuiBadge-badge": {
    ...(isOnline && {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        //   animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    }),
  },
  //   "@keyframes ripple": {
  //     "0%": {
  //       transform: "scale(.8)",
  //       opacity: 1,
  //     },
  //     "100%": {
  //       transform: "scale(2.4)",
  //       opacity: 0,
  //     },
  //   },
}));

function UserList(props: PropTypes) {
  return (
    <Link
      href={"/" + props._id}
      component={NextLink}
      variant="body2"
      sx={{ textDecoration: "none", color: "initial" }}
    >
      <ListItem
        alignItems="center"
        sx={{
          borderRadius: 5,
          cursor: "pointer",
          padding: 2,
          ":hover": {
            backgroundColor: "#ddd",
          },
        }}
      >
        {/* <ListItemAvatar> */}
        <UserAvatar
          isOnline={props.isOnline}
          userAvatar={props.userAvatar}
          userName={props.userAvatar}
        />
        {/* </ListItemAvatar> */}
        <ListItemText
          primary={props.userName}
          secondary={
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              component="span"
            >
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="grey.500"
              >
                {props.lastMessage}
              </Typography>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="grey.500"
              >
                .{props.time}
              </Typography>
            </Stack>
          }
        />
      </ListItem>
    </Link>
  );
}

export default UserList;
