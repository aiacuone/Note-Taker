import React, { useRef, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import menu from "images/menu.svg";
import _ from "lodash";
import dots_image from "images/dots.svg";
import { Paper, Typography, Grid } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Note({ state, setState, vars, note }) {
  let [noteHeight, setNoteHeight] = useState();
  let pageRef = useRef();

  function handleViewNote() {
    //CHANGE NOTE PROPERTIES
    let newFolders = { ...state.folders };
    let newCurrentNotes = { ...vars.currentFolder.notes };
    let directory = [...vars.directoryChain(), "notes"];
    newCurrentNotes[note.title].timesSelected += 1;
    newCurrentNotes[note.title].lastSelected = Date.now();
    _.set(newFolders, directory.join("."), newCurrentNotes);
    setState.setFolders(newFolders);
    //RENDER
    setState.setRender(["viewNote", note]);
  }

  function handlePageChangeEdit() {
    setState.setInput(note.title); //Needs to be done before edit note is rendered
    setState.setRender(["editNote", note]);
  }

  useEffect(() => {
    if (pageRef && pageRef.current) {
      setNoteHeight(pageRef.current.clientHeight);
    }
  }, []);

  let dots = () => {
    return (
      <div className="current_note_dots_container">
        <div className="current_note_dots_wrapper">
          <img className="current_note_dots" src={dots_image} />
        </div>
      </div>
    );
  };

  return (
    // <div className="curret_page_note" onClick={handleViewNote} ref={pageRef}>
    // 	<h1 className="curret_page_note_title">{note.title.toUpperCase()}</h1>
    // 	<div className="curret_page_note_text">
    // 		{ReactHtmlParser(note.content)}
    // 	</div>
    // 	<img
    // 		className="current_folder_note_menu_button"
    // 		src={menu}
    // 		onMouseDown={handlePageChangeEdit}
    // 	/>
    // 	{noteHeight == 500 && dots()}
    // </div>
    <Paper
      onClick={handleViewNote}
      style={{ margin: "20px", minWidth: "280px", position: "relative" }}
    >
      <Grid container justify="center" style={{ padding: "20px" }}>
        <MoreVertIcon
          onClick={handlePageChangeEdit}
          style={{ position: "absolute", top: 10, right: 10 }}
        />
        <Typography variant="h4">{note.title.toUpperCase()}</Typography>
        <div className="curret_page_note_text">
          {ReactHtmlParser(note.content)}
        </div>
        {noteHeight === 500 && dots()}
      </Grid>
    </Paper>
  );
}
