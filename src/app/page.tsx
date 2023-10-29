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
    router.replace("/auth/login");
  }

  return (
    typeof window !== undefined && (
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
    )
  );
}
