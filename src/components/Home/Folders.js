import React, { useRef, useState, useEffect } from "react";
import Folder from "./Folder";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";

import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Folders({ state, setState, vars }) {
  let [element, setElement] = useState();
  let sortHomeFolders = state.settings.sortHomeFolders;
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
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
    // <Grid container direction="column" alignContent="center" justify="center">

    <Paper>
      <Grid
        container
        justify="center"
        alignContent="center"
        style={{ padding: "20px" }}
        direction="column"
      >
        <Grid item>
          <Typography variant="h5" align="center">
            Folders
          </Typography>
        </Grid>
        <div>
          <List dense={dense}>
            {folders}
            {/* {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )} */}
          </List>
        </div>
      </Grid>
    </Paper>
    // </Grid>
  );
}
