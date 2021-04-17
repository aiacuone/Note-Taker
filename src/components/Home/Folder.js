import React from 'react'
import menu_button from 'images/menu.svg'

export default function Folder({ state, setState, vars, folder }) {
	// function handleRenderFolderSettings() {
	// 	setState.setHomeRender(['folderSettings',folder.name])
	// }

	function handleClickFolder(e) {
		
		console.log(e.target.className)
		if (e.target.className == 'home_folder') {
			setState.setDirectory([folder.name])
		}
		if (e.target.className == 'home_folder_menu_button') {
			setState.setHomeRender(['folderSettings',folder.folderColor,folder.name])
		}
	}

	return (
		<p
			class="home_folder"
			style={{ background: folder.folderColor }}
			onClick={handleClickFolder}>
			{folder.name.toUpperCase()}
			<img
				class="home_folder_menu_button"
				src={menu_button}
				// onClick={handleRenderFolderSettings}
			/>
		</p>
	)
}
