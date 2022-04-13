import { AppBar, Toolbar, Button } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";

export default function Contact() {
  return (
    <>
      <Head>
        <title>연락처 | 투두</title>
      </Head>

     
      <AppBar position="fixed">
        <Toolbar>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <h1 className="mt-3">연락처 페이지</h1>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}