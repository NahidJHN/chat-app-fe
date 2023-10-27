"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Chat from "@/app/Chat/Chat";

export default function HomePage() {
  const router = useRouter();

  if (
    typeof window !== undefined &&
    localStorage?.getItem("chat-app-token") === null
  ) {
    return (
      <>
        <Typography variant="h3">
          You need to login to access this page
        </Typography>
        <Button onClick={() => router.push("/auth/login")}>Login Now</Button>;
      </>
    );
  }

  return (
    <Container>
      <Box
        sx={{
          border: "1px solid green",
          margin: 1,
          height: "95vh",
        }}
      >
        <Chat />
      </Box>
    </Container>
  );
}
