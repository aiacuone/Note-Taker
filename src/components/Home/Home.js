import React, { useState } from "react";
import "./styles/home.css";
import "./styles/newHome.css";
import AddFolderButton from "./AddFolderButton";
import menuButton from "images/menu.svg";
import logo from "images/logo.svg";
import Folders from "./Folders";
import AddFolder from "./AddFolder";
import Settings from "./Settings";
import EditFolder from "./EditFolder";
import DeleteFolder from "./DeleteFolder";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";

export default function Home({ state, setState, vars, Folder }) {
  function handleRenderSettings() {
    setState.setHomeRender(["settings"]);
  }
  const [value, setValue] = useState(0);

  function handleAddFolder(e) {
    e.preventDefault();
    setState.setHomeRender(["addFolder", "#A0A0A0"]);
  }
  return (
    <div className="home">
      {/* <img className="home_logo" src={logo} /> */}
      {/* <img
        onMouseDown={handleRenderSettings}
        className="home_folder_settings_button"
        src={menuButton}
        style={{ cursor: "pointer" }}
      /> */}
      <AppBar
        position="static"
        color="transparent"
        style={{ position: "absolute", top: 0 }}
      >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreVertIcon onClick={handleRenderSettings} />
          </IconButton>
          <Grid container style={{ width: "100%" }} justify="center">
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Grid>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AddIcon onClick={handleAddFolder} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {Object.keys(state.folders).length > 0 &&
        state.homeRender[0] == "folders" && (
          <Folders state={state} setState={setState} vars={vars} />
        )}

      {state.homeRender[0] == "addFolder" && (
        <AddFolder state={state} setState={setState} vars={vars} />
      )}
      {state.homeRender[0] == "settings" && (
        <Settings state={state} setState={setState} vars={vars} />
      )}
      {state.homeRender[0] == "folderSettings" && (
        <EditFolder state={state} setState={setState} vars={vars} />
      )}
      {/* <AddFolderButton state={state} setState={setState} vars={vars} /> */}
      {state.homeRender[0] == "deleteFolder" && (
        <DeleteFolder state={state} setState={setState} vars={vars} />
      )}
    </div>
  );
}
