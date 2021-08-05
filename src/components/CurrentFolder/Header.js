import React from "react";
import NotesNav from "./NotesNav";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MoreVert, Add } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

export default function Header({
  state = { state },
  setState = { setState },
  vars = { vars },
}) {
  const { currentFolder } = vars;

  function handleSettings() {
    setState.setRender(["mainSection", "settings"]);
  }

  function handleAddNote(e) {
    e.preventDefault();
    setState.setRender(["addNote"]);
  }
  return (
    <AppBar
      position="static"
      style={{
        position: "absolute",
        top: 0,
        background: currentFolder.folderColor,
      }}
    >
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MoreVert fontSize="large" onClick={handleSettings} />
        </IconButton>
        <Grid style={{ width: "100%" }}>
          {/* <Typography variant="h6" color="inherit">
            {currentFolder.name.toUpperCase()}
          </Typography> */}
        </Grid>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Add fontSize="large" onClick={handleAddNote} />
        </IconButton>
        {/* <NotesNav state={state} setState={setState} vars={vars} /> */}
      </Toolbar>
    </AppBar>
  );
}
