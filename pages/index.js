import { AppBar, Toolbar } from "@mui/material";
import Head from "next/head";
import ToolbarContent from "../components/ToolbarContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 | 투두</title>
      </Head>

      
      <AppBar position="fixed">
        <Toolbar>
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <h1 className="mt-3">메인 페이지</h1>
    </>
  );
}