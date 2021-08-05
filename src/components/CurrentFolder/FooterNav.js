import React from "react";
import BackButton from "./BackButton";
import AddFolderButton from "./AddFolderButton";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack, Home, Folder } from "@material-ui/icons";
import { Grid, Accordion } from "@material-ui/core";

export default function FooterNav({ state, setState, vars }) {
  function handleHome() {
    setState.setDirectory([]);
    setState.setRender(["mainSection"]);
  }

  function handleBack(e) {
    e.preventDefault();
    let arr = [...state.directory];
    arr.splice(arr.length - 1, 1);
    setState.setDirectory(arr);
    setState.setRender(["mainSection"]);
  }

  function handleFolders() {
    setState.setRender(["mainSection", "folders"]);
  }

  const buttonStyle = { padding: "0 25px" };

  return (
    // <div className="current_folder_footer_nav">
    <Grid
      container
      justify="center"
      alignContent="space-between"
      //   style={{ maxWidth: "1000px" }}
    >
      {/* <AddFolderButton state={state} setState={setState} vars={vars} /> */}
      {/* <BackButton state={state} setState={setState} vars={vars} /> */}
      <Grid item style={buttonStyle}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <ArrowBack onClick={handleBack} fontSize="large" />
        </IconButton>
      </Grid>

      {/* <h3 onClick={handleClick} className="current_page_nav_button home_nav">
          HOME
        </h3> */}

      <Grid item style={buttonStyle}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Home onClick={handleHome} fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item style={buttonStyle}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Folder onClick={handleFolders} fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
    // </div>
  );
}
