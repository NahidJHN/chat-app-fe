import { Box, Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import UserList from "./UserList";

type PropTypes = {
  conversations: any[];
  user: any;
  onlineUsers: any[];
};

function Conversations({ conversations, user, onlineUsers }: PropTypes) {
  return (
    <Box>
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
        return (
          <React.Fragment key={conversation._id}>
            <UserList
              open={true}
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
    </Box>
  );
}

export default Conversations;
