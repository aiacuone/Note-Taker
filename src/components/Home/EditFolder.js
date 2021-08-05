import React, { useEffect } from "react";
import AddFolderColors from "./AddFolderColors";
import AddFolderColors2 from "./AddFolderColors2";
import NoteNameWarning from "components/CurrentFolder/NoteNameWarning";
import _ from "lodash";
import delete_button from "images/delete_white.svg";
import { Typography, Button, TextField, Chip } from "@material-ui/core";

export default function EditFolder({
  state = { state },
  setState = { setState },
  vars = { vars },
}) {
  //   console.log(state);
  const folder = state.folders[state.homeRender[2]];
  let selectedFolder = state.homeRender[2];
  let selectedColor = state.homeRender[1];

  function handleExit(e) {
    if (e.target.className == "home") {
      setState.setHomeRender(["folders"]);
      setState.setInput();
    }
  }

  useEffect(() => {
    setState.setInput(selectedFolder);

    document.addEventListener("mousedown", handleExit);

    return () => {
      document.removeEventListener("mousedown", handleExit);
    };
  }, []);

  useEffect(() => {
    function handleEnter(e) {
      if (e.key == "Enter") {
        handleEdit();
      }
    }
    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [state.input, state.homeRender]);

  let error = () => {
    if (state.input) {
      if (
        state.folders[state.input.toLowerCase()] ||
        state.input.length > 15 ||
        state.input.length == 0
      ) {
        return true;
      }
    } else {
      return false;
    }
  };

  function handleEdit() {
    if (state.input.length > 0) {
      let newFolders = { ...state.folders };
      if (!error() && state.input !== selectedFolder) {
        newFolders[state.input] = newFolders[selectedFolder];
        newFolders[state.input].name = state.input;
        delete newFolders[selectedFolder];
      }
      newFolders[state.input].folderColor = selectedColor;
      setState.setFolders(newFolders);
      setState.setHomeRender(["folders"]);
      setState.setInput("");
    }
  }

  function handleClickDelete() {
    let newRender = [...state.homeRender];
    newRender[0] = "deleteFolder";
    setState.setHomeRender(newRender);
  }

  function handleDelete() {
    return;
  }

  return (
    <div className="home_edit_folder">
      {/* <Typography className="home_edit_folder_title">EDIT FOLDER</Typography> */}
      <Chip
        onDelete={handleDelete}
        style={{ background: folder.folderColor }}
        label={state.input && state.input.toUpperCase()}
      ></Chip>
      <AddFolderColors state={state} setState={setState} vars={vars} />
      <div className="home_edit_folder_input_wrapper">
        <TextField
          //   error={true}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          variant="outlined"
          autoFocus
          value={state.input && state.input.toUpperCase()}
          onChange={(e) => setState.setInput(e.target.value.toLowerCase())}
          size="small"
        />

        {error() && state.input !== selectedFolder && (
          <NoteNameWarning state={state} setState={setState} vars={vars} />
        )}
      </div>
      <AddFolderColors2 state={state} setState={setState} vars={vars} />
      <Button variant="contained" onClick={handleEdit}>
        OK
      </Button>
      {/* <img
				className="home_edit_folder_delete_button"
				src={delete_button}
				onClick={handleClickDelete}
			/> */}
    </div>
  );
}
