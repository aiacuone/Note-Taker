import React, { useRef, useState, useEffect } from "react";
import Folder from "./Folder";
import { Grid } from "@material-ui/core";

export default function Folders({ state, setState, vars }) {
  let [element, setElement] = useState();
  let sortHomeFolders = state.settings.sortHomeFolders;

  let sortedFolders = () => {
    let arr = [];
    Object.keys(state.folders).map((item) => {
      arr.push(state.folders[item]);
    });
    //SORTS ARRAY
    if (sortHomeFolders == "recent") {
      return arr
        .sort((a, b) => {
          return a["lastSelected"] - b["lastSelected"];
        })
        .reverse();
    } else if (sortHomeFolders == "date") {
      return arr.sort((a, b) => {
        return a["dateCreated"] - b["dateCreated"];
      });
    } else if (sortHomeFolders == "name") {
      return arr.sort((a, b) => {
        if (a["name"] < b["name"]) {
          return -1;
        }
        if (a["name"] > b["name"]) {
          return 1;
        }
        return 0;
      });
    }
  };

  let folders = sortedFolders().map((folder) => {
    return (
      <Folder
        key={folder.name}
        state={state}
        setState={setState}
        vars={vars}
        folder={folder}
      />
    );
  });
  let wrapperRef = useRef();
  let scrollbarWidth;
  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      setElement({
        offsetWidth: wrapperRef.current.offsetWidth,
        clientWidth: wrapperRef.current.clientWidth,
      });
    }
  }, []);

  if (element) {
    scrollbarWidth = element.offsetWidth - element.clientWidth;
  }

  return (
    <Grid container direction="column" alignContent="center">
      {folders}
    </Grid>
  );
}
