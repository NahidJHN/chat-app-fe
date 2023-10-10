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
      <Grid container spacing={3}>
        <Grid md={4}>
          <ChatUser />
        </Grid>
        <Grid md={5}>
          <ChatBox />
        </Grid>
        <Grid md={3}>current user side</Grid>
      </Grid>
    </Container>
  );
}
