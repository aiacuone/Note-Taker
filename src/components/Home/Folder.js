import React from "react";
import menu_button from "images/menu.svg";
import Chip from "@material-ui/core/Chip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import Popover from "@material-ui/core/Popover";
import DeleteFolder from "./DeleteFolder";
import { Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Folder({ state, setState, vars, folder }) {
  const [anchorEl, setAnchorEl] = useState(null);

  // function handleClick(e) {

  // 	let clickedFolderOrSettings =
  // 		e.target.className == 'home_folder'
  // 			? 'folder'
  // 			: e.target.className == 'home_folder_menu_button' && 'settings'

  // 	if (clickedFolderOrSettings == 'folder') {
  // 		handleClickFolder()
  // 	}
  // 	if (clickedFolderOrSettings == 'settings') {
  // 		handleClickSettings()
  // 	}
  // }

  function handleClickFolder() {
    let newFolders = { ...state.folders };
    newFolders[folder.name].lastSelected = Date.now();
    newFolders[folder.name].timesSelected += 1;
    setState.setFolders(newFolders);
    setState.setDirectory([folder.name]);
  }

  function handleClickSettings() {
    setState.setHomeRender(["folderSettings", folder.folderColor, folder.name]);
  }

  function handleDelete(e) {
    setAnchorEl(e.currentTarget);
  }

  const handleClick = (e) => {
    // !e.target.textContent ? setAnchorEl(e.currentTarget) : handleClickFolder();
    // !e.target.textContent ? handleClickSettings() : handleClickFolder();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    // <Grid item style={{ textAlign: "center", padding: "10px" }}>
    //   <Chip
    //     className="home_folder"
    //     label={folder.name.toUpperCase()}
    //     onDelete={handleDelete}
    //     icon={<MoreVertIcon style={{ color: "white" }} />}
    //     style={{ background: folder.folderColor, padding: "20px" }}
    //     onClick={handleClick}
    //   ></Chip>

    //   <Popover
    //     open={open}
    //     // style={{ padding: "30px" }}
    //     anchorEl={anchorEl}
    //     onClose={handleClose}
    //     anchorOrigin={{
    //       vertical: "top",
    //       horizontal: "left",
    //     }}
    //     transformOrigin={{
    //       vertical: "bottom",
    //       horizontal: "center",
    //     }}
    //   >
    //     <DeleteFolder vars={vars} state={state} setState={setState} />
    //   </Popover>
    // </Grid>
    <ListItem>
      <ListItemAvatar onClick={handleClickFolder}>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        onClick={handleClickFolder}
        primary={folder.name.toUpperCase()}
        // secondary={secondary ? "Secondary text" : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
