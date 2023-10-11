import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

function Message({ isUser, message }) {
  return (
    <Stack
      component={Box}
      width="100%"
      padding={2}
      justifyContent={isUser ? "flex-end" : "flex-start"}
      direction="row"
    >
      <Stack
        direction={isUser ? "row-reverse" : "row"}
        spacing={1}
        width="70%"
        justifyContent="end"
      >
        {!isUser && <Avatar></Avatar>}
        <Typography
          variant="body2"
          bgcolor="primary.light"
          sx={{
            ":hover": {
              backgroundColor: "primary.dark",
            },
          }}
          paddingX={2}
          paddingY={1}
          borderRadius={3}
          color={"primary.contrastText"}
        >
          {message}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Message;
