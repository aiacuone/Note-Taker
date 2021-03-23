import React from 'react'

export default function HomeFolderSubMenu({ folder, state, setState, vars }) {
	let colors = vars.colors.map((item, index) => {
		if (index >= vars.colors.length / 2) {
			return (
				<div
					class="home_folder_color_option"
					onMouseDown={() => {
						let newFolders = { ...state.folders }
						newFolders[state.home.toggleHomeFolderMenu[0]].folderColor = item
						setState.setFolders(newFolders)
						setState.setHome({ ...state.home, toggleHomeFolderMenu: null })
					}}
					style={{ background: item }}></div>
			)
		}
	})

	let subMenu = () => {
		if (
			state.home.toggleHomeFolderMenu &&
			state.home.toggleHomeFolderMenu[1] == 'color'
		) {
			return colors
		} else if (
			state.home.toggleHomeFolderMenu &&
			state.home.toggleHomeFolderMenu[1] == 'delete' &&
			state.home.toggleHomeFolderMenu[2] == 'yes'
		) {
			return (
				<div>
					<p
						class="home_folder_delete_confirm"
						style={{ color: 'red' }}
						onClick={() => {
							let newFolders = { ...state.folders }
							delete newFolders[state.home.toggleHomeFolderMenu[0]]
							setState.setFolders(newFolders)
							setState.setHome({ ...state.home, toggleHomeFolderMenu: null })
						}}>
						DELETE
					</p>
				</div>
			)
		}
	}

	return <div class="home_folder_sub_menu">{subMenu()}</div>
}
