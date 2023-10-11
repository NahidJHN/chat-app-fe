import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Container, Divider } from "@mui/material";
import ChatUser from "./ChatUser/ChatUser";
import ChatBox from "./ChatBox/ChatBox";

export default function HomePage() {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Grid
        container
        spacing={1}
        sx={{
          backgroundColor: "primary",
          color: "text.white",
          borderRadius: 5,
          padding: 2,
        }}
      >
        <Grid md={4} sx={{ border: "1px solid #ddd" }}>
          <ChatUser />
        </Grid>
        <Grid md={8} sx={{ border: "1px solid #ddd" }}>
          <ChatBox />
        </Grid>
      </Grid>
    </Container>
  );
}
