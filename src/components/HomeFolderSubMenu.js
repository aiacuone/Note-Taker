import React from 'react'

export default function HomeFolderSubMenu({ folder, state, setState, vars }) {
	let colors = vars.colors.map((item, index) => {
		if (index >= vars.colors.length / 2) {
			return (
				<div
					class="home_folder_color_option"
					onMouseDown={() => {
						let newFolders = { ...state.folders }
						newFolders[state.toggleHomeFolderMenu[0]].folderColor = item
						setState.setFolders(newFolders)
					}}
					style={{ background: item }}></div>
			)
		}
	})

	return (
		<div class="home_folder_sub_menu">
			{state.toggleHomeFolderMenu &&
				state.toggleHomeFolderMenu[1] == 'color' &&
				colors}
		</div>
	)
}
