import React from 'react'
import _ from 'lodash'

export default function HomeFolderMenu({ folder, state, setState, vars }) {
	let menuOptions = () => {
		let arr = ['delete', 'rename', 'color']
		if (
			state.toggleHomeFolderMenu &&
			state.toggleHomeFolderMenu[1] == 'color'
		) {
			return vars.colors.map((item, index) => {
				if (index < vars.colors.length / 2) {
					return (
						<div
							class="home_folder_color_option"
							onMouseDown={() => {
								let newFolders = { ...state.folders }
								newFolders[state.toggleHomeFolderMenu[0]].folderColor = item
								setState.setFolders(newFolders)
								//TO KEEP
								let newHome = { ...state.home, toggleHomeFolderMenu: null }
								setState.setHome(newHome)
								//TO DELETE
								setState.setToggleHomeFolderMenu(null)
							}}
							style={{ background: item }}></div>
					)
				}
			})
		} else if (
			state.toggleHomeFolderMenu &&
			state.toggleHomeFolderMenu[1] == 'delete'
		) {
			return (
		
				<div class='home_folder_delete_confirm'><p class='home_folder_delete_confirm'>Are you sure you want to delete?</p></div>
		
			)

		
		} else {
			return arr.map((item) => {
				return (
					<p
						class="home_folder_menu_options"
						onMouseDown={() => {
							let newArr = [...state.toggleHomeFolderMenu]
							newArr[1] = item
							//TO KEEP
							let newHome = { ...state.home, toggleHomeFolderMenu: newArr }
							setState.setHome(newHome)
							//TO DELETE
							setState.setToggleHomeFolderMenu(newArr)
						}}>
						{item.toUpperCase()}
					</p>
				)
			})
		}
	}
	return <div class="home_folder_menu">{menuOptions()}</div>
}
