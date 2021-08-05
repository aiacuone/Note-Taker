import React from "react";

export default function AddFolderColors({ state, setState, vars }) {
  let selectedColor = state.homeRender[1];
  let selectedFolder = state.homeRender[2];

  function handleColorChange(color) {
    let newHomeRender = [...state.homeRender];
    newHomeRender[1] = color;
    setState.setHomeRender(newHomeRender);
    if (selectedFolder) {
      let newFolders = { ...state.folders };
      newFolders[selectedFolder].folderColor = color;
      setState.setFolders(newFolders);
    }
  }

  let colors = vars.colors.map((color, index) => {
    let style = {
      background: color,
      border: selectedColor == color ? "2px white solid" : null,
    };
    if (index < vars.colors.length / 2) {
      return (
        <div
          key={color}
          className="home_folder_color_option"
          onMouseDown={() => handleColorChange(color)}
          style={style}
        ></div>
      );
    }
  });

  return <div className="home_add_folder_addcolors">{colors}</div>;
}
