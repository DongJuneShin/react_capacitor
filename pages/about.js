import { AppBar, Toolbar } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";

export default function About() {
  return (
    <>
      <Head>
        <title>앱소개 | 투두</title>
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <h1 className="mt-3">어바웃 페이지</h1>

     
    </>
  );
}