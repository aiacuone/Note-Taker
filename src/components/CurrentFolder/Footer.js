import React from "react";
import FoldersSection from "./FoldersSection";
import FooterNav from "./FooterNav";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MoreVert, ArrowBack } from "@material-ui/icons";

export default function Footer({ state, setState, vars }) {
  const { currentFolder } = vars;

  function handleClick() {
    setState.setDirectory([]);
    setState.setRender(["mainSection"]);
  }

  return (
    // <div className="current_folder_footer">
    //   {Object.keys(vars.currentFolder.folders).length > 0 && (
    //     <FoldersSection state={state} setState={setState} vars={vars} />
    //   )}
    //   <FooterNav state={state} setState={setState} vars={vars} />
    // </div>
    <AppBar
      position="static"
      style={{
        position: "absolute",
        bottom: "0",
        background: currentFolder.folderColor,
      }}
    >
      <Toolbar variant="dense">
        <FooterNav state={state} setState={setState} vars={vars} />
      </Toolbar>
    </AppBar>
  );
}
