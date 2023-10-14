"use client";

import * as React from "react";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

interface PropTypes {
  isOnline: boolean;
  userName: string;
  userAvatar: string;
}

interface BadgeOwnProps {
  isOnline: boolean;
}

const StyledBadge = styled(Badge)<BadgeOwnProps>(({ theme, isOnline }) => {
  return {
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
  };
});

function UserAvatar(props: PropTypes) {
  return (
    <ListItemAvatar>
      <StyledBadge
        isOnline={props.isOnline}
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt={props.userName} src={props.userAvatar} />
      </StyledBadge>
    </ListItemAvatar>
  );
}

export default UserAvatar;
